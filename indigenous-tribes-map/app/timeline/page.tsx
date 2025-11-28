import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TimelineView } from "@/components/timeline-view"
import { Clock, Info } from "lucide-react"

export const metadata = {
  title: "Historical Timeline | First Nations Living Journal",
  description: "Journey through centuries of Native American history, from ancient origins through modern times.",
}

export default function TimelinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Living Timeline</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">A Journey Through Time</h1>
            <p className="text-muted-foreground max-w-2xl">
              From ancient civilizations to the present day, explore the rich and complex history of Indigenous peoples
              across North America.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4 flex items-start gap-3 mb-8">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Historical Context</h3>
              <p className="text-sm text-muted-foreground">
                This timeline presents key events from Indigenous perspectives. Many dates represent moments of trauma
                as well as triumph. We honor the resilience of Native peoples throughout all periods of history.
              </p>
            </div>
          </div>

          <TimelineView />
        </div>
      </main>
      <Footer />
    </div>
  )
}
