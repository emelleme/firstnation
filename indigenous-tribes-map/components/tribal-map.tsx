"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { MapPin, Users, Globe, X, ArrowRight } from "lucide-react"
import { tribes, type Tribe, regionColors, regionPositions } from "@/lib/tribes-data"
import { Button } from "@/components/ui/button"

export function TribalMap() {
  const [selectedTribe, setSelectedTribe] = useState<Tribe | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredTribes = selectedRegion ? tribes.filter((t) => t.region === selectedRegion) : tribes

  const getTribePosition = (tribe: Tribe) => {
    const basePos = regionPositions[tribe.region] || { x: 50, y: 50 }
    const regionTribes = tribes.filter((t) => t.region === tribe.region)
    const index = regionTribes.findIndex((t) => t.id === tribe.id)

    const offsetX = ((index % 3) - 1) * 5
    const offsetY = Math.floor(index / 3) * 5

    return {
      x: Math.min(95, Math.max(5, basePos.x + offsetX)),
      y: Math.min(95, Math.max(5, basePos.y + offsetY)),
    }
  }

  return (
    <div className="relative w-full">
      <div className="flex flex-wrap gap-2 mb-6">
        <Button
          variant={selectedRegion === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedRegion(null)}
        >
          All Regions
        </Button>
        {Object.keys(regionPositions).map((region) => (
          <Button
            key={region}
            variant={selectedRegion === region ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedRegion(region)}
            style={{
              borderColor: regionColors[region],
              color: selectedRegion === region ? "white" : regionColors[region],
              backgroundColor: selectedRegion === region ? regionColors[region] : "transparent",
            }}
          >
            {region}
          </Button>
        ))}
      </div>

      <div className="relative aspect-[16/10] bg-muted rounded-xl overflow-hidden border border-border">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/north-america-terrain-map-topographic.jpg')`,
          }}
        />

        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          {Object.entries(regionPositions).map(([region, pos]) => (
            <g key={region}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={12}
                fill={regionColors[region]}
                opacity={hoveredRegion === region || selectedRegion === region ? 0.4 : 0.15}
                className="transition-opacity duration-300"
              />
            </g>
          ))}
        </svg>

        {filteredTribes.map((tribe) => {
          const pos = getTribePosition(tribe)
          return (
            <motion.button
              key={tribe.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
              }}
              onClick={() => setSelectedTribe(tribe)}
              onMouseEnter={() => setHoveredRegion(tribe.region)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div
                className="w-4 h-4 rounded-full border-2 border-background shadow-lg group-hover:scale-150 transition-transform duration-200"
                style={{ backgroundColor: regionColors[tribe.region] }}
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-foreground text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                  {tribe.name}
                </div>
              </div>
            </motion.button>
          )
        })}

        <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-border">
          <h4 className="text-xs font-semibold text-foreground mb-2">Regions</h4>
          <div className="space-y-1">
            {Object.entries(regionColors).map(([region, color]) => (
              <div key={region} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs text-muted-foreground">{region}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
          <span className="text-sm font-medium text-foreground">{filteredTribes.length} Nations</span>
        </div>
      </div>

      <AnimatePresence>
        {selectedTribe && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-20"
          >
            <div className="relative h-32">
              <img
                src={`/.jpg?height=200&width=400&query=${encodeURIComponent(selectedTribe.imageQuery)}`}
                alt={selectedTribe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/50" />
              <button
                onClick={() => setSelectedTribe(null)}
                className="absolute top-2 right-2 p-1 bg-background/80 rounded-full hover:bg-background transition-colors"
              >
                <X className="h-4 w-4 text-foreground" />
              </button>
              <div className="absolute bottom-3 left-3">
                <span
                  className="text-xs px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: regionColors[selectedTribe.region] }}
                >
                  {selectedTribe.region}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{selectedTribe.name}</h3>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {selectedTribe.population}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  {selectedTribe.languages[0]}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{selectedTribe.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">{selectedTribe.territories.join(", ")}</span>
              </div>

              <Button asChild className="w-full" size="sm">
                <Link href={`/tribes/${selectedTribe.id}`}>
                  View Full Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
