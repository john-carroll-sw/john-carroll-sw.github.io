"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { useRef, useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSplashComplete } from "./layout"

// Eye-catching geometric background (simple version)
const GeometricBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 opacity-20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-pink-400 opacity-10 rounded-full blur-2xl animate-pulse" />
  </div>
)

export default function Page() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const [navTransparent, setNavTransparent] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showTOS, setShowTOS] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const splashComplete = useSplashComplete()

  useEffect(() => {
    if (!splashComplete) return;
    const onScroll = () => {
      setNavTransparent(window.scrollY < 10)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    let timer: NodeJS.Timeout | null = null
    // Only start fade-in timer after splash is complete
    requestAnimationFrame(() => {
      timer = setTimeout(() => setHeaderVisible(true), 3000)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timer) clearTimeout(timer)
    }
  }, [splashComplete])

  return (
    <div className="min-h-screen bg-background relative">
      <GeometricBackground />
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-500 ${navTransparent ? "bg-transparent border-transparent" : "bg-background/80 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60"} transition-opacity duration-1000`}
        style={{
          opacity: headerVisible ? 1 : 0,
          transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)'
        }}
      >
        <div className="container flex h-16 items-center px-4 md:px-2">
          <Link className="ml-2 mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">John Carroll</span>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-purple-400">About</Link>
            <Link href="#projects" className="transition-colors hover:text-teal-400">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-pink-400">Contact</Link>
          </nav>
          {/* Hamburger for mobile */}
          <button
            className="ml-auto md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Open navigation menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6 text-purple-400" />
          </button>
          {/* Resume button always right-aligned */}
          <Link
            href="https://docs.google.com/document/d/10wnAlU0SgN2C0a-o_qfcBXXa85YzXG7tOV_Vkp1fmwE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 md:ml-auto"
          >
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-full md:w-auto">Resume</Button>
          </Link>
          <div className="ml-2 flex items-center">
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile Nav Overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 flex flex-col items-center justify-center gap-8 text-2xl font-bold">
            <button
              className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Close navigation menu"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="text-3xl">×</span>
            </button>
            <Link href="#about" onClick={() => setMobileNavOpen(false)} className="hover:text-purple-400">About</Link>
            <Link href="#projects" onClick={() => setMobileNavOpen(false)} className="hover:text-teal-400">Projects</Link>
            <Link href="#contact" onClick={() => setMobileNavOpen(false)} className="hover:text-pink-400">Contact</Link>
            <Link
              href="https://docs.google.com/document/d/10wnAlU0SgN2C0a-o_qfcBXXa85YzXG7tOV_Vkp1fmwE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs mt-8"
            >
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 w-full">Resume</Button>
            </Link>
          </div>
        )}
      </header>

      <main className="-mt-16">
        {/* Hero Section */}
        <section>
          <AutoSliderBanner />
        </section>
        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="w-full py-20 md:py-32 relative px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>
          {/* Work in Progress Banner */}
          <div className="flex justify-center mb-8">
            <span className="inline-block rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-4 py-2 text-sm font-semibold shadow-md animate-pulse">
              🚧 Work in Progress 🚧
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
              image="/placeholder.svg?height=400&width=600"
              link="https://github.com"
              tags={["Next.js", "Prisma", "Stripe"]}
            />
            <ProjectCard
              title="Task Management App"
              description="A real-time task management application with team collaboration features."
              image="/placeholder.svg?height=400&width=600"
              link="https://github.com"
              tags={["React", "Node.js", "Socket.io"]}
            />
            <ProjectCard
              title="AI Chat Interface"
              description="An AI-powered chat interface with natural language processing capabilities."
              image="/placeholder.svg?height=400&width=600"
              link="https://github.com"
              tags={["OpenAI", "Next.js", "TailwindCSS"]}
            />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 md:py-32 bg-gradient-to-b from-background to-purple-950/30 rounded-xl my-12 px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Tech Stack</h2>
          <TechStack />
        </section>

        {/* Career Timeline Placeholder */}
        <section id="career-timeline" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Career Timeline</h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">Coming soon: A visual timeline of my career journey, roles, and key milestones.</p>
            <div className="h-24 bg-muted rounded-xl flex items-center justify-center text-lg font-semibold text-muted-foreground/70">[Timeline Placeholder]</div>
          </div>
        </section>

        {/* Speaking Engagements Placeholder */}
        <section id="speaking" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-pink-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">Speaking Engagements</h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">Talks, workshops, and panels at conferences and meetups will be listed here.</p>
            <ul className="space-y-2">
              <li className="bg-muted rounded px-4 py-2 text-muted-foreground/70">[Conference/Workshop Placeholder]</li>
            </ul>
          </div>
        </section>

        {/* Blogs Published Placeholder */}
        <section id="blogs" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">Blogs Published</h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">A curated list of my published blog posts and articles will appear here.</p>
            <ul className="space-y-2">
              <li className="bg-muted rounded px-4 py-2 text-muted-foreground/70">[Blog Post Placeholder]</li>
            </ul>
          </div>
        </section>

        {/* Stealth Startup Work Placeholder */}
        <section id="stealth" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-teal-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Stealth Startup Work</h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">Details about my work on stealth and early-stage startups will be shared here (as much as I can reveal!).</p>
            <div className="h-20 bg-muted rounded-xl flex items-center justify-center text-lg font-semibold text-muted-foreground/70">[Stealth Startup Placeholder]</div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/80">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 John Carroll. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <button
              className="text-xs hover:underline underline-offset-4 bg-transparent border-0 p-0 m-0 cursor-pointer"
              onClick={() => setShowTOS(true)}
              type="button"
            >
              Terms of Service
            </button>
            <button
              className="text-xs hover:underline underline-offset-4 bg-transparent border-0 p-0 m-0 cursor-pointer"
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
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
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
              <p className="text-xs text-gray-500">(This is not legal advice. Or a real contract. But it is real fun.)</p>
            </div>
          </div>
        )}
        {/* Funny Privacy Modal */}
        {showPrivacy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full relative">
              <button
                className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
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
              <p className="text-xs text-gray-500">(No actual lawyers were consulted in the making of this policy.)</p>
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}
