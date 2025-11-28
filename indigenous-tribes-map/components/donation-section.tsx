"use client"

import { motion } from "framer-motion"
import { HeartHandshake, ShieldCheck, Sprout } from "lucide-react"

import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: HeartHandshake,
    title: "Indigenous-led impact",
    description:
      "Gifts fuel storytelling, education, and restoration work we build alongside Tribal partners and culture bearers.",
  },
  {
    icon: ShieldCheck,
    title: "100% of your gift",
    description: "Zeffy passes every dollar through; you choose whether to add an optional tip to cover their costs.",
  },
  {
    icon: Sprout,
    title: "Keep the journal living",
    description: "Support ongoing updates to the First Nations Living Journal so more people can learn freely.",
  },
]

export function DonationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
        >
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              Seed 2 Sea - First Nations Donations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Invest in Indigenous-led restoration
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Your donation keeps this Living Journal growing and strengthens Seed 2 Sea&apos;s collaboration with
              Native communities who steward these stories, waters, and lands.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <a
                  href="https://www.zeffy.com/en-US/donation-form/seed-2-sea-first-nations-donation"
                  target="_blank"
                  rel="noreferrer"
                >
                  Donate on Zeffy
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="/about">Learn about our mission</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <highlight.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
