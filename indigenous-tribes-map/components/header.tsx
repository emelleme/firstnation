"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Feather } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Feather className="h-6 w-6 text-primary" />
            <span className="font-serif text-lg font-semibold text-foreground">First Nations Journal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/map" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tribal Map
            </Link>
            <Link href="/timeline" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Timeline
            </Link>
            <Link href="/tribes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tribes
            </Link>
            <Link href="/guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ask the Guide
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20"
            >
              <a
                href="https://www.zeffy.com/en-US/donation-form/seed-2-sea-first-nations-donation"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link
              href="/map"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tribal Map
            </Link>
            <Link
              href="/timeline"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="/tribes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tribes
            </Link>
            <Link
              href="/guide"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ask the Guide
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20"
            >
              <a
                href="https://www.zeffy.com/en-US/donation-form/seed-2-sea-first-nations-donation"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
