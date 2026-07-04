import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import "../styles/globals.css"
import type React from "react"
import type { Metadata } from "next"
import { AppProviders } from "@/components/splash-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://john-carroll-sw.github.io"),
  title: "John Carroll | Forward Deployed AI Engineer",
  description:
    "John Carroll builds agentic AI systems, enterprise RAG, multimodal assistants, and cloud-native full-stack products from prototype to production.",
  openGraph: {
    title: "John Carroll | Forward Deployed AI Engineer",
    description:
      "Agentic AI systems, enterprise RAG, multimodal assistants, and full-stack AI products from prototype to production.",
    url: "https://john-carroll-sw.github.io",
    siteName: "John Carroll Portfolio",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
