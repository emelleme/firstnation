"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Sparkles className="h-10 w-10 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Begin Your Journey of Discovery
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ask our AI guide about Indigenous history, traditions, languages, and the enduring legacy of Native American
            peoples.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/guide">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
