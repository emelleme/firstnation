"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Droplets, ShieldCheck, Sparkles, ArrowRight, Images, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "Physical + On-chain",
    description: "Each bond is anchored to a physical Tribal Artifact (canvas, carving, beadwork) and mirrored on-chain.",
  },
  {
    title: "Proof from ceremony",
    description: "Grandmother-led blessings, photos, and geotagged deployments are logged as the bond&apos;s living proof.",
  },
  {
    title: "90/10 Reality Flow",
    description: "90% funds activation; 10% locks governance tokens in the bond (same model as Seed2Sea Reality Bonds).",
  },
]

export function RealityBondsArtifacts() {
  const [artifactImage, setArtifactImage] = useState("/tribal-artifacts-marcine-quenzer.jpg")

  return (
    <section id="reality-bonds" className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Droplets className="h-5 w-5 text-primary" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Reality Bonds · Tribal Artifacts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
              Tribal Artifacts Collection: Reality Bonds
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each bond pairs a physical Tribal Artifact with the Reality Bond covenant—grounded in ceremony, on-chain
              proofs, and the 90/10 model described in our Reality Bond docs. The first canvas, shared by Tribal
              Grandmother Marcine Quenzer, anchors this collection.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <Landmark className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-2">90/10 Flow</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  90% fuels activation/restoration; 10% locks governance tokens in the bond—identical to the Seed2Sea
                  Reality Bonds blueprint.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-2">Proofs that mature</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ceremony capture, geo-tagged deployments, and third-party confirmations update the bond metadata when
                  verified.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <Sparkles className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-2">Living artifacts</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Physical art stays with trusted caretakers; the bond is the public covenant that preserves story,
                  sovereignty, and impact.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {steps.map((step) => (
                <div key={step.title} className="bg-card border border-border rounded-xl p-4 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://seed2sea.org/reality-bond" target="_blank" rel="noreferrer">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Explore Reality Bonds
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#donate">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Support Tribal Artifacts
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-secondary/40">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/10 pointer-events-none" />
              <img
                src={artifactImage}
                alt="Tribal Artifact painting shared by Grandmother Marcine Quenzer"
                className="w-full h-full object-cover"
                onError={() => setArtifactImage("/skywoman.jpg")}
              />
              <div className="absolute left-0 right-0 bottom-0 bg-background/70 backdrop-blur-md px-4 py-3 flex items-center gap-3 border-t border-border">
                <Images className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Tribal Artifact · Gift of Grandmother Marcine Quenzer</p>
                  <p className="text-xs text-muted-foreground">Anchoring Reality Bonds with living art and ceremony.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
