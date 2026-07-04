"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Download, Mail, Terminal } from "lucide-react"

import { ProofSignalRail } from "@/components/proof-signal-rail"
import { useSplashComplete } from "@/components/splash-provider"
import { Button } from "@/components/ui/button"

const videos = [
	"/videos/3163534-hd_1920_1080_30fps.mp4", // Sci Wave
	"/videos/2675508-hd_1920_1080_24fps.mp4", // Night City
	"/videos/3129671-hd_1920_1080_30fps.mp4", // Network Data Center
	"/videos/3141210-hd_1920_1080_25fps.mp4", // Digital Planet
	"/videos/4990242-hd_1920_1080_30fps.mp4", // Glitch
	"/videos/4990245-hd_1920_1080_30fps.mp4", // Sound Waves
]

type TerminalLine = {
	kind: "command" | "output" | "status" | "coffee"
	text: string
}

type TerminalFrame = {
	cursor?: boolean
	delay: number
	lines: TerminalLine[]
}

const terminalScript = [
	{
		command: "scope_with_stakeholders",
		output: [
			"requirements messy",
			"decision owners found",
			"success criteria locked",
		],
	},
	{
		command: "map_context --sources docs,tickets,workflows",
		output: [
			"retrieval layer synced",
			"edge cases surfaced",
		],
	},
	{
		command: "prototype_agent --guardrails",
		output: [
			"tools scoped",
			"human review loop active",
		],
	},
	{
		command: "watch_stakeholder_loop --background",
		output: [
			"new requirement detected",
			"triage queued",
			"loop continues in background",
		],
	},
	{
		command: "run_evals --suite production",
		output: [
			"grounding checks passed",
			"stakeholder notes still incoming...",
		],
	},
	{
		command: "deploy_system --env production",
		output: [
			"release promoted",
			"monitoring online",
		],
	},
]

function buildTerminalFrames() {
	const frames: TerminalFrame[] = []
	const transcript: TerminalLine[] = []

	const addTypedCommand = (command: string) => {
		for (let index = 0; index <= command.length; index += 1) {
			frames.push({
				cursor: true,
				delay: index === 0 ? 420 : 34,
				lines: [
					...transcript,
					{ kind: "command", text: `$ ${command.slice(0, index)}` },
				],
			})
		}

		transcript.push({ kind: "command", text: `$ ${command}` })
	}

	for (const step of terminalScript) {
		addTypedCommand(step.command)

		for (const output of step.output) {
			const outputLine = { kind: "output" as const, text: output }
			frames.push({
				delay: 620,
				lines: [...transcript, outputLine],
			})
			transcript.push(outputLine)
		}
	}

	const shippedLine = { kind: "status" as const, text: "✓ system online | shipped" }
	frames.push({
		delay: 900,
		lines: [...transcript, shippedLine],
	})
	transcript.push(shippedLine)

	addTypedCommand("refill_coffee --operator")

	const coffeeLine = { kind: "coffee" as const, text: "brewing refill..." }
	frames.push({
		delay: 900,
		lines: [...transcript, coffeeLine],
	})
	transcript.push(coffeeLine)

	const refilledLine = { kind: "output" as const, text: "coffee refilled" }
	frames.push({
		delay: 680,
		lines: [...transcript, refilledLine],
	})
	transcript.push(refilledLine)

	frames.push({
		delay: 2200,
		lines: [
			...transcript,
			{ kind: "status", text: "caffeinated operator online" },
		],
	})

	return frames
}

const terminalFrames = buildTerminalFrames()

function TerminalTranscript({ frame }: { frame: TerminalFrame }) {
	const scrollRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const node = scrollRef.current
		if (!node) return
		node.scrollTop = node.scrollHeight
	}, [frame])

	return (
		<div
			ref={scrollRef}
			className="h-[12.75rem] overflow-y-auto p-5 pr-4 font-mono text-sm leading-5 [scrollbar-color:rgba(103,232,249,0.45)_transparent] [scrollbar-width:thin]"
		>
			<div className="space-y-1">
				{frame.lines.map((line, index) => {
					const showCursor = frame.cursor && index === frame.lines.length - 1
					const lineClass =
						line.kind === "command"
							? "text-cyan-300"
							: line.kind === "coffee"
								? "text-amber-100"
							: line.kind === "status"
								? "text-emerald-300"
								: "text-slate-200"

					return (
						<p key={`${line.kind}-${line.text}-${index}`} className={lineClass}>
							{line.kind === "coffee" ? (
								<span className="inline-flex items-center gap-2">
									<span className="relative inline-flex h-6 w-7 items-end justify-center" aria-hidden="true">
										<span className="coffee-steam absolute -top-3 left-1/2 scale-50 -translate-x-1/2">
											<span className="steam steam-1" />
											<span className="steam steam-2" />
											<span className="steam steam-3" />
										</span>
										<span className="text-base leading-none" role="img" aria-label="coffee">
											☕
										</span>
									</span>
									<span>{line.text}</span>
								</span>
							) : (
								<span>{line.text}</span>
							)}
							{showCursor ? (
								<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-200/80 animate-pulse" />
							) : null}
						</p>
					)
				})}
			</div>
		</div>
	)
}

