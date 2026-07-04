"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const DIRECT_EMAIL = "johncornellcarroll@gmail.com"
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

type FormData = {
  email: string
  message: string
  name: string
}

function buildMailtoHref({ email, message, name }: FormData) {
  const subject = `Portfolio message from ${name || "your portfolio"}`
  const body = [
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n")

  return `mailto:${DIRECT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState("")
  const [statusKind, setStatusKind] = useState<"error" | "success">("success")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const fallbackHref = useMemo(() => buildMailtoHref(formData), [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    setStatus("")

    const endpoint = FORMSPREE_ENDPOINT?.trim()

    if (!endpoint) {
      setPending(false)
      setStatusKind("success")
      setStatus("Opening your email client with this message drafted.")
      window.location.href = fallbackHref
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio message from ${formData.name}`,
        }),
      })
      if (res.ok) {
        setStatusKind("success")
        setStatus("Message sent. Thank you for reaching out.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Formspree returned an error")
      }
    } catch {
      setStatusKind("error")
      setStatus("The form could not send just now. The direct email fallback is ready below.")
    }
    setPending(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-cyan-200/15 bg-slate-950/35 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-6"
    >
      <div className="mb-5">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
          Message
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Send a note.</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-cyan-200/15 bg-[#070d18] text-slate-100 placeholder:text-slate-600 focus-visible:ring-cyan-300/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-cyan-200/15 bg-[#070d18] text-slate-100 placeholder:text-slate-600 focus-visible:ring-cyan-300/40"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-36 border-cyan-200/15 bg-[#070d18] text-slate-100 placeholder:text-slate-600 focus-visible:ring-cyan-300/40"
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="h-12 bg-cyan-300 text-slate-950 hover:bg-cyan-200" disabled={pending}>
          <Send className="h-4 w-4" />
          {pending ? "Sending..." : "Send Message"}
        </Button>
        <Button asChild variant="outline" className="h-12 border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
          <a href={fallbackHref}>
            <Mail className="h-4 w-4" />
            Email Directly
          </a>
        </Button>
      </div>

      {status ? (
        <p
          role="status"
          className={cn(
            "mt-4 border px-4 py-3 text-sm leading-6",
            statusKind === "success"
              ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
              : "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
          )}
        >
          {status}
        </p>
      ) : null}
    </form>
  )
}
