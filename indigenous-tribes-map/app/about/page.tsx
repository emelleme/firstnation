import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Feather, Microscope, Waves, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | First Nations Living Journal",
  description:
    "Learn about the Seed 2 Sea Foundation and our mission to honor Indigenous peoples while restoring the divine balance of our oceans.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Waves className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">From Faith to Flow</h1>
            <p className="text-xl text-muted-foreground">
              Restoring the Divine Balance of our Oceans through Faith, Science, and Living Infrastructure.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-muted-foreground leading-relaxed">
              The Seed 2 Sea Foundation operates at the intersection of three powerful forces, united in our mission to
              restore and protect both our waters and the wisdom of those who have been stewards of this land for
              millennia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This First Nations Living Journal is our tribute to the Indigenous peoples of America—those who understood
              the sacred relationship between land, water, and spirit long before the concept of conservation existed.
              Their traditional ecological knowledge, passed down through countless generations, holds wisdom essential
              to healing our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-xl p-6">
              <Heart className="h-10 w-10 text-chart-3 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Faith & Stewardship</h3>
              <p className="text-sm text-primary font-medium mb-3">Restoring the Spirit</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We mobilize faith communities to move beyond the sanctuary and into the sand. Sacred obligation meets
                environmental action.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Feather className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Art & Culture</h3>
              <p className="text-sm text-primary font-medium mb-3">Restoring the Narrative</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We believe art is the language of change. We fund projects that make conservation visible, visceral, and
                unforgettable.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <Microscope className="h-10 w-10 text-chart-1 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Science & Innovation</h3>
              <p className="text-sm text-primary font-medium mb-3">Restoring the Structure</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We fund the hard work of rebuilding the ocean's architecture using DeSci (Decentralized Science)
                principles.
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 mb-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Why This Living Journal?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Indigenous peoples have always understood what Western science is only now confirming: that all living
              systems are interconnected. The health of our oceans, rivers, and lands cannot be separated from the
              wisdom of those who have protected them for thousands of years.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This journal is our way of honoring that wisdom—of creating a living, breathing resource where anyone can
              learn about the First Nations of this land, their histories, their cultures, and their ongoing fight for
              sovereignty and environmental justice.
            </p>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Begin Your Journey</h2>
            <p className="text-muted-foreground mb-8">
              Explore the map, travel through time, and engage with our guide to deepen your understanding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link href="/map">
                  Explore the Map
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/guide">
                  Ask the Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
