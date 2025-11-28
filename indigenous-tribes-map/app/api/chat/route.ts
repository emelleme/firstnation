import { consumeStream, convertToCoreMessages, streamText, type UIMessage, createOpenAI } from "ai"
import { tribes } from "@/lib/tribes-data"
import { timelineEvents } from "@/lib/timeline-data"

export const runtime = 'edge'

export const maxDuration = 30

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.OPENROUTER_REFERER || "https://tribal.seed2sea.org",
    "X-Title": process.env.OPENROUTER_SITE_NAME || "First Nations Living Journal",
  },
})

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

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  if (!process.env.OPENROUTER_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing OPENROUTER_API_KEY" }), { status: 500 })
  }

  const prompt = convertToCoreMessages(messages)

  const result = streamText({
    model: openrouter(process.env.OPENROUTER_MODEL || "x-ai/grok-4.1-fast"),
    system: systemPrompt,
    messages: prompt,
    maxOutputTokens: 1500,
    temperature: 0.7,
  })

  return result.toUIMessageStreamResponse({
    consumeSseStream: consumeStream,
  })
}
