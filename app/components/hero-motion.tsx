"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function HeroMotion({ as: Component = "div", children, ...props }: { as?: React.ElementType, children: ReactNode, [key: string]: any }) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
}
