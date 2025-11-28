"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Users, Globe, Search } from "lucide-react"
import { tribes, regionColors } from "@/lib/tribes-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TribesGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredTribes = tribes.filter((tribe) => {
    const matchesSearch =
      tribe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tribe.territories.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesRegion = !selectedRegion || tribe.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  const uniqueRegions = [...new Set(tribes.map((t) => t.region))]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tribes or territories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedRegion === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedRegion(null)}
          >
            All Regions
          </Button>
          {uniqueRegions.map((region) => (
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTribes.map((tribe, index) => (
          <motion.div
            key={tribe.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Link href={`/tribes/${tribe.id}`} className="group block">
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-[16/9]">
                  <img
                    src={`/.jpg?height=250&width=400&query=${encodeURIComponent(tribe.imageQuery)}`}
                    alt={tribe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: regionColors[tribe.region] }}
                    >
                      {tribe.region}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {tribe.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{tribe.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {tribe.population}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {tribe.languages[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="line-clamp-1">{tribe.territories.slice(0, 2).join(", ")}</span>
                    {tribe.territories.length > 2 && (
                      <span className="text-muted-foreground">+{tribe.territories.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredTribes.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No tribes found matching your search.</p>
        </div>
      )}

      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredTribes.length} of {tribes.length} nations
      </div>
    </div>
  )
}