export function AutoSliderBanner() {
	const splashComplete = useSplashComplete()
	const terminalRef = useRef<HTMLDivElement | null>(null)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [reducedMotion, setReducedMotion] = useState(false)
	const [terminalFrameIndex, setTerminalFrameIndex] = useState(0)
	const [terminalVisible, setTerminalVisible] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
		const handleMotionPreference = () => {
			setReducedMotion(mediaQuery.matches)
			if (mediaQuery.matches) setCurrentIndex(0)
		}

		handleMotionPreference()
		mediaQuery.addEventListener("change", handleMotionPreference)
		return () => mediaQuery.removeEventListener("change", handleMotionPreference)
	}, [])

	useEffect(() => {
		if (reducedMotion) return
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
		}, 10000)
		return () => clearInterval(interval)
	}, [reducedMotion])

	useEffect(() => {
		if (!splashComplete) {
			setTerminalVisible(false)
			return
		}

		const node = terminalRef.current
		if (!node || typeof IntersectionObserver === "undefined") {
			setTerminalVisible(true)
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return
				setTerminalVisible(true)
				observer.disconnect()
			},
			{ threshold: 0.35 },
		)

		observer.observe(node)

		return () => observer.disconnect()
	}, [splashComplete])

	useEffect(() => {
		if (reducedMotion) {
			setTerminalFrameIndex(terminalFrames.length - 1)
			return
		}

		if (!splashComplete || !terminalVisible) {
			setTerminalFrameIndex(0)
			return
		}

		let frameIndex = 0
		let timeout: number | undefined
		setTerminalFrameIndex(frameIndex)

		const scheduleNextFrame = () => {
			timeout = window.setTimeout(() => {
				if (frameIndex >= terminalFrames.length - 1) {
					setTerminalFrameIndex(terminalFrames.length - 1)
					return
				}

				frameIndex += 1
				setTerminalFrameIndex(frameIndex)
				scheduleNextFrame()
			}, terminalFrames[frameIndex]?.delay ?? 80)
		}

		scheduleNextFrame()

		return () => {
			window.clearTimeout(timeout)
		}
	}, [reducedMotion, splashComplete, terminalVisible])

	const terminalFrame = terminalFrames[terminalFrameIndex] ?? terminalFrames[terminalFrames.length - 1]

	return (
		<section id="hero" className="relative left-0 top-0 min-h-screen w-screen overflow-hidden bg-[#04070d]">
			{videos.map((src, index) => (
				<video
					key={src}
					className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
					autoPlay={!reducedMotion}
					loop
					muted
					playsInline
					poster="/placeholder.jpg"
				>
					<source src={src} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			))}
			<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(34,211,238,0.24),transparent_30%),linear-gradient(90deg,rgba(3,7,18,0.96)_0%,rgba(3,7,18,0.72)_44%,rgba(3,7,18,0.38)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#050912] to-transparent" />

			<div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 md:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
					<div className="max-w-3xl">
						<div className="mb-6 lg:hidden">
							<img
								src="/JohnCarrollProfilePic.png"
								alt="John Carroll"
								data-hero-portrait
								className="h-24 w-24 rounded-full border border-cyan-200/25 object-cover shadow-[0_18px_50px_rgba(0,0,0,0.42)]"
							/>
						</div>
						<h1 className="mb-4 max-w-4xl text-[2.35rem] font-semibold leading-none text-white sm:text-5xl md:text-6xl xl:text-7xl">
							John Carroll
						</h1>
						<p className="mb-5 max-w-2xl text-base font-medium leading-7 text-cyan-200 md:text-lg">
							Forward Deployed AI Engineer · Agentic Systems Architect · Full-Stack Builder
						</p>
						<h2 className="max-w-4xl text-[2.7rem] font-semibold leading-[0.95] text-white sm:text-5xl md:text-7xl">
							I build AI systems that move from prototype to production.
						</h2>
						<p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-xl md:leading-8">
							For teams turning high-value workflows into shipped AI products:
							enterprise RAG, agentic automation, multimodal field tools, and
							cloud-native full-stack platforms.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button asChild size="lg" className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
								<Link href="#systems">
									View Featured Systems
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-cyan-300/40 bg-slate-950/30 text-cyan-50 backdrop-blur hover:bg-cyan-300/10"
							>
								<Link href="/John_Carroll_Resume.pdf" target="_blank">
									<Download className="h-4 w-4" />
									Download Resume
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/20 bg-slate-950/20 text-white backdrop-blur hover:bg-white/10"
							>
								<Link href="#contact">
									<Mail className="h-4 w-4" />
									Get in Touch
								</Link>
							</Button>
						</div>
						<div className="mt-10">
							<ProofSignalRail />
						</div>
					</div>

					<div className="relative hidden min-h-[36.5rem] lg:block xl:min-h-[37.5rem]">
						<div className="absolute right-2 top-0 h-72 w-72 overflow-hidden rounded-full border border-cyan-200/25 bg-slate-950/35 shadow-[0_32px_110px_rgba(0,0,0,0.55)]">
							<img
								src="/JohnCarrollProfilePic.png"
								alt="John Carroll"
								data-hero-portrait
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="absolute right-20 top-16 h-72 w-72 rounded-full border border-cyan-300/10" aria-hidden="true" />
						<div ref={terminalRef} data-hero-terminal className="absolute bottom-0 left-0 right-5 border border-cyan-200/20 bg-slate-950/58 shadow-[0_28px_100px_rgba(0,0,0,0.5)] backdrop-blur-md">
							<div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-xs text-slate-400">
								<Terminal className="h-4 w-4 text-cyan-300" />
								john@portfolio — zsh
								<span className={`ml-auto h-1.5 w-1.5 rounded-full bg-emerald-300 ${reducedMotion ? "" : "animate-pulse"}`} />
							</div>
							<TerminalTranscript frame={terminalFrame} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
