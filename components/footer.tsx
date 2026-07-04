
"use client"

import { useEffect, useState } from "react"

function getCurrentYear() {
  return new Date().getFullYear()
}

function getMillisecondsUntilNextYear() {
  const now = new Date()
  const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 1)

  return Math.max(1000, nextYear.getTime() - now.getTime())
}

export function Footer({ setShowTOS, setShowPrivacy, showTOS, showPrivacy }: {
  setShowTOS: (open: boolean) => void,
  setShowPrivacy: (open: boolean) => void,
  showTOS: boolean,
  showPrivacy: boolean
}) {
  const [currentYear, setCurrentYear] = useState(getCurrentYear)

  useEffect(() => {
    let timeoutId: number | undefined

    const syncYear = () => {
      setCurrentYear(getCurrentYear())
      timeoutId = window.setTimeout(syncYear, getMillisecondsUntilNextYear())
    }

    syncYear()

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <footer className="relative z-10 border-t border-cyan-300/10 bg-[#050912]/95">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-slate-500">
          © <span suppressHydrationWarning>{currentYear}</span> John Carroll. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 text-slate-400">
          <button
            className="text-xs hover:text-cyan-200 bg-transparent border-0 p-0 m-0 cursor-pointer"
            onClick={() => setShowTOS(true)}
            type="button"
          >
            Terms of Service
          </button>
          <button
            className="text-xs hover:text-cyan-200 bg-transparent border-0 p-0 m-0 cursor-pointer"
            onClick={() => setShowPrivacy(true)}
            type="button"
          >
            Privacy
          </button>
        </nav>
      </div>
      {/* Funny TOS Modal */}
      {showTOS && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0b111d] border border-cyan-300/20 text-slate-100 shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-slate-400 hover:text-cyan-200"
              onClick={() => setShowTOS(false)}
              aria-label="Close Terms of Service"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Terms of Service</h3>
            <p className="mb-2">By using this site, you agree to the following highly serious terms:</p>
            <ul className="list-disc pl-6 mb-4 text-sm">
              <li>You promise not to judge my code by the number of dad jokes or coffee references.</li>
              <li>If you find a typo, you must say "bless you" out loud.</li>
              <li>All bugs are features in disguise. Please treat them as such.</li>
              <li>By scrolling, you acknowledge that you are, in fact, scrolling.</li>
              <li>Enjoy the site. Or else.</li>
            </ul>
            <p className="text-xs text-slate-500">(This is not legal advice. Or a real contract. But it is real fun.)</p>
          </div>
        </div>
      )}
      {/* Funny Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0b111d] border border-cyan-300/20 text-slate-100 shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-2xl text-slate-400 hover:text-cyan-200"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close Privacy Policy"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Privacy Policy</h3>
            <p className="mb-2">Your privacy is important. Here's how we handle your data:</p>
            <ul className="list-disc pl-6 mb-4 text-sm">
              <li>This site collects exactly zero personal data. Not even your high score.</li>
              <li>If you send a message, it goes straight to my inbox, not a secret lair.</li>
              <li>Cookies? Only the chocolate chip kind, and you have to bring your own.</li>
              <li>We don't track you. We barely track our own coffee intake.</li>
              <li>Relax and browse freely. Your secrets are safe (mostly because we don't know them).</li>
            </ul>
            <p className="text-xs text-slate-500">(No actual lawyers were consulted in the making of this policy.)</p>
          </div>
        </div>
      )}
    </footer>
  )
}
