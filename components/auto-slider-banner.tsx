"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import gsap from "gsap"

// RotatingTitle component for headline
const roles = [
	"Full-Stack Developer",
	"AI Solutions Architect",
	"Technical Storyteller",
	"Applied AI Engineer",
	"Startup Advisor",
	"Dad",
	"Coffee Lover",
	"Lifelong Learner",
]

function RotatingTitle({ interval = 5000 }) {
	const [index, setIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const containerRef = useRef<HTMLSpanElement>(null)
	const prevTitleRef = useRef<HTMLSpanElement>(null)
	const nextTitleRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		if (!containerRef.current || !prevTitleRef.current || !nextTitleRef.current) return;
		if (index === prevIndex) return;

		// Set up initial state
		gsap.set(prevTitleRef.current, { rotationX: 0, y: 0, opacity: 1, zIndex: 2 });
		gsap.set(nextTitleRef.current, { rotationX: -90, y: 80, opacity: 0, zIndex: 1 });

		const tl = gsap.timeline({
			onComplete: () => {
				gsap.set(prevTitleRef.current, { opacity: 0, zIndex: 1 });
				gsap.set(nextTitleRef.current, { opacity: 1, zIndex: 2 });
			}
		});
		tl.to(prevTitleRef.current, {
			rotationX: 90,
			y: -80,
			opacity: 0,
			transformOrigin: "bottom center",
			duration: 0.5,
			ease: "power2.in"
		}, 0)
		.to(nextTitleRef.current, {
			rotationX: 0,
			y: 0,
			opacity: 1,
			transformOrigin: "top center",
			duration: 0.5,
			ease: "power2.out"
		}, 0.15)
	}, [index, prevIndex])

	useEffect(() => {
		if (isAnimating) return;
		const timeout = setTimeout(() => {
			setPrevIndex(index)
			setIndex((i) => (i + 1) % roles.length)
			setIsAnimating(true)
			setTimeout(() => setIsAnimating(false), 700)
		}, interval)
		return () => clearTimeout(timeout)
	}, [index, isAnimating, interval])

	return (
		<span
			ref={containerRef}
			className="relative inline-block align-middle overflow-visible w-full"
			style={{ minWidth: 260, width: 'auto', height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: 600, padding: '0 32px' }}
		>
			<span
				ref={prevTitleRef}
				className="absolute left-1/2 top-1/2 w-auto h-full flex items-center justify-center font-extrabold text-4xl md:text-6xl text-white whitespace-nowrap"
				style={{ willChange: 'transform', zIndex: 2, transform: 'translate(-50%, -50%)', padding: '0 16px' }}
			>
				{roles[prevIndex]}
			</span>
			<span
				ref={nextTitleRef}
				className="absolute left-1/2 top-1/2 w-auto h-full flex items-center justify-center font-extrabold text-4xl md:text-6xl text-white whitespace-nowrap"
				style={{ willChange: 'transform', zIndex: 1, transform: 'translate(-50%, -50%)', padding: '0 16px' }}
			>
				{roles[index]}
			</span>
		</span>
	)
}

const videos = [
	"/videos/2675508-hd_1920_1080_24fps.mp4", // Night City
	"/videos/3129671-hd_1920_1080_30fps.mp4", // Network Data Center
	"/videos/3141210-hd_1920_1080_25fps.mp4", // Digital Planet
	"/videos/3163534-hd_1920_1080_30fps.mp4", // Sci Wave
	"/videos/4990242-hd_1920_1080_30fps.mp4", // Glitch
	"/videos/4990245-hd_1920_1080_30fps.mp4", // Sound Waves
]

export function AutoSliderBanner() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
		}, 10000) // Change video every 10 seconds
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
				{/* Main Name Header */}
				<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white text-center w-full flex flex-col items-center justify-center">
					{/* <span className="block mb-2 text-3xl md:text-5xl font-bold text-white">John Carroll</span> */}
					<span style={{ display: 'inline-block', width: 560, minWidth: 260, textAlign: 'left' }}>
						<RotatingTitle />
					</span>
				</h1>
				<p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8 text-center">
					{/* Building scalable, intelligent products that turn ideas into impact. */}
					Building full-stack experiences and agentic AI systems that tame messy problems and delight users.
					{/* <br /> */}
					Fueled by curiosity, strong coffee, and dad-level perseverence.
				</p>
				<div className="flex justify-center gap-4 mb-8 px-4 md:px-0">
					<a href="#projects">
						<Button
							size="lg"
							className="bg-gray-900 text-white border border-gray-900 shadow-lg hover:bg-white hover:text-gray-900 hover:border-gray-300 focus:bg-white focus:text-gray-900 focus:border-gray-300 active:bg-gray-800 active:text-white active:border-gray-800 transition-colors duration-200"
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
				<div className="flex justify-center gap-4 px-4 md:px-0">
					{/* GitHub Button with tooltip below */}
					<div className="relative group flex items-center">
						<Link href="https://github.com/john-carroll-sw" target="_blank">
							<Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white group-hover:shadow-2xl">
								<Github className="h-4 w-4" />
								<span className="sr-only">GitHub</span>
							</Button>
						</Link>
						<span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
							see what I'm building!
						</span>
					</div>
					{/* LinkedIn Button with tooltip below */}
					<div className="relative group flex items-center">
						<Link href="https://www.linkedin.com/in/jcc-sw/" target="_blank">
							<Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-2xl">
								<Linkedin className="h-4 w-4" />
								<span className="sr-only">LinkedIn</span>
							</Button>
						</Link>
						<span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
							let's connect!
						</span>
					</div>
					{/* Email Button with tooltip below */}
					<div className="relative group flex items-center">
						<Link href="mailto:johncornellcarroll@gmail.com">
							<Button variant="outline" size="icon" className="transition-all duration-300 group-hover:bg-pink-700 group-hover:text-white group-hover:shadow-2xl">
								<Mail className="h-4 w-4" />
								<span className="sr-only">Email</span>
							</Button>
						</Link>
						<span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-14 opacity-0 group-hover:opacity-100 group-hover:top-16 transition-all duration-300 bg-gradient-to-r from-pink-700 via-pink-500 to-pink-400 text-white text-xs px-4 py-2 rounded shadow-lg whitespace-nowrap z-50 font-bold scale-90 group-hover:scale-100">
							reach out to me directly
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
