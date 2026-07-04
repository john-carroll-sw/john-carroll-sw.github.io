"use client"

import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { useEffect, useState } from "react"
import { AppProviders, useSplashComplete } from "@/components/splash-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronUp } from "lucide-react"
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 z-50 hidden rounded-full border border-cyan-300/40 bg-[#050912]/80 p-3 text-cyan-100 shadow-lg backdrop-blur transition-colors duration-200 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300 md:flex"
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

export default function Page() {
  return (
    <AppProviders>
      <PortfolioPage />
    </AppProviders>
  )
}
