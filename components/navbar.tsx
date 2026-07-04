"use client"

import { useEffect } from "react"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Systems" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
]

export function Navbar({ brandVisible, navTransparent, headerVisible, setMobileNavOpen, mobileNavOpen }: {
  brandVisible: boolean,
  navTransparent: boolean,
  headerVisible: boolean,
  setMobileNavOpen: (open: boolean) => void,
  mobileNavOpen: boolean
}) {
  useEffect(() => {
    if (!mobileNavOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [mobileNavOpen, setMobileNavOpen])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-colors duration-500
        ${navTransparent
          ? "bg-transparent border-transparent"
          : "border-cyan-300/10 bg-[#050912]/85 backdrop-blur supports-[backdrop-filter]:bg-[#050912]/70"}
        transition-opacity duration-1000`}
      style={{
        textShadow: '0 1px 8px rgba(0,0,0,0.18), 0 2px 16px rgba(0,0,0,0.16)'
      }}
    >
      <div className="flex h-16 w-full items-center px-6 pl-7 text-white md:pl-11 md:pr-8">
        <Link
          className={`mr-6 flex shrink-0 items-center space-x-2 transition duration-700 ${
            brandVisible && headerVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
          href="#hero"
          aria-hidden={!brandVisible}
          tabIndex={brandVisible ? 0 : -1}
        >
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white">
            John Carroll
          </span>
        </Link>
        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav className="flex items-center space-x-6 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-500 hover:text-cyan-200 ${
                  headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/John_Carroll_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`transition duration-500 ${
              headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
            }`}
            style={{ transitionDelay: `${navItems.length * 80}ms` }}
          >
            <Button variant="outline" className="border-cyan-300/40 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </Link>
        </div>
        <button
          className={`ml-auto flex items-center justify-center rounded p-2 transition duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:hidden ${
            headerVisible ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
          }`}
          aria-expanded={mobileNavOpen}
          aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? (
            <X className="h-6 w-6 text-cyan-200" />
          ) : (
            <Menu className="h-6 w-6 text-cyan-200" />
          )}
        </button>
      </div>
      {mobileNavOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col overflow-y-auto bg-[#050912] text-white md:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(103,232,249,0.16),transparent_32%),linear-gradient(180deg,rgba(5,9,18,0.98),#050912_54%,#07111d_100%)]" />
          <div className="relative flex min-h-16 items-center justify-between border-b border-cyan-300/15 px-6 pt-[env(safe-area-inset-top)]">
            <Link
              href="#hero"
              onClick={() => setMobileNavOpen(false)}
              className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-white"
            >
              John Carroll
            </Link>
            <button
              className="rounded p-2 text-cyan-100 transition hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              aria-label="Close navigation menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative flex flex-1 flex-col px-6 py-8">
            <p className="max-w-xs text-sm leading-6 text-cyan-100/80">
              AI systems, work history, services, and ways to connect.
            </p>
            <nav className="mt-8 grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="group flex min-h-14 items-center justify-between border border-cyan-300/15 bg-white/[0.035] px-4 text-base font-semibold text-slate-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500 transition group-hover:text-cyan-200"
                  >
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <Link
                href="/John_Carroll_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                download
                onClick={() => setMobileNavOpen(false)}
              >
                <Button variant="outline" className="h-14 w-full border-cyan-300/40 bg-cyan-300 text-base font-semibold text-[#050912] hover:bg-cyan-200">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
