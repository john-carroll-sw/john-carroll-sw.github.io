"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Include English letters, numbers, symbols and Japanese characters
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%あいうえおかきくけこさしすせそたちつてとなにぬねの"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(16)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  // When fade-out is done, call onComplete and hide
  useEffect(() => {
    if (isComplete) {
      const timeout = setTimeout(() => {
        setHidden(true)
        if (onComplete) onComplete()
      }, 500) // match transition-opacity duration
      return () => clearTimeout(timeout)
    }
  }, [isComplete, onComplete])

  if (hidden) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100",
      )}
    >
      {/* <div className="relative w-48 h-48 mb-8">
        <Image
          src="TODO: Add your logo URL here"
          alt="SDFM 2520"
          fill
          className="object-contain"
          priority
        />
      </div> */}

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6 flex items-center">
        <span className="whitespace-nowrap">LOADING_SYSTEM:</span>
        <span className="ml-2 w-[20ch] inline-block overflow-hidden align-middle whitespace-nowrap" style={{letterSpacing: '0.08em'}}>{matrixText}</span>
      </div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}
