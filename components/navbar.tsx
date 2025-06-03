import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export function Navbar({ navTransparent, headerVisible, setMobileNavOpen, mobileNavOpen }: {
  navTransparent: boolean,
  headerVisible: boolean,
  setMobileNavOpen: (open: boolean) => void,
  mobileNavOpen: boolean
}) {
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-500 
        ${navTransparent 
          ? "bg-transparent border-transparent" 
          : "bg-gray-900/90 border-gray-800 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 dark:bg-background/80 dark:border-gray-800 dark:supports-[backdrop-filter]:bg-background/60"}
        transition-opacity duration-1000`}
      style={{
        opacity: headerVisible ? 1 : 0,
        transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)',
        textShadow: '0 1px 8px rgba(0,0,0,0.12), 0 2px 16px rgba(0,0,0,0.10)'
      }}
    >
      <div className="container flex h-16 items-center px-4 md:px-2 text-white dark:text-white">
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
  )
}
