"use client"

import { useEffect, useState } from "react"
import { Loader2, MessageSquarePlus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type EntryType = "comment" | "review"

interface Entry {
  id: string
  title: string
  body: string
  entryType: EntryType
  name: string
  createdAt: string
}

export function PublicJournal() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [entryType, setEntryType] = useState<EntryType>("comment")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const fetchEntries = async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/comments", { cache: "no-store" })
      if (!res.ok) throw new Error("Failed to load entries")
      const data = await res.json()
      setEntries(data.entries || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load entries")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !body.trim() || !name.trim()) {
      setError("Title, body, and name are required")
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, name, email, entryType }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to save")
      }
      const data = await res.json()
      setEntries((prev) => [data.entry, ...prev])
      setTitle("")
      setBody("")
      setName("")
      setEmail("")
      setEntryType("comment")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquarePlus className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Add your voice</h3>
            <p className="text-sm text-muted-foreground">Public, open entry. Email is optional and kept private.</p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground">Entry Type</label>
              <Select value={entryType} onValueChange={(v) => setEntryType(v as EntryType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comment">Comment</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Your Name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Body</label>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your comment or review..."
              rows={6}
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Email (optional, kept private)</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Publish Entry"}
          </Button>
        </form>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground">Recent entries</h3>
            <p className="text-sm text-muted-foreground">Community comments and reviews from the Living Journal.</p>
          </div>
        </div>
        {loading ? (
          <div className="flex items-center gap-3 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : entries.length === 0 ? (
          <p className="text-sm text-muted-foreground">No entries yet. Be the first to share.</p>
        ) : (
          <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
            {entries.map((entry) => (
              <div key={entry.id} className="border border-border rounded-xl p-4 bg-background">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{entry.entryType}</span>
                    <span className="text-muted-foreground">by {entry.name}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground">
                    {new Date(entry.createdAt).toLocaleString(undefined, {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">{entry.title}</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{entry.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
