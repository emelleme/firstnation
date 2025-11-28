"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MapPin, Users } from "lucide-react"
import { tribes } from "@/lib/tribes-data"
import { Button } from "@/components/ui/button"

const featuredTribes = tribes.slice(0, 4)

export function FeaturedTribes() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
        >
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-2">Featured Nations</h2>
            <p className="text-muted-foreground">
              Discover the rich histories and living cultures of Native American tribes.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/tribes">
              View All Tribes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTribes.map((tribe, index) => (
            <motion.div
              key={tribe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/tribes/${tribe.id}`} className="group block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={`/.jpg?height=300&width=400&query=${encodeURIComponent(tribe.imageQuery)}`}
                    alt={tribe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-primary-foreground/80 uppercase tracking-wider">{tribe.region}</span>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tribe.name}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {tribe.territories[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {tribe.population}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
