"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

import { SplashScreen } from "@/components/splash-screen"
import { ThemeProvider } from "@/components/theme-provider"

const SplashCompleteContext = createContext(false)

export function useSplashComplete() {
  return useContext(SplashCompleteContext)
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <>
      {!splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} />}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <SplashCompleteContext.Provider value={splashComplete}>
          {children}
        </SplashCompleteContext.Provider>
      </ThemeProvider>
    </>
  )
}
