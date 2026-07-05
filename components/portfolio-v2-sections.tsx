import type React from "react"
import Link from "next/link"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { BrandProofMark } from "@/components/brand-proof-mark"
import ContactForm from "@/components/contact-form"
import { CustomerFootprintCarousel } from "@/components/customer-footprint-carousel"
import { ProfilePortrait } from "@/components/profile-portrait"
import { ProjectGallery } from "@/components/project-gallery"
import { ProofSignalRail } from "@/components/proof-signal-rail"
import {
  capabilities,
  dossier,
  education,
  experienceHighlights,
  operatingPrinciples,
  recognition,
  services,
  systemMap,
} from "@/data/portfolio-v2"
import { cn } from "@/lib/utils"

function SectionHeading({
  align = "left",
  kicker,
  title,
  titleClassName,
  childrenClassName,
  children,
}: {
  align?: "left" | "center"
  kicker: string
  title: string
  titleClassName?: string
  childrenClassName?: string
  children?: React.ReactNode
}) {
  return (
    <div className={cn("mb-10", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">
        {kicker}
      </p>
      <h2 className={cn("text-3xl font-semibold leading-tight text-white md:text-5xl", titleClassName)}>{title}</h2>
      {children ? (
        <p className={cn("mt-4 text-base leading-7 text-slate-300 md:text-lg", align === "center" && "mx-auto max-w-2xl", childrenClassName)}>
          {children}
        </p>
      ) : null}
    </div>
  )
}

const profileModes = [
  "Forward deployed AI",
  "Enterprise RAG",
  "Agentic workflows",
  "Full-stack delivery",
]

const aboutNarrative = [
  "Over the past decade, I've designed and delivered AI and software systems across healthcare, retail, manufacturing, aerospace, and public safety. My work focuses on agentic AI, RAG, enterprise search, AI platforms, cloud architecture, and modern software engineering, with an emphasis on secure, governed, reliable systems at scale.",
  "My background started in software and electrical engineering, from embedded systems and industrial technology to cloud platforms and enterprise software. That foundation shapes how I approach AI today: as an engineering discipline grounded in reliability, scalability, and measurable business outcomes.",
  "I like operating at the intersection of strategy and execution: shaping technical direction, building platforms, mentoring engineers, and helping teams turn emerging AI capabilities into useful products.",
]

const experienceLogoLabels: Record<string, string> = {
  "Auburn University": "Auburn University",
  Boeing: "Boeing",
  "Cigna / Evernorth": "Cigna / Evernorth",
  Freelance: "Independent Consultant",
  Hexagon: "Hexagon / Intergraph",
  Microsoft: "Microsoft",
  "Neptune Technology Group": "Neptune Technology Group",
}

const educationCompactLogoClassNames: Record<string, string> = {
  "Auburn University": "h-full w-full object-contain object-center",
  "Georgia Institute of Technology": "h-full w-full object-cover object-center",
  "Quantic School of Business and Technology": "h-full w-full object-contain object-center",
}

const educationLogoTileClassNames: Record<string, string> = {
  "Auburn University": "bg-white p-1.5 md:bg-slate-50/90 md:p-3",
  "Georgia Institute of Technology": "bg-transparent p-0 md:bg-slate-950/35 md:p-4",
  "Quantic School of Business and Technology": "bg-white p-1.5 md:bg-slate-50/90 md:p-3",
}

const educationWideLogoClassNames: Record<string, string> = {
  "Auburn University": "max-h-10 max-w-[90%] object-contain object-center",
  "Georgia Institute of Technology": "max-h-12 max-w-[86%] object-contain object-center",
  "Quantic School of Business and Technology": "max-h-10 max-w-[82%] translate-x-2 object-contain object-center",
}

const educationStatusLabels: Record<string, string> = {
  "Auburn University": "Completed",
  "Georgia Institute of Technology": "Incoming",
  "Quantic School of Business and Technology": "In progress",
}

export function ProfileDossier() {
  return (
    <section id="about" className="relative overflow-visible px-4 py-20 md:px-8 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-start xl:grid-cols-[0.82fr_1.42fr]">
        <aside className="border border-cyan-200/15 bg-[#0b111d]/82 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur md:sticky md:top-24 md:max-h-[calc(100vh-7rem)] md:overflow-y-auto">
          <div className="flex items-center gap-4">
            <ProfilePortrait
              size="dossier"
              className="about-portrait-handoff"
              imageClassName="object-[54%_43%]"
            />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300/80">
                Operator dossier
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white xl:text-2xl">John Carroll</h2>
              <p className="mt-2 font-mono text-xs leading-5 text-cyan-300">
                // builder / architect / operator
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-300">
            A compact read on how I operate: scope the workflow, align the people,
            prototype against real constraints, and harden what proves useful.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px border border-cyan-200/10 bg-cyan-200/10">
            <div className="bg-slate-950/45 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Base</p>
              <p className="mt-2 text-sm font-semibold text-white">Atlanta, GA</p>
            </div>
            <div className="bg-slate-950/45 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Mode</p>
              <p className="mt-2 text-sm font-semibold text-white">Builder / Architect / Operator</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {profileModes.map((mode) => (
              <div key={mode} className="flex items-center justify-between gap-3 border border-white/10 bg-white/[0.025] px-3 py-2">
                <span className="text-sm text-slate-200">{mode}</span>
                <span className="h-1.5 w-1.5 bg-cyan-300" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              <a href="/John_Carroll_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
              <Link href="https://github.com/john-carroll-sw" target="_blank">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
              <Link href="https://www.linkedin.com/in/jcc-sw/" target="_blank">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </aside>

        <div className="min-w-0">
          <SectionHeading
            kicker="Operating Profile"
            title="AI from experimentation to production."
            titleClassName="max-w-3xl md:text-4xl xl:text-[2.8rem]"
            childrenClassName="max-w-3xl"
          >
            I help organizations turn business ambiguity, workflows, data, and messy
            constraints into reliable software.
          </SectionHeading>

          <div className="mb-8 border border-cyan-200/10 bg-white/[0.025] p-5 md:p-6">
            <div className="space-y-4 text-sm leading-7 text-slate-300 md:text-base">
              {aboutNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mb-8 grid gap-3 md:grid-cols-3">
            {operatingPrinciples.map(({ icon: Icon, title, description }) => (
              <article key={title} className="border border-cyan-200/10 bg-white/[0.025] p-5">
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </article>
            ))}
          </div>

          <div className="mb-8">
            <ProofSignalRail variant="profile" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {dossier.map(({ icon: Icon, label, value }) => (
              <div key={label} className="border border-cyan-200/10 bg-white/[0.025] p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <CustomerFootprintCarousel />
      </div>
    </section>
  )
}

export function FeaturedSystems() {
  return (
    <section id="systems" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading kicker="Featured Systems" title="Demo-rich AI work, framed by outcomes.">
            A curated set of systems that show the range: agentic reasoning, RAG,
            realtime voice, video understanding, visual inspection, and document automation.
          </SectionHeading>
          <Button asChild variant="outline" className="mb-10 w-fit border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
            <Link href="https://github.com/john-carroll-sw" target="_blank">
              View GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <ProjectGallery />
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-cyan-300/10 bg-[#070b15] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
            What I Offer
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Services
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group flex min-h-[22rem] flex-col border border-cyan-200/10 bg-[#0b0f1d]/82 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-[#0d1424] md:p-8"
            >
              <div className="mb-10 flex h-16 w-16 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.08)] transition duration-300 group-hover:border-cyan-300/45 group-hover:bg-cyan-300/15">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
                {title}
              </h3>
              <p className="mt-6 text-base leading-8 text-slate-300">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-y border-cyan-300/10 bg-[#090f19] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading align="center" kicker="What I Build" title="Practical AI systems for messy workflows.">
          Strategy is useful when it turns into working software. These are the system
          shapes I keep coming back to.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article key={title} className="border border-cyan-200/10 bg-white/[0.025] p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TechnicalSystemsMap() {
  return (
    <section id="systems-map" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Technical Systems Map" title="How the pieces fit together.">
          The stack changes by problem, but the operating model is consistent: useful
          data, grounded retrieval, agentic action, evaluation, and production delivery.
        </SectionHeading>
        <div className="grid gap-4 lg:grid-cols-5">
          {systemMap.map(({ icon: Icon, title, items }, index) => (
            <article key={title} className="relative border border-cyan-200/10 bg-[#0b111d]/85 p-5">
              {index < systemMap.length - 1 ? (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-cyan-300/35 lg:block" />
              ) : null}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-mono text-sm uppercase tracking-[0.16em] text-white">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-5 border border-cyan-300/20 bg-cyan-300/10 px-5 py-4 font-mono text-sm text-cyan-100">
          Guardrails, governance, observability, and evaluation run across every layer.
        </div>
      </div>
    </section>
  )
}

function ExperienceTimeline() {
  return (
    <div className="relative space-y-4 before:absolute before:left-0 before:top-0 before:hidden before:h-full before:w-px before:bg-cyan-300/20 md:pl-6 md:before:block">
      {experienceHighlights.map((item, index) => {
        const logoLabel = experienceLogoLabels[item.organization] ?? item.organization
        const hasLogoMark = logoLabel !== "Independent Consultant"

        return (
          <article key={item.organization} className="relative overflow-hidden border border-cyan-200/10 bg-white/[0.025] p-4 md:p-6">
            <span className="absolute -left-[1.875rem] top-7 z-10 hidden h-3 w-3 border border-cyan-300/50 bg-[#07111d] md:block" />
            <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 md:text-[11px] md:tracking-[0.22em]">
                  {String(index + 1).padStart(2, "0")} / {item.timeframe}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-tight text-white md:mt-2 md:text-xl">{item.organization}</h3>
                <p className="mt-1 text-sm leading-5 text-cyan-200">{item.role}</p>
              </div>
              {hasLogoMark ? (
                <div className="order-first -mx-4 -mt-4 flex min-h-11 items-center justify-start border-b border-cyan-200/10 bg-slate-950/25 px-4 py-2 md:order-none md:mx-0 md:mt-0 md:min-h-12 md:w-full md:border-0 md:bg-transparent md:px-0 md:py-0 xl:w-56 xl:justify-end">
                  <BrandProofMark label={logoLabel} className="justify-start md:justify-center xl:justify-end" />
                </div>
              ) : null}
            </div>
            <p className={cn("text-sm leading-6 text-slate-300", hasLogoMark ? "mt-4" : "mt-5")}>{item.impact}</p>
          </article>
        )
      })}
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-cyan-300/10 bg-[#090f19] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Experience" title="Work history, education, and recognition.">
          The career arc behind the work: enterprise AI, aerospace analytics,
          public safety SaaS, industrial systems, consulting, and the teaching
          foundations that shaped how I build.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1.38fr_0.62fr] lg:items-start">
          <div id="experience-work">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                  Work History
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Roles, systems, and outcomes.</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-400">
                A timeline of the teams, products, and production systems behind the portfolio.
              </p>
            </div>
            <ExperienceTimeline />
          </div>

          <div className="lg:sticky lg:top-24">
            <div id="experience-recognition">
              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                  Recognition
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Signals worth scanning.</h3>
              </div>
              <div className="space-y-4">
                {recognition.map(({ icon: Icon, title, date, meta, detail }) => (
                  <article key={title} className="flex gap-4 border border-cyan-200/10 bg-white/[0.025] p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{date}</p>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-cyan-200">{meta}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="experience-education" className="mt-14 border-t border-cyan-300/10 pt-10">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                Education
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                <span className="block sm:inline">Formal foundations,</span>{" "}
                <span className="block sm:inline">still compounding.</span>
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400 md:text-base">
              One completed software engineering degree, one executive MBA nearing
              completion, and one graduate AI specialization about to begin.
            </p>
          </div>

          <div className="overflow-hidden border border-cyan-200/10 bg-white/[0.025]">
            {education.map(({ institution, date, meta, detail, logo }, index) => (
              <article
                key={institution}
                className={cn(
                  "grid grid-cols-[4.25rem_minmax(0,1fr)] gap-3 p-4 sm:grid-cols-[4.75rem_minmax(0,1fr)] sm:gap-4 sm:p-5 md:grid-cols-[12.5rem_minmax(0,1fr)] md:gap-6 md:p-6 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-7 lg:p-7",
                  index > 0 && "border-t border-cyan-200/10",
                )}
              >
                <a
                  aria-label={`Visit ${institution} website`}
                  className={cn(
                    "education-logo-tile flex h-14 w-14 shrink-0 items-center justify-center justify-self-center overflow-hidden rounded-xl border border-transparent bg-slate-950/35 transition duration-200 hover:bg-slate-800/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 sm:h-[3.75rem] sm:w-[3.75rem] md:h-[4.75rem] md:w-44 md:rounded-none md:border-cyan-300/20 md:bg-slate-950/35 md:shadow-[0_0_22px_rgba(34,211,238,0.06)] md:hover:border-cyan-300/45 md:hover:bg-cyan-300/10 lg:h-20 lg:w-48",
                    educationLogoTileClassNames[institution],
                  )}
                  href={logo.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={logo.compactSrc ?? logo.src}
                    alt={logo.alt}
                    className={cn(
                      "min-w-0 md:hidden md:drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]",
                      educationCompactLogoClassNames[institution],
                    )}
                  />
                  <img
                    src={logo.wideSrc ?? logo.src}
                    alt=""
                    aria-hidden="true"
                    className={cn(
                      "hidden h-auto min-w-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] md:block",
                      educationWideLogoClassNames[institution],
                    )}
                  />
                </a>
                <div className="min-w-0 self-center">
                  <h3 className="text-[1.05rem] font-semibold leading-tight text-white sm:text-xl md:text-[1.35rem] lg:text-[1.45rem]">
                    {institution}
                  </h3>
                  <p className="mt-1 text-[0.92rem] leading-5 text-cyan-100 sm:text-base">{meta}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-400 md:leading-6">
                    {date}
                    <span className="text-cyan-300/70"> / {educationStatusLabels[institution]}</span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300 md:max-w-3xl">
                    {detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl border border-cyan-300/15 bg-[#0b111d]/85 p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/80">
              Let's Connect
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Have an AI workflow, an interesting idea, or just want to connect?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Reach out for services, collaboration, AI adoption questions,
              prototypes, architecture, or just because something here sparked a
              thought. I am always up for a good build conversation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:max-w-xl">
              <Button asChild className="h-12 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                <Link href="mailto:johncornellcarroll@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email John
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10">
                <Link href="https://www.linkedin.com/in/jcc-sw/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-cyan-300" />
              Atlanta, GA
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
