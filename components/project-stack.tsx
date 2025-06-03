import ProjectCard from "./project-card"

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
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "AI Chat Interface",
    description: "An AI-powered chat interface with natural language processing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "TailwindCSS"],
  },
]

export function ProjectStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}
