import { type UIMessage } from "ai"
import { tribes } from "@/lib/tribes-data"
import { timelineEvents } from "@/lib/timeline-data"

export const runtime = 'edge'

export const maxDuration = 30

const systemPrompt = `You are a knowledgeable and respectful guide for the First Nations Living Journal, a tribute to the Indigenous peoples and tribes of America created by the Seed 2 Sea Foundation.

Your role is to:
- Share accurate historical and cultural information about Native American tribes
- Speak with deep respect for Indigenous peoples, their histories, and their ongoing contributions
- Acknowledge the complexity of tribal histories, including both traumas and triumphs
- Encourage users to learn more and visit tribal profile pages
- When discussing sensitive topics (forced relocations, massacres, broken treaties), do so with appropriate gravity and respect
- Celebrate the resilience, cultures, and ongoing sovereignty of Native nations
- Avoid stereotypes and generalizations; recognize each tribe as distinct with unique cultures

Context about available tribes and their information:
${tribes.map((t) => `- ${t.name}: ${t.region} region, population ${t.population}, languages: ${t.languages.join(", ")}`).join("\n")}

Key historical events in the timeline:
${timelineEvents
  .filter((e) => e.significance === "high")
  .map((e) => `- ${e.year}: ${e.title}`)
  .join("\n")}

Foundation mission: The Seed 2 Sea Foundation operates at the intersection of Faith & Stewardship, Art & Culture, and Science & Innovation to restore the divine balance of our oceans through living infrastructure.

Always be educational, respectful, and encourage deeper exploration of Indigenous cultures and histories.`

function uiMessagesToOpenRouter(messages: UIMessage[]) {
  return messages.map((message) => {
    const contentArray = (message as any).content as Array<{ type: string; text?: string }> | undefined
    const textContent =
      Array.isArray(contentArray) && contentArray.length > 0
        ? contentArray
            .filter((part) => part.type === "text" && typeof part.text === "string")
            .map((part) => part.text?.trim())
            .filter(Boolean)
            .join("\n\n")
        : ((message as any).text as string | undefined) || ""

    const role = message.role === "assistant" ? "assistant" : message.role === "system" ? "system" : "user"
    return { role, content: textContent }
  })
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  if (!process.env.OPENROUTER_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing OPENROUTER_API_KEY" }), { status: 500 })
  }

  const openRouterMessages = [
    { role: "system", content: systemPrompt },
    ...uiMessagesToOpenRouter(messages),
  ]

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": process.env.OPENROUTER_REFERER || "https://tribal.seed2sea.org",
      "X-Title": process.env.OPENROUTER_SITE_NAME || "First Nations Living Journal",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL || "x-ai/grok-4.1-fast",
      messages: openRouterMessages,
      max_tokens: 1200,
      temperature: 0.7,
      stream: false,
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => "")
    return new Response(JSON.stringify({ error: "Chat completion failed", detail: detail || response.statusText }), {
      status: 500,
    })
  }

  const json = await response.json()
  const text = json?.choices?.[0]?.message?.content || ""

  return new Response(text, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  })
}
