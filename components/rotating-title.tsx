import { useState, useEffect, useRef } from "react"
import gsap from "gsap"

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

const LIGHTNING_ROLE = "Full-Stack Developer"

export function RotatingTitle({ interval = 5000, glitchActive = false }: { interval?: number, glitchActive?: boolean }) {
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
