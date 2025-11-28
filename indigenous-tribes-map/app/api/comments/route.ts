export const runtime = "edge"
export const maxDuration = 30

type KVNamespace = {
  get(key: string): Promise<string | null>
  put(key: string, value: string): Promise<void>
  list(options?: { prefix?: string }): Promise<{ keys: { name: string }[] }>
}

type JournalType = "comment" | "review"

interface JournalEntry {
  id: string
  title: string
  body: string
  entryType: JournalType
  name: string
  email?: string
  createdAt: string
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

export async function GET(_req: Request, { env }: { env: { COMMENTS: KVNamespace } }) {
  if (!env?.COMMENTS) {
    return jsonResponse({ error: "COMMENTS KV binding missing" }, 500)
  }

  const list = await env.COMMENTS.list({ prefix: "comment:" })
  const values = await Promise.all(
    list.keys.map(async (key) => {
      const data = await env.COMMENTS.get(key.name)
      if (!data) return null
      try {
        const parsed = JSON.parse(data) as JournalEntry
        const { email, ...publicEntry } = parsed
        return publicEntry
      } catch {
        return null
      }
    })
  )

  const entries = values.filter((v): v is Omit<JournalEntry, "email"> => Boolean(v)).sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return jsonResponse({ entries })
}

export async function POST(req: Request, { env }: { env: { COMMENTS: KVNamespace } }) {
  if (!env?.COMMENTS) {
    return jsonResponse({ error: "COMMENTS KV binding missing" }, 500)
  }

  const data = await req.json()
  const title = String(data?.title || "").trim()
  const body = String(data?.body || "").trim()
  const name = String(data?.name || "").trim()
  const entryType = (data?.entryType || "").trim() as JournalType
  const emailRaw = data?.email ? String(data.email).trim() : ""

  if (!title || !body || !name) {
    return jsonResponse({ error: "Title, body, and name are required" }, 400)
  }
  if (!["comment", "review"].includes(entryType)) {
    return jsonResponse({ error: "entryType must be 'comment' or 'review'" }, 400)
  }

  const id = crypto.randomUUID()
  const createdAt = new Date().toISOString()

  const entry: JournalEntry = {
    id,
    title,
    body,
    entryType,
    name,
    email: emailRaw || undefined,
    createdAt,
  }

  await env.COMMENTS.put(`comment:${id}`, JSON.stringify(entry))

  const { email, ...publicEntry } = entry
  return jsonResponse({ entry: publicEntry }, 201)
}
