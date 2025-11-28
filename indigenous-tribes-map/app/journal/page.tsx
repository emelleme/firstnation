import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PenSquare, MessageSquareQuote, Sparkles } from "lucide-react"
import type { Metadata } from "next"
import { PublicJournal } from "@/components/public-journal"

export const metadata: Metadata = {
  title: "Living Journal | Comments & Reviews",
  description:
    "Seed 2 Sea Living Journals invite public comments and reviews. Add your voice to the First Nations Journal with a simple form—email optional and kept private.",
  openGraph: {
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Seed 2 Sea Living Journal",
      },
    ],
  },
  twitter: {
    images: ["/og-default.jpg"],
  },
}

export default function LivingJournalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold uppercase tracking-[0.18em]">
              <PenSquare className="h-4 w-4" />
              Living Journal
            </div>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Seed 2 Sea Living Journals
            </h1>
            <p className="mt-3 text-muted-foreground text-lg">
              First Nations Journal is a living, community-written record. Share comments or thoughtful reviews—email is
              optional and kept private. Your entry appears below once submitted.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-6 mb-10">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">What to share</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MessageSquareQuote className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Comments</h4>
                  <p className="text-sm text-muted-foreground">
                    Reflections, ceremony notes, or questions tied to First Nations stories and Tribal Artifacts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Reviews</h4>
                  <p className="text-sm text-muted-foreground">
                    Thoughtful takes on ceremonies, art pieces, or activations that honor Indigenous leadership.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Email is optional and never displayed. Entries are saved to the Living Journal and shown publicly below.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">Public Comments & Reviews</h2>
            <p className="text-muted-foreground">
              Anyone can add a comment or review below. Email is optional and kept private. Entries are saved to
              Cloudflare KV and shown immediately.
            </p>
            <PublicJournal />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
