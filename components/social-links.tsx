import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 px-4 md:px-0">
      {/* GitHub Button with tooltip below */}
      <div className="relative group flex items-center">
        <Link href="https://github.com/john-carroll-sw" target="_blank">
          <Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-2xl">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-popover text-popover-foreground text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
          see what I'm building!
        </span>
      </div>
      {/* LinkedIn Button with tooltip below */}
      <div className="relative group flex items-center">
        <Link href="https://www.linkedin.com/in/jcc-sw/" target="_blank">
          <Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl dark:group-hover:bg-blue-400 dark:group-hover:text-blue-900">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-popover text-popover-foreground text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
          let's connect!
        </span>
      </div>
      {/* Email Button with tooltip below */}
      <div className="relative group flex items-center">
        <Link href="mailto:johncornellcarroll@gmail.com">
          <Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-2xl dark:group-hover:bg-pink-400 dark:group-hover:text-pink-900">
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-popover text-popover-foreground text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
          reach out to me directly
        </span>
      </div>
    </div>
  )
}
