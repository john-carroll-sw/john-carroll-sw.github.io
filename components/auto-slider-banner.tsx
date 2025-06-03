"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ProfileHeader } from "./profile-header"
import { SocialLinks } from "./social-links"
import { triggerRandomGlitchJump } from "@/lib/glitchJump"


const videos = [
	"/videos/3163534-hd_1920_1080_30fps.mp4", // Sci Wave
	"/videos/2675508-hd_1920_1080_24fps.mp4", // Night City
	"/videos/3129671-hd_1920_1080_30fps.mp4", // Network Data Center
	"/videos/3141210-hd_1920_1080_25fps.mp4", // Digital Planet
	"/videos/4990242-hd_1920_1080_30fps.mp4", // Glitch
	"/videos/4990245-hd_1920_1080_30fps.mp4", // Sound Waves
]

export function AutoSliderBanner() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const getInTouchBtnRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
		}, 10000)
		return () => clearInterval(interval)
	}, [])

	const glitchActive = videos[currentIndex] === "/videos/4990242-hd_1920_1080_30fps.mp4"

	// Make the button jump repeatedly during glitch mode
	useEffect(() => {
		let intervalId: NodeJS.Timeout | null = null;
		function randomInterval() {
			// Random ms between 350 and 5000
			return Math.floor(Math.random() * (5000 - 350 + 1)) + 350;
		}
		let active = true;
		function jumpLoop() {
			if (!active) return;
			if (getInTouchBtnRef.current) {
				triggerRandomGlitchJump(getInTouchBtnRef.current);
			}
			intervalId = setTimeout(jumpLoop, randomInterval());
		}
		if (glitchActive) {
			jumpLoop();
		}
		return () => {
			active = false;
			if (intervalId) clearTimeout(intervalId as any);
		};
	}, [glitchActive]);

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
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-white/10 to-white/80 dark:from-black/80 dark:via-black/10 dark:to-black/80 z-10" />
			<div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full z-20">
				{/* Navbar (avatar, name, rotating title) */}
				<ProfileHeader glitchActive={glitchActive} />
				{/* Subtitle/description */}
				<p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8 px-4 text-center">
					Building full-stack experiences and agentic AI systems that tame messy problems and delight users.
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
							ref={getInTouchBtnRef}
							size="lg"
							variant="outline"
							className={`border-pink-400 text-pink-400 hover:bg-pink-400/10 transition-all duration-200${glitchActive ? ' get-in-touch-btn' : ''}`}
						>
							Get in Touch
						</Button>
					</a>
				</div>
				<SocialLinks />
			</div>
		</div>
	)
}

