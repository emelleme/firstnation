import Link from "next/link"
import { Feather, Waves, Heart, Microscope } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Feather className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">Seed 2 Sea Foundation</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              From Faith to Flow — Restoring the Divine Balance of our Oceans through Faith, Science, and Living
              Infrastructure.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              This living journal honors the Indigenous peoples who have been stewards of this land since time
              immemorial.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Our Pillars</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Heart className="h-4 w-4" />
                Faith & Stewardship
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Feather className="h-4 w-4" />
                Art & Culture
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Microscope className="h-4 w-4" />
                Science & Innovation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/map"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Tribal Map
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/tribes"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Tribes
                </Link>
              </li>
              <li>
                <Link
                  href="/guide"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Ask the Guide
                </Link>
              </li>
              <li>
                <a
                  href="https://seed2sea.org"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  Seed2Sea.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Seed 2 Sea Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/50">
            <Waves className="h-4 w-4" />
            <span>Restoring the Divine Balance</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
