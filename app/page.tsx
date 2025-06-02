"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import HeroMotion from "./components/hero-motion"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { useRef, useEffect, useState } from "react"

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

  useEffect(() => {
    const onScroll = () => {
      setNavTransparent(window.scrollY < 10)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      <GeometricBackground />
      <header className={`sticky top-0 z-50 w-full border-b transition-colors duration-500 ${navTransparent ? "bg-transparent border-transparent" : "bg-background/80 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60"}`}>
        <div className="container flex h-16 items-center">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">John Carroll</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-purple-400">About</Link>
            <Link href="#projects" className="transition-colors hover:text-teal-400">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-pink-400">Contact</Link>
          </nav>
          <Button variant="outline" className="ml-auto border-purple-500 text-purple-400 hover:bg-purple-500/10">Resume</Button>
        </div>
      </header>

      <main className="-mt-16">
        {/* Hero Section */}
        <section>
          <AutoSliderBanner />
        </section>
        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="w-full py-20 md:py-32 relative px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>
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

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t bg-background/80">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
