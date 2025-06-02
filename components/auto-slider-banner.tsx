"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const images = [
	"https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
	"https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]

export function AutoSliderBanner() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
		}, 5000) // Change image every 5 seconds

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="relative top-0 left-0 w-screen h-screen z-0 overflow-hidden">
			{images.map((src, index) => (
				<div
					key={src}
					className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={src || "/placeholder.svg"}
						alt={`Banner ${index + 1}`}
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>
			))}
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-100">
					Full Stack Developer
				</h1>
				<p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8">
					Building digital experiences with modern technologies. Focused on
					creating elegant solutions to complex problems.
				</p>
				<div className="flex justify-center gap-4 mb-8">
					<a href="#projects">
						<Button
							size="lg"
							className="bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform"
						>
							View Projects <span className="ml-2">↓</span>
						</Button>
					</a>
					<a href="#contact">
						<Button
							size="lg"
							variant="outline"
							className="border-pink-400 text-pink-400 hover:bg-pink-400/10"
						>
							Get in Touch
						</Button>
					</a>
				</div>
				<div className="flex justify-center gap-4">
					<Link href="https://github.com/john-carroll-sw" target="_blank">
						<Button variant="outline" size="icon">
							<Github className="h-4 w-4" />
							<span className="sr-only">GitHub</span>
						</Button>
					</Link>
					<Link href="https://www.linkedin.com/in/jcc-sw/" target="_blank">
						<Button variant="outline" size="icon">
							<Linkedin className="h-4 w-4" />
							<span className="sr-only">LinkedIn</span>
						</Button>
					</Link>
					<Link href="mailto:johncornellcarroll@gmail.com">
						<Button variant="outline" size="icon">
							<Mail className="h-4 w-4" />
							<span className="sr-only">Email</span>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
