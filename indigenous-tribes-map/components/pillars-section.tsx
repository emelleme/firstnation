"use client"

import { motion } from "framer-motion"
import { Heart, Feather, Microscope, Waves } from "lucide-react"

const pillars = [
  {
    icon: Heart,
    title: "Faith & Stewardship",
    subtitle: "Restoring the Spirit",
    description: "We mobilize faith communities to move beyond the sanctuary and into the sand.",
    color: "text-chart-3",
  },
  {
    icon: Feather,
    title: "Art & Culture",
    subtitle: "Restoring the Narrative",
    description:
      "We believe art is the language of change. We fund projects that make conservation visible and visceral.",
    color: "text-accent",
  },
  {
    icon: Microscope,
    title: "Science & Innovation",
    subtitle: "Restoring the Structure",
    description:
      "We fund the 'hard work' of rebuilding the ocean's architecture using DeSci (Decentralized Science) principles.",
    color: "text-chart-1",
  },
]

export function PillarsSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Waves className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Foundation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Three Powerful Forces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We operate at the intersection of faith, culture, and science to restore the divine balance of our oceans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <pillar.icon className={`h-10 w-10 ${pillar.color} mb-6`} />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-primary font-medium mb-4">{pillar.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
