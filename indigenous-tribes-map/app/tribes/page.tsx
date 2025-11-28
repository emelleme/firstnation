import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TribesGrid } from "@/components/tribes-grid"
import { Users } from "lucide-react"

export const metadata = {
  title: "Tribes | First Nations Living Journal",
  description:
    "Explore the diverse nations and tribes of Native America. Learn about their histories, cultures, and traditions.",
}

export default function TribesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Nations & Tribes</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">The First Peoples</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover the unique histories, traditions, and living cultures of Native American nations. Each tribe has
              its own story, language, and spiritual practices that continue to thrive today.
            </p>
          </div>

          <TribesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
