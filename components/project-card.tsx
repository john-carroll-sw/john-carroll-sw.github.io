import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(image || "/placeholder.svg")
  const [retries, setRetries] = useState(0)
  const [loading, setLoading] = useState(true)
  const maxRetries = 2

  const handleError = () => {
    if (retries < maxRetries) {
      setRetries(retries + 1)
      setImgSrc(`${image}?retry=${retries + 1}`)
    } else {
      setImgSrc("/placeholder.svg")
      setLoading(false)
    }
  }

  const handleLoad = () => setLoading(false)

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          onError={handleError}
          onLoad={handleLoad}
          className={`object-cover w-full h-full transition-transform hover:scale-105 ${loading ? "opacity-0" : "opacity-100"}`}
          style={{ aspectRatio: '16/9', height: '100%', width: '100%' }}
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        {link ? (
          <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground line-through cursor-not-allowed select-none">
            <Github className="h-4 w-4" />
            View on GitHub
          </span>
        )}
      </CardFooter>
    </Card>
  )
}
