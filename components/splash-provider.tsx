"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

import { SplashScreen } from "@/components/splash-screen"
import { ThemeProvider } from "@/components/theme-provider"

// Flip this back to true if the loading intro comes back later.
const SPLASH_ENABLED = false

const SplashCompleteContext = createContext(!SPLASH_ENABLED)

export function useSplashComplete() {
  return useContext(SplashCompleteContext)
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [splashComplete, setSplashComplete] = useState(!SPLASH_ENABLED)

  return (
    <>
      {SPLASH_ENABLED && !splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} />}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <SplashCompleteContext.Provider value={splashComplete}>
          {children}
        </SplashCompleteContext.Provider>
      </ThemeProvider>
    </>
  )
}
