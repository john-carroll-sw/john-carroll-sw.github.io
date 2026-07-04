"use client"

import { AutoSliderBanner } from "@/components/auto-slider-banner"
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
    const syncScrollState = () => {
      const heroExitPoint = Math.max(420, window.innerHeight * 0.72)
      const pastHero = window.scrollY > heroExitPoint
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
          className="group fixed bottom-24 right-8 z-50 hidden h-14 w-14 items-center justify-center overflow-hidden border border-cyan-300/25 bg-[#07111d]/85 text-cyan-100 shadow-[0_18px_55px_rgba(0,0,0,0.42),0_0_0_1px_rgba(103,232,249,0.07)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/12 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/70 md:flex"
          aria-label="Back to top"
        >
          <span className="absolute inset-1 border border-cyan-300/10 transition-colors duration-300 group-hover:border-cyan-200/40" />
          <span className="absolute -left-1 top-3 h-px w-3 bg-cyan-300/60 transition-all duration-300 group-hover:w-5" />
          <span className="absolute -right-1 bottom-3 h-px w-3 bg-cyan-300/60 transition-all duration-300 group-hover:w-5" />
          <ArrowUp className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
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

export default function Page() {
  return (
    <AppProviders>
      <PortfolioPage />
    </AppProviders>
  )
}
