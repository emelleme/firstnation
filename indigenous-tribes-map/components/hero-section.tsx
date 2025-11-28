"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/native-american-landscape-with-mountains-and-plain.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6">
            Seed 2 Sea Foundation Presents
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance">
            First Nations
            <span className="block text-accent">Living Journal</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            A living tribute to the Indigenous peoples and tribes who have called this land home for thousands of years.
          </p>

          <p className="text-sm text-primary-foreground/60 max-w-xl mx-auto mb-10">
            Explore their territories, trace their journeys through time, and learn their stories through an interactive
            guide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/map">
                <MapPin className="mr-2 h-4 w-4" />
                Explore the Map
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/guide">
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask the Guide
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <MapPin className="h-8 w-8 text-accent mb-4 mx-auto" />
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-2">Interactive Map</h3>
            <p className="text-sm text-primary-foreground/70">Explore tribal territories across Turtle Island</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <Clock className="h-8 w-8 text-accent mb-4 mx-auto" />
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-2">Living Timeline</h3>
            <p className="text-sm text-primary-foreground/70">Journey through centuries of history and resilience</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
            <MessageCircle className="h-8 w-8 text-accent mb-4 mx-auto" />
            <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-2">AI Guide</h3>
            <p className="text-sm text-primary-foreground/70">Learn and explore through meaningful dialogue</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowRight className="h-6 w-6 text-primary-foreground/50 rotate-90" />
        </motion.div>
      </div>
    </section>
  )
}
