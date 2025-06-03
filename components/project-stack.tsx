import ProjectCard from "./project-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useRef, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { useIsMobile } from "@/components/ui/use-mobile"

export interface Project {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration for seamless payments.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe", "TypeScript"],
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features and notification systems.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "AI Chat Interface",
    description: "An AI-powered chat interface with natural language processing capabilities and sentiment analysis.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "TailwindCSS", "WebSockets"],
  },
  {
    title: "Portfolio Generator",
    description: "A tool that helps developers create beautiful portfolios with minimal configuration and maximum impact.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "GraphQL", "Firebase", "Netlify"],
  },
  {
    title: "Health Monitoring Dashboard",
    description: "A comprehensive health metrics dashboard for tracking fitness goals, nutrition, and wellness metrics.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
  },
  {
    title: "Smart Home Control Center",
    description: "An IoT hub for managing connected home devices with voice commands and automated routines.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["IoT", "React Native", "MQTT", "Node.js"],
  },
  {
    title: "Educational Content Platform",
    description: "A learning management system with interactive lessons, quizzes, and progress tracking for students.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Angular", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio tracker with price alerts, market analysis, and trading history.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "Redux", "CoinGecko API", "Chart.js"],
  },
  {
    title: "Augmented Reality Shopping",
    description: "AR application allowing users to visualize products in their space before purchasing.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["AR.js", "Three.js", "WebXR", "React"],
  },
  {
    title: "Recipe Recommendation Engine",
    description: "AI-powered recipe suggestion app based on available ingredients, dietary preferences, and past choices.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Python", "TensorFlow", "Flask", "React"],
  },
]

export function ProjectStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [showAll, setShowAll] = useState(false)
  const isMobile = useIsMobile()

  // Connect to carousel API and track current slide
  useEffect(() => {
    if (!api) return
    const onChange = () => {
      setActiveIndex(api.selectedScrollSnap())
    }
    api.on("select", onChange)
    return () => {
      api.off("select", onChange)
    }
  }, [api])

  // Auto-rotate carousel every 30 seconds (desktop only)
  useEffect(() => {
    if (!api || isMobile) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 30000)
    return () => clearInterval(interval)
  }, [api, isMobile])

  if (isMobile) {
    const visibleProjects = showAll ? projects : projects.slice(0, 5)
    return (
      <div className="flex flex-col gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        {projects.length > 5 && (
          <button
            className="bg-gray-900 text-white border border-gray-900 shadow-lg hover:bg-white hover:text-gray-900 hover:border-gray-300 focus:bg-white focus:text-gray-900 focus:border-gray-300 active:bg-gray-800 active:text-white active:border-gray-800 transition-colors duration-200 px-6 py-3 rounded-lg font-semibold text-lg mt-2 mx-auto flex items-center justify-center"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show Less" : `View More (${projects.length - 5} more)`}
            <span className="ml-2">{showAll ? "↑" : "↓"}</span>
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="px-4 mx-8"
        setApi={setApi}
      >
        {/* Desktop arrows, absolutely positioned outside carousel content */}
        <CarouselPrevious className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 w-12 h-12 items-center justify-center" />
        <CarouselNext className="hidden md:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 w-12 h-12 items-center justify-center" />
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-1 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-purple-400" : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
