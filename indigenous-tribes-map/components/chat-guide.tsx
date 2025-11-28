"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { TextStreamChatTransport } from "ai"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Feather, User, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { tribes } from "@/lib/tribes-data"

const suggestedQuestions = [
  "Tell me about the Cherokee Trail of Tears",
  "What is the significance of the Sun Dance ceremony?",
  "How did the Iroquois Confederacy influence American democracy?",
  "What tribes lived in the Southwest region?",
  "Tell me about Navajo weaving traditions",
  "What happened at Wounded Knee?",
  "How do tribes maintain their languages today?",
  "What is the history of the Seminole people?",
]

interface ChatGuideProps {
  initialTribe?: string
}

export function ChatGuide({ initialTribe }: ChatGuideProps) {
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const tribe = initialTribe ? tribes.find((t) => t.id === initialTribe) : null

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (tribe && messages.length === 0) {
      setInputValue(`Tell me about the ${tribe.name} people`)
    }
  }, [tribe, messages.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || status === "streaming") return

    sendMessage({ text: inputValue.trim() })
    setInputValue("")
  }

  const handleSuggestionClick = (question: string) => {
    if (status === "streaming") return
    setInputValue("")
    sendMessage({ text: question })
  }

  const handleReset = () => {
    setMessages([])
    setInputValue("")
    inputRef.current?.focus()
  }

  const isLoading = status === "streaming"

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] max-h-[700px] bg-card border border-border rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Feather className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-serif font-semibold text-foreground">Spirit Guide</h2>
            <p className="text-xs text-muted-foreground">Ask about Indigenous history & culture</p>
          </div>
        </div>
        {messages.length > 0 && (
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <RefreshCw className="h-4 w-4 mr-2" />
            New Chat
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <Sparkles className="h-12 w-12 text-primary mb-4" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Welcome, Seeker of Knowledge</h3>
            <p className="text-muted-foreground max-w-md mb-8">
              I am here to share the stories, histories, and wisdom of the First Nations. What would you like to learn
              about?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
              {suggestedQuestions.slice(0, 4).map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(question)}
                  className="text-left text-sm px-4 py-3 bg-secondary hover:bg-muted rounded-lg text-foreground transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Feather className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <div key={index} className="prose prose-sm max-w-none">
                          {part.text.split("\n").map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className={
                                message.role === "user" ? "text-primary-foreground" : "text-secondary-foreground"
                              }
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )
                    }
                    return null
                  })}
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}

            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Feather className="h-4 w-4 text-primary-foreground animate-pulse" />
                </div>
                <div className="bg-secondary rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length > 0 && messages.length < 4 && (
        <div className="px-6 py-3 border-t border-border bg-secondary/30">
          <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(4, 8).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(question)}
                disabled={isLoading}
                className="text-xs px-3 py-1.5 bg-background hover:bg-muted rounded-full text-foreground transition-colors disabled:opacity-50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about Indigenous history, culture, traditions..."
            disabled={isLoading}
            className="flex-1 bg-secondary border border-border rounded-full px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          <Button
            type="submit"
            size="icon"
            className="rounded-full h-12 w-12"
            disabled={isLoading || !inputValue.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}
