"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown, Layers3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { featuredSystems } from "@/data/portfolio-v2"
import { cn } from "@/lib/utils"
import allProjects from "@/data/projects.json"

type AdditionalProject = {
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
}

const featuredLinks = new Set(featuredSystems.map((system) => system.link))
const additionalProjects = (allProjects as AdditionalProject[]).filter((project) => {
  return !featuredLinks.has(project.link ?? "")
})

function FeaturedProjectCard({
  system,
}: {
  system: (typeof featuredSystems)[number]
}) {
  const Icon = system.icon

  return (
    <article className="group flex min-h-full flex-col overflow-hidden border border-cyan-200/12 bg-[#0b111d]/80 shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={system.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b111d] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center border border-cyan-300/25 bg-slate-950/75 text-cyan-200 backdrop-blur">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-3 inline-block max-w-full break-words border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 font-mono text-xs leading-5 text-cyan-200">
          {system.outcome}
        </p>
        <h3 className="break-words text-xl font-semibold leading-snug text-white">{system.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{system.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {system.tags.map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[0.035] px-2 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={system.link}
          target="_blank"
          className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan-200 transition hover:text-cyan-50"
        >
          View system
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

function AdditionalProjectCard({ project }: { project: AdditionalProject }) {
  const hasLink = Boolean(project.link)

  return (
    <article className="group flex min-h-full flex-col overflow-hidden border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090f19] via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center border border-cyan-300/20 bg-slate-950/75 text-cyan-200 backdrop-blur">
          <Layers3 className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="break-words text-lg font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag} className="border border-white/10 bg-white/[0.035] px-2 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        {hasLink ? (
          <Link
            href={project.link ?? ""}
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan-200 transition hover:text-cyan-50"
          >
            View project
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
            Private / coming soon
          </span>
        )}
      </div>
    </article>
  )
}

export function ProjectGallery() {
  const [showAll, setShowAll] = useState(false)
  const projectCount = useMemo(() => featuredSystems.length + additionalProjects.length, [])

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredSystems.map((system) => (
          <FeaturedProjectCard key={system.title} system={system} />
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:justify-end">
        <Button
          type="button"
          variant="outline"
          aria-expanded={showAll}
          aria-controls="additional-projects"
          className="w-full border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10 sm:w-fit"
          onClick={() => setShowAll((current) => !current)}
        >
          {showAll ? "Show fewer projects" : `Show all ${projectCount} projects`}
          <ChevronDown className={cn("h-4 w-4 transition-transform", showAll && "rotate-180")} />
        </Button>
      </div>

      {showAll ? (
        <div id="additional-projects" className="mt-8">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                Additional Projects
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">The rest of the build bench.</h3>
            </div>
            <p className="text-sm text-slate-400">{additionalProjects.length} additional projects, {projectCount} total on page</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {additionalProjects.map((project) => (
              <AdditionalProjectCard key={`${project.title}-${project.link}`} project={project} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
