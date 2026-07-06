"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import {
  Bot,
  ExternalLink,
  Loader2,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react"

import {
  answerFromPortfolio,
  askJohnPrompts,
  type AskJohnAnswer,
  type AskJohnSource,
} from "@/data/ask-john"
import { cn } from "@/lib/utils"

type ChatMessage = {
  id: string
  role: "assistant" | "user"
  content: string
  sources?: AskJohnSource[]
  mode?: "local" | "remote" | "fallback"
}

type RemoteAskJohnResponse = {
  answer?: string
  sources?: AskJohnSource[]
}

const askJohnEndpoint = process.env.NEXT_PUBLIC_ASK_JOHN_ENDPOINT

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hey, I am John's portfolio assistant. Ask me about his AI systems, services, experience, education, or what kind of problems he is a good fit for.",
  sources: [
    { label: "About", href: "#about" },
    { label: "Systems", href: "#systems" },
    { label: "Contact", href: "#contact" },
  ],
  mode: "local",
}

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

async function askRemoteAgent(message: string, history: ChatMessage[]) {
  if (!askJohnEndpoint) return null

  const response = await fetch(askJohnEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history: history.slice(-8).map(({ role, content }) => ({ role, content })),
    }),
  })

  if (!response.ok) {
    throw new Error(`Ask John endpoint returned ${response.status}`)
  }

  return (await response.json()) as RemoteAskJohnResponse
}

function sourceList(sources?: AskJohnSource[]) {
  if (!sources?.length) return null

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {sources.map((source) => (
        <a
          key={`${source.href}-${source.label}`}
          href={source.href}
          target={source.href.startsWith("http") || source.href.endsWith(".pdf") ? "_blank" : undefined}
          rel={source.href.startsWith("http") || source.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 border border-cyan-300/15 bg-cyan-300/[0.04] px-2 py-1 text-[0.68rem] font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/10"
        >
          {source.label}
          {(source.href.startsWith("http") || source.href.endsWith(".pdf")) && (
            <ExternalLink className="h-3 w-3" />
          )}
        </a>
      ))}
    </div>
  )
}

function modeLabel(mode?: ChatMessage["mode"]) {
  if (mode === "remote") return "model"
  if (mode === "fallback") return "local fallback"
  return "portfolio brain"
}

export function AskJohnAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [draft, setDraft] = useState("")
  const [pending, setPending] = useState(false)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  const suggestedPrompts = useMemo(() => askJohnPrompts, [])

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    window.setTimeout(() => inputRef.current?.focus(), 80)

    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [open])

  useEffect(() => {
    if (!open) return
    const node = scrollRef.current
    if (!node) return
    node.scrollTop = node.scrollHeight
  }, [messages, open])

  const submitQuestion = async (question: string) => {
    const trimmed = question.trim()
    if (!trimmed || pending) return

    const userMessage: ChatMessage = {
      id: createId("user"),
      role: "user",
      content: trimmed,
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setDraft("")
    setPending(true)

    try {
      const remoteAnswer = await askRemoteAgent(trimmed, nextMessages)

      if (remoteAnswer?.answer) {
        setMessages((current) => [
          ...current,
          {
            id: createId("assistant"),
            role: "assistant",
            content: remoteAnswer.answer ?? "",
            sources: remoteAnswer.sources,
            mode: "remote",
          },
        ])
        return
      }

      const localAnswer = answerFromPortfolio(trimmed)
      setMessages((current) => [
        ...current,
        {
          id: createId("assistant"),
          role: "assistant",
          content: localAnswer.answer,
          sources: localAnswer.sources,
          mode: "local",
        },
      ])
    } catch {
      const localAnswer: AskJohnAnswer = answerFromPortfolio(trimmed)
      setMessages((current) => [
        ...current,
        {
          id: createId("assistant"),
          role: "assistant",
          content: localAnswer.answer,
          sources: localAnswer.sources,
          mode: "fallback",
        },
      ])
    } finally {
      setPending(false)
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void submitQuestion(draft)
  }

  return (
    <div className="fixed bottom-5 right-4 z-[75] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      <div
        id="ask-john-agent"
        className={cn(
          "w-[min(calc(100vw-2rem),30rem)] origin-bottom-right overflow-hidden border border-cyan-300/20 bg-[#07111d]/95 text-slate-100 shadow-[0_26px_90px_rgba(0,0,0,0.56),0_0_0_1px_rgba(103,232,249,0.06)] backdrop-blur-xl transition duration-300",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-[0.98] opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="border-b border-cyan-300/15 bg-white/[0.025] px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-cyan-300/80">
                  Ask John
                </p>
                <h2 className="mt-1 text-base font-semibold text-white">
                  Portfolio assistant
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Grounded on John's site. Backend-ready.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-cyan-300/15 text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              aria-label="Close Ask John"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="max-h-[min(28rem,calc(100dvh-16rem))] space-y-4 overflow-y-auto px-4 py-4 [scrollbar-color:rgba(103,232,249,0.42)_transparent] [scrollbar-width:thin] md:max-h-[32rem]"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "max-w-[92%]",
                message.role === "user" ? "ml-auto text-right" : "mr-auto text-left",
              )}
            >
              <div
                className={cn(
                  "border px-4 py-3 text-sm leading-6",
                  message.role === "user"
                    ? "border-cyan-300/35 bg-cyan-300 text-slate-950"
                    : "border-cyan-200/10 bg-white/[0.035] text-slate-200",
                )}
              >
                {message.content.split("\n\n").map((paragraph, index) => (
                  <p key={`${message.id}-${index}`} className="mb-2 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              {message.role === "assistant" ? (
                <div className="mt-2">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-500">
                    {modeLabel(message.mode)}
                  </p>
                  {sourceList(message.sources)}
                </div>
              ) : null}
            </div>
          ))}

          {pending ? (
            <div className="mr-auto flex max-w-[92%] items-center gap-2 border border-cyan-200/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300">
              <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
              Reading the portfolio context...
            </div>
          ) : null}
        </div>

        <div className="border-t border-cyan-300/15 px-4 py-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt.prompt}
                type="button"
                disabled={pending}
                className="border border-cyan-300/15 bg-cyan-300/[0.04] px-2.5 py-1.5 text-left text-xs text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/10 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => void submitQuestion(prompt.prompt)}
              >
                {prompt.label}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex gap-2">
            <textarea
              ref={inputRef}
              value={draft}
              rows={1}
              placeholder="Ask about John's AI work..."
              className="min-h-11 flex-1 resize-none border border-cyan-300/15 bg-[#050912] px-3 py-3 text-sm leading-5 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/20"
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault()
                  void submitQuestion(draft)
                }
              }}
            />
            <button
              type="submit"
              disabled={!draft.trim() || pending}
              className="flex h-11 w-11 shrink-0 items-center justify-center bg-cyan-300 text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send question"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        className="group flex h-14 items-center gap-3 overflow-hidden border border-cyan-300/30 bg-[#07111d]/90 px-4 text-cyan-100 shadow-[0_18px_55px_rgba(0,0,0,0.44),0_0_0_1px_rgba(103,232,249,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/12 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
        aria-expanded={open}
        aria-controls="ask-john-agent"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="relative flex h-8 w-8 items-center justify-center border border-cyan-300/20 bg-cyan-300/10">
          <MessageCircle className="h-4 w-4" />
          <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-cyan-200" />
        </span>
        <span className="text-sm font-semibold">Ask John</span>
      </button>
    </div>
  )
}
