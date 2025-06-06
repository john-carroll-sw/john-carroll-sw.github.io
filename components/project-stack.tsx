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
import projectsData from "@/data/projects.json"

export interface Project {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

// Remove the hardcoded projects array and use the imported data
const projects: Project[] = projectsData as Project[]

export function ProjectStack() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [showAll, setShowAll] = useState(false)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel')
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

  // Auto-rotate carousel every 60 seconds (desktop only)
  useEffect(() => {
    if (!api || isMobile) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 60000)
    return () => clearInterval(interval)
  }, [api, isMobile])

  if (isMobile) {
    const visibleProjects = showAll ? projects : projects.slice(0, 3)
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

  // Desktop: Toggle between carousel and grid
  return (
    <div className="w-full relative">
      <div className="flex justify-end mb-4 mr-12">
        <button
          className={`px-4 py-2 rounded-l-lg border border-r-0 font-semibold transition-colors duration-150 ${viewMode === 'carousel' ? 'bg-purple-500 text-white' : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'}`}
          onClick={() => setViewMode('carousel')}
        >
          Carousel
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg border font-semibold transition-colors duration-150 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'}`}
          onClick={() => setViewMode('grid')}
        >
          Grid
        </button>
      </div>
      {viewMode === 'carousel' ? (
        <>
          {/* Preload the next project's image, hidden from view */}
          {(() => {
            const nextIndex = (activeIndex + 1) % projects.length
            const nextProject = projects[nextIndex]
            return (
              <img
                src={nextProject.image}
                alt=""
                style={{ display: 'none' }}
                aria-hidden="true"
                tabIndex={-1}
              />
            )
          })()}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="px-4 mx-8"
            setApi={setApi}
          >
            {/* Desktop arrows, absolutely positioned outside carousel content */}
            <CarouselPrevious className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-purple-500/10 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 w-12 h-12 items-center justify-center" />
            <CarouselNext className="hidden md:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-purple-500/10 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 w-12 h-12 items-center justify-center" />
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
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
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mx-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      )}
      {/* Always preload the first project's image so it's ready for immediate display */}
      {projects[0] && (
        <img
          src={projects[0].image}
          alt=""
          style={{ display: 'none' }}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
    </div>
  )
}
