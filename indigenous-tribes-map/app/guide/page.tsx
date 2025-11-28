import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatGuide } from "@/components/chat-guide"
import { MessageCircle, Info } from "lucide-react"

export const runtime = 'edge'

export const metadata = {
  title: "Spirit Guide | First Nations Living Journal",
  description: "Engage in meaningful dialogue about Indigenous history, culture, and traditions with our AI guide.",
}

function ChatGuideWrapper({ searchParams }: { searchParams: Promise<{ tribe?: string }> }) {
  return (
    <Suspense fallback={<div className="h-[600px] bg-card border border-border rounded-xl animate-pulse" />}>
      <ChatGuideContent searchParams={searchParams} />
    </Suspense>
  )
}

async function ChatGuideContent({ searchParams }: { searchParams: Promise<{ tribe?: string }> }) {
  const params = await searchParams
  return <ChatGuide initialTribe={params.tribe} />
}

export default function GuidePage({ searchParams }: { searchParams: Promise<{ tribe?: string }> }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">AI Guide</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Spirit Guide</h1>
            <p className="text-muted-foreground max-w-2xl">
              Engage in meaningful dialogue about Indigenous history, culture, languages, and the enduring legacy of
              Native American peoples.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4 flex items-start gap-3 mb-8">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Respectful Learning</h3>
              <p className="text-sm text-muted-foreground">
                This guide shares knowledge with respect for Indigenous peoples and their ongoing sovereignty. For
                authoritative information, we encourage you to explore tribal nation websites and Indigenous-led
                educational resources.
              </p>
            </div>
          </div>

          <ChatGuideWrapper searchParams={searchParams} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
