"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const videos = [
	"/videos/2675508-hd_1920_1080_24fps.mp4",
	"/videos/3129671-hd_1920_1080_30fps.mp4",
	"/videos/3141210-hd_1920_1080_25fps.mp4",
	"/videos/3163534-hd_1920_1080_30fps.mp4",
	"/videos/4990242-hd_1920_1080_30fps.mp4",
	"/videos/4990245-hd_1920_1080_30fps.mp4",
]

export function AutoSliderBanner() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
		}, 10000) // Change video every 5 seconds
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="relative top-0 left-0 w-screen h-screen z-0 overflow-hidden">
			{videos.map((src, index) => (
				<video
					key={src}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
					autoPlay
					loop
					muted
					playsInline
					poster="/placeholder.jpg"
				>
					<source src={src} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
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
