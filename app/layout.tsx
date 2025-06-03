"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import { SplashScreen } from "@/app/components/splash-screen"
import "../styles/globals.css"
import type React from "react"
import { useState, createContext, useContext } from "react"

const inter = Inter({ subsets: ["latin"] })

// Context for splash completion
export const SplashCompleteContext = createContext(false)
export function useSplashComplete() {
  return useContext(SplashCompleteContext)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {!splashComplete && <SplashScreen onComplete={() => setSplashComplete(true)} />}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SplashCompleteContext.Provider value={splashComplete}>
            {children}
          </SplashCompleteContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
