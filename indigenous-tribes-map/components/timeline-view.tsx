"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { timelineEvents, categoryColors, categoryLabels } from "@/lib/timeline-data"
import { tribes } from "@/lib/tribes-data"
import { Button } from "@/components/ui/button"

export function TimelineView() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedEra, setSelectedEra] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const eras = [
    { id: "ancient", name: "Ancient (Pre-1492)", start: 0, end: 1491 },
    { id: "contact", name: "Contact Era (1492-1800)", start: 1492, end: 1800 },
    { id: "removal", name: "Removal Era (1800-1890)", start: 1801, end: 1890 },
    { id: "modern", name: "Modern Era (1890+)", start: 1891, end: 2100 },
  ]

  const filteredEvents = timelineEvents.filter((event) => {
    if (selectedCategory && event.category !== selectedCategory) return false
    if (selectedEra) {
      const era = eras.find((e) => e.id === selectedEra)
      if (era && (event.year < era.start || event.year > era.end)) return false
    }
    return true
  })

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const getTribeLink = (tribeName: string) => {
    const tribe = tribes.find((t) => t.name === tribeName || tribeName.includes(t.name.split(" ")[0]))
    return tribe ? `/tribes/${tribe.id}` : null
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <Button variant={selectedEra === null ? "default" : "outline"} size="sm" onClick={() => setSelectedEra(null)}>
            All Eras
          </Button>
          {eras.map((era) => (
            <Button
              key={era.id}
              variant={selectedEra === era.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedEra(era.id)}
            >
              {era.name}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="text-sm bg-background border border-border rounded-md px-3 py-1.5 text-foreground"
          >
            <option value="">All Categories</option>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hidden md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-md hidden md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 scrollbar-hide md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="relative min-w-max">
            <div className="absolute top-8 left-0 right-0 h-1 bg-border" />

            <div className="flex gap-4 pt-4">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative flex-shrink-0 w-72"
                >
                  <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10"
                    style={{ backgroundColor: categoryColors[event.category] }}
                  />

                  <div className="mt-10 bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-serif font-bold text-foreground">{event.year}</span>
                      <span
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: categoryColors[event.category] }}
                      >
                        {categoryLabels[event.category]}
                      </span>
                    </div>

                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{event.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{event.description}</p>

                    {event.tribes.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {event.tribes.map((tribeName) => {
                          const link = getTribeLink(tribeName)
                          return link ? (
                            <Link
                              key={tribeName}
                              href={link}
                              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {tribeName}
                            </Link>
                          ) : (
                            <span
                              key={tribeName}
                              className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                            >
                              {tribeName}
                            </span>
                          )
                        })}
                      </div>
                    )}

                    {event.significance === "high" && (
                      <div className="mt-3 flex items-center gap-1 text-xs text-accent">
                        <Clock className="h-3 w-3" />
                        <span>Major Historical Event</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-foreground mb-3">Event Categories</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full transition-colors ${
                selectedCategory === key
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: categoryColors[key] }} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredEvents.length} of {timelineEvents.length} events
      </div>
    </div>
  )
}
