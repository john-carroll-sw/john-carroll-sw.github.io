"use client"

import ContactForm from "../components/contact-form"
import TechStack from "../components/tech-stack"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { useRef, useEffect, useState } from "react"
import { useSplashComplete } from "./layout"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectStack } from "@/components/project-stack"
import { AboutSection } from "../components/about-section"
import { ChevronUp } from "lucide-react"


export default function Page() {
  const [navTransparent, setNavTransparent] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showTOS, setShowTOS] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const splashComplete = useSplashComplete()

  useEffect(() => {
    if (!splashComplete) return;
    const onScroll = () => {
      setNavTransparent(window.scrollY < 10)
      setShowBackToTop(window.scrollY > 3000)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    let timer: NodeJS.Timeout | null = null
    requestAnimationFrame(() => {
      timer = setTimeout(() => setHeaderVisible(true), 1500)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (timer) clearTimeout(timer)
    }
  }, [splashComplete])

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar
        navTransparent={navTransparent}
        headerVisible={headerVisible}
        setMobileNavOpen={setMobileNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      <main className="-mt-16">
        {/* Hero Section */}
        <section>
          <AutoSliderBanner />
        </section>
        {/* About Section */}
        <AboutSection />
        {/* Projects Section */}
        <section id="projects" className="w-full py-20 md:py-32 relative px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">Projects</h2>
          {/* Work in Progress Banner */}
          <div className="flex justify-center mb-8">
            <span className="inline-block rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-4 py-2 text-sm font-semibold shadow-md animate-pulse">
              🚧 Work in Progress 🚧
            </span>
          </div>
          <ProjectStack />
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="py-20 md:py-32 bg-gradient-to-b from-background to-purple-950/30 rounded-xl my-12 px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">Tech Stack</h2>
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
      {/* Back to Top Button (desktop only) */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:flex fixed bottom-8 right-8 z-50 bg-black/80 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Back to top"
        >
          <ChevronUp className="h-7 w-7" />
        </button>
      )}
      <Footer
        setShowTOS={setShowTOS}
        setShowPrivacy={setShowPrivacy}
        showTOS={showTOS}
        showPrivacy={showPrivacy}
      />
    </div>
  )
}
