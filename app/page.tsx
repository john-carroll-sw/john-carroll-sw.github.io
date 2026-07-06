"use client"

import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { AskJohnAgent } from "@/components/ask-john-agent"
import { useEffect, useState } from "react"
import { AppProviders, useSplashComplete } from "@/components/splash-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUp } from "lucide-react"
import {
  CapabilitiesSection,
  ContactSection,
  ExperienceSection,
  FeaturedSystems,
  ProfileDossier,
  ServicesSection,
  TechnicalSystemsMap,
} from "@/components/portfolio-v2-sections"

function PortfolioPage() {
  const [navTransparent, setNavTransparent] = useState(true)
  const [brandVisible, setBrandVisible] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [showTOS, setShowTOS] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const splashComplete = useSplashComplete()

  useEffect(() => {
    if (!splashComplete) return;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncScrollState = () => {
      const heroExitPoint = Math.max(420, window.innerHeight * 0.72)
      const pastHero = window.scrollY > heroExitPoint
      const handoffStart = window.innerHeight * 0.18
      const handoffEnd = Math.max(window.innerHeight * 0.92, 760)
      const handoffProgress = reducedMotionQuery.matches
        ? 0
        : Math.min(1, Math.max(0, (window.scrollY - handoffStart) / (handoffEnd - handoffStart)))
      const rootStyle = document.documentElement.style
      rootStyle.setProperty("--hero-portrait-opacity", `${1 - handoffProgress * 0.46}`)
      rootStyle.setProperty("--hero-portrait-scale", `${1 - handoffProgress * 0.22}`)
      rootStyle.setProperty("--hero-portrait-x", `${handoffProgress * -0.4}rem`)
      rootStyle.setProperty("--hero-portrait-y", `${handoffProgress * 1}rem`)
      rootStyle.setProperty("--about-portrait-opacity", `${0.62 + handoffProgress * 0.38}`)
      rootStyle.setProperty("--about-portrait-scale", `${0.9 + handoffProgress * 0.1}`)
      rootStyle.setProperty("--about-portrait-y", `${(1 - handoffProgress) * -0.35}rem`)
      setNavTransparent(!pastHero)
      setBrandVisible(pastHero)
      setShowBackToTop(window.scrollY > 2200)
    }
    const onScroll = () => {
      window.requestAnimationFrame(syncScrollState)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    const syncInterval = window.setInterval(syncScrollState, 150)
    syncScrollState()
    let timer: NodeJS.Timeout | null = null
    requestAnimationFrame(() => {
      timer = setTimeout(() => setHeaderVisible(true), 450)
    })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.clearInterval(syncInterval)
      document.documentElement.style.removeProperty("--hero-portrait-opacity")
      document.documentElement.style.removeProperty("--hero-portrait-scale")
      document.documentElement.style.removeProperty("--hero-portrait-x")
      document.documentElement.style.removeProperty("--hero-portrait-y")
      document.documentElement.style.removeProperty("--about-portrait-opacity")
      document.documentElement.style.removeProperty("--about-portrait-scale")
      document.documentElement.style.removeProperty("--about-portrait-y")
      if (timer) clearTimeout(timer)
    }
  }, [splashComplete])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050912] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_90%_30%,rgba(168,85,247,0.08),transparent_28%),linear-gradient(180deg,#050912_0%,#07111d_48%,#050912_100%)]" />
      <Navbar
        navTransparent={navTransparent}
        brandVisible={brandVisible}
        headerVisible={headerVisible}
        setMobileNavOpen={setMobileNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      <main className="relative z-10 -mt-16">
        <AutoSliderBanner />
        <ProfileDossier />
        <ExperienceSection />
        <FeaturedSystems />
        <ServicesSection />
        <CapabilitiesSection />
        <TechnicalSystemsMap />
        <ContactSection />
      </main>
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top-control group fixed bottom-24 right-8 z-50 hidden h-14 w-14 items-center justify-center overflow-hidden border border-cyan-300/25 bg-[#07111d]/85 text-cyan-100 shadow-[0_18px_55px_rgba(0,0,0,0.42),0_0_0_1px_rgba(103,232,249,0.07)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/12 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70 md:flex"
          aria-label="Back to top"
        >
          <span className="pointer-events-none absolute inset-1 z-10 border border-cyan-300/10 transition-colors duration-300 group-hover:border-cyan-200/40" />
          <ArrowUp className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}
      <Footer
        setShowTOS={setShowTOS}
        setShowPrivacy={setShowPrivacy}
        showTOS={showTOS}
        showPrivacy={showPrivacy}
      />
      <AskJohnAgent />
    </div>
  )
}

export default function Page() {
  return (
    <AppProviders>
      <PortfolioPage />
    </AppProviders>
  )
}
