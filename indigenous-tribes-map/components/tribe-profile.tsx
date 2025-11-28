"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MapPin, Users, Globe, Calendar, Feather, Clock, MessageCircle } from "lucide-react"
import type { Tribe } from "@/lib/tribes-data"
import { regionColors } from "@/lib/tribes-data"
import { Button } from "@/components/ui/button"

interface TribeProfileProps {
  tribe: Tribe
}

export function TribeProfile({ tribe }: TribeProfileProps) {
  return (
    <article>
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={`/.jpg?height=600&width=1200&query=${encodeURIComponent(tribe.imageQuery)}`}
          alt={tribe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              href="/tribes"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to All Tribes</span>
            </Link>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span
                className="inline-block text-xs px-3 py-1 rounded-full text-white mb-4"
                style={{ backgroundColor: regionColors[tribe.region] }}
              >
                {tribe.region}
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                {tribe.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {tribe.population}
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {tribe.languages.join(", ")}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Since {tribe.timelineStart} CE
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                About the {tribe.name.split(" ")[0]} People
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{tribe.description}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Feather className="h-6 w-6 text-primary" />
                Cultural Traditions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tribe.traditions.map((tradition, index) => (
                  <div key={tradition} className="bg-secondary rounded-lg p-4 border border-border">
                    <span className="text-foreground font-medium">{tradition}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Historical Timeline
              </h2>
              <div className="relative pl-8 border-l-2 border-border space-y-8">
                {tribe.historicalEvents.map((event, index) => (
                  <div key={index} className="relative">
                    <div
                      className="absolute -left-[25px] w-4 h-4 rounded-full border-4 border-background"
                      style={{ backgroundColor: regionColors[tribe.region] }}
                    />
                    <div>
                      <span className="text-2xl font-serif font-bold text-foreground">{event.year}</span>
                      <p className="text-muted-foreground mt-1">{event.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Territories
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {tribe.territories.map((territory) => (
                  <span
                    key={territory}
                    className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {territory}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {tribe.languages.map((language) => (
                  <span
                    key={language}
                    className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <Button asChild className="w-full" size="lg">
                  <Link href={`/guide?tribe=${tribe.id}`}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask About This Tribe
                  </Link>
                </Button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </article>
  )
}
