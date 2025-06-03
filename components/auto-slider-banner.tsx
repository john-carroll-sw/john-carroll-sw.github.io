"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import gsap from "gsap"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

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

const LIGHTNING_ROLE = "Full-Stack Developer";

function RotatingTitle({ interval = 5000, glitchActive = false }) {
	const [index, setIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(0)
	const [isAnimating, setIsAnimating] = useState(false)
	const containerRef = useRef<HTMLSpanElement>(null)
	const prevTitleRef = useRef<HTMLSpanElement>(null)
	const nextTitleRef = useRef<HTMLSpanElement>(null)
	const glitchRef = useRef<HTMLSpanElement>(null)

	// Glitch effect for any role if glitchActive is true
	useEffect(() => {
		if (!glitchActive || !glitchRef.current) return;
		const el = glitchRef.current;
		let frame = 0;
		let raf: number;
		const chars = "█▓▒░<>|/\\!@#$%^&*_-+=~";
		const original = roles[index];
		const glitch = () => {
			if (frame < 24) {
				let glitched = original.split("").map((c, i) => {
					if (Math.random() < 0.5) return chars[Math.floor(Math.random() * chars.length)];
					return c;
				}).join("");
				el.textContent = glitched;
				frame++;
				raf = requestAnimationFrame(glitch);
			} else {
				el.textContent = original;
			}
		};
		glitch();
		return () => cancelAnimationFrame(raf);
	}, [index, glitchActive]);

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

	const isCoffeeLover = roles[index] === "Coffee Lover";
	const isLightning = roles[index] === LIGHTNING_ROLE;
	const [lightningActive, setLightningActive] = useState(false);

	// Lightning effect trigger
	useEffect(() => {
		if (!isLightning) return;
		setLightningActive(false);
		const timeout = setTimeout(() => setLightningActive(true), 400); // delay for effect
		const offTimeout = setTimeout(() => setLightningActive(false), 900); // effect duration
		return () => {
			clearTimeout(timeout);
			clearTimeout(offTimeout);
		};
	}, [index, isLightning]);

	return (
		<span
			ref={containerRef}
			className="relative inline-block align-middle overflow-visible w-full rotating-title-container"
			style={{
				minWidth: 260,
				width: 'auto',
				height: '50px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				perspective: 600,
				padding: '0 32px'
			}}
		>
			<span
				ref={prevTitleRef}
				className="absolute left-1/2 top-1/2 w-auto h-full flex items-center justify-center font-extrabold text-3xl md:text-6xl text-white whitespace-nowrap"
				style={{ willChange: 'transform', zIndex: 2, transform: 'translate(-50%, -50%)', padding: '0 16px' }}
			>
				{roles[prevIndex]}
			</span>
			<span
				ref={nextTitleRef}
				className="absolute left-1/2 top-1/2 w-auto h-full flex items-center justify-center font-extrabold text-3xl md:text-6xl text-white whitespace-nowrap"
				style={{ willChange: 'transform', zIndex: 1, transform: 'translate(-50%, -50%)', padding: '0 16px' }}
			>
				{glitchActive ? (
					<span ref={glitchRef} className="glitch-text glitch-purple" style={{ position: 'relative', display: 'inline-block' }}>
						{roles[index]}
					</span>
				) : isLightning ? (
					<span className="inline-block relative">
						<span>
							Full-Stack{' '}
							<span className={`relative lightning-word${lightningActive ? ' lightning-strike' : ''}`}>Developer
								{lightningActive && (
									<span className="lightning-emoji absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-300 text-4xl pointer-events-none select-none" style={{ filter: 'drop-shadow(0 0 8px #fff700)' }}>
										⚡
									</span>
								)}
							</span>
						</span>
					</span>
				) : isCoffeeLover ? (
					<span className="coffee-lover-title inline-flex flex-row items-center justify-center gap-2 w-full h-full font-extrabold text-3xl md:text-6xl text-white" style={{ position: 'static', transform: 'none', padding: 0 }}>
						<span>Coffee Lover</span>
						<span className="relative flex flex-col items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
							<span className="coffee-steam absolute -top-10 left-1/2 -translate-x-1/2" aria-hidden="true" style={{ display: 'block', height: 24, marginBottom: -8, zIndex: 2 }}>
								<span className="steam steam-1" />
								<span className="steam steam-2" />
								<span className="steam steam-3" />
							</span>
							<span style={{ fontSize: '2.5rem', lineHeight: 1, zIndex: 1 }} role="img" aria-label="coffee">☕</span>
						</span>
					</span>
				) : roles[index]}
			</span>
		</span>
	)
}

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

	// --- Glitch Jump Animation: Dynamic Keyframes by JS ---
	// Call triggerRandomGlitchJump(buttonEl) to animate the button with 5 random keyframes
	function triggerRandomGlitchJump(buttonEl: HTMLElement | null) {
		if (!buttonEl) return;
		// Helper for random value in range, rounded to nearest 10
		const rand = (min: number, max: number) => Math.round((Math.random() * (max - min) + min) / 10) * 10;
		// 5 keyframes: 0%, 15%, 35%, 60%, 100%
		const keyframes = [
			{ percent: 0,    x: 0,    y: 0,    scale: 1,    rotate: 0 },
			{ percent: 15,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.12, rotate: rand(-15, 15) },
			{ percent: 35,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.08, rotate: rand(-12, 12) },
			{ percent: 60,   x: rand(-600, 600), y: rand(-600, 600), scale: 1.12, rotate: rand(-15, 15) },
			{ percent: 100,  x: 0,    y: 0,    scale: 1,    rotate: 0 }
		];
		let css = '';
		for (const kf of keyframes) {
			css += `\n      ${kf.percent}% { transform: translate(${kf.x}px, ${kf.y}px) scale(${kf.scale}) rotate(${kf.rotate}deg); }`;
		}
		const animName = `glitch-jump-${Date.now()}-${Math.floor(Math.random()*10000)}`;
		const keyframesCSS = `@keyframes ${animName} {${css}\n}`;
		let styleTag = document.getElementById('glitch-jump-style') as HTMLStyleElement | null;
		if (!styleTag) {
			styleTag = document.createElement('style');
			styleTag.id = 'glitch-jump-style';
			document.head.appendChild(styleTag);
		}
		styleTag.appendChild(document.createTextNode(keyframesCSS));
		buttonEl.style.animation = 'none';
		void buttonEl.offsetWidth;
		buttonEl.style.animation = `${animName} 0.32s cubic-bezier(.25,1.7,.5,1.1) 1`;
	}
	// --- End Glitch Jump Animation ---


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
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center w-full h-full">
				{/* Responsive avatar/name/rotating title layout */}
				<div className="flex flex-col items-center justify-center w-full gap-2 md:gap-6">
					{/* Avatar */}
					<Avatar className="w-32 h-32 shadow-xl border-4 border-white dark:border-gray-800 flex-shrink-0" >
						<AvatarImage src="/JohnCarrollProfilePic.png" alt="John Carroll" />
					</Avatar>
					{/* Name and Rotating Title */}
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white text-center w-full flex flex-col items-center justify-center">
						<span className="block mb-2 text-3xl md:text-5xl font-bold text-white">John Carroll</span>
						<span style={{ display: 'inline-block', width: 560, minWidth: 260, textAlign: 'center' }}>
							<RotatingTitle glitchActive={glitchActive} />
						</span>
					</h1>
				</div>
				{/* Subtitle/description */}
				<p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8 text-center">
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

