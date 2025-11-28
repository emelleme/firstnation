import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TribalMap } from "@/components/tribal-map"
import { MapPin, Info } from "lucide-react"

export const metadata = {
  title: "Tribal Map | First Nations Living Journal",
  description: "Explore the territories of Native American tribes across North America with our interactive map.",
}

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-2">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Interactive Map</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Tribal Territories of Turtle Island
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Explore the ancestral and current territories of Native American nations. Click on any marker to learn
              more about that tribe.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-lg p-4 flex items-start gap-3 mb-8">
            <Info className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Land Acknowledgment</h3>
              <p className="text-sm text-muted-foreground">
                We acknowledge that this map represents the traditional territories of Indigenous peoples who have been
                stewards of this land since time immemorial. These boundaries are simplified representations of complex
                historical territories.
              </p>
            </div>
          </div>

          <TribalMap />
        </div>
      </main>
      <Footer />
    </div>
  )
}
