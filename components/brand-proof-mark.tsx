import type React from "react"

import { cn } from "@/lib/utils"

const logoLinks = {
  auburn: "https://www.auburn.edu/",
  boeing: "https://www.boeing.com/",
  cigna: "https://www.thecignagroup.com/",
  evernorth: "https://www.evernorth.com/",
  hexagon: "https://hexagon.com/",
  intergraph: "https://hexagon.com/intergraph",
  microsoft: "https://www.microsoft.com/",
  neptune: "https://www.neptunetg.com/",
}

const logoAssets: Record<string, { alt: string; className: string; href: string; largeClassName: string; src: string }> = {
  "Auburn University": {
    alt: "Auburn University",
    className: "max-h-[1.55rem] max-w-[9.75rem]",
    href: logoLinks.auburn,
    largeClassName: "max-h-[1.8rem] max-w-[13.5rem]",
    src: "/logos/auburn-white-orange.png",
  },
  Boeing: {
    alt: "Boeing",
    className: "max-h-[2.05rem] max-w-[10rem]",
    href: logoLinks.boeing,
    largeClassName: "max-h-[2.35rem] max-w-[13rem]",
    src: "/logos/boeing-white.svg",
  },
  Hexagon: {
    alt: "Hexagon",
    className: "max-h-[2.05rem] max-w-[9.75rem] brightness-0 invert",
    href: logoLinks.hexagon,
    largeClassName: "max-h-[2.45rem] max-w-[12.5rem] brightness-0 invert",
    src: "/logos/hexagon.svg",
  },
  Microsoft: {
    alt: "Microsoft",
    className: "max-h-[1.65rem] max-w-[9.5rem] brightness-125 contrast-125",
    href: logoLinks.microsoft,
    largeClassName: "max-h-[1.95rem] max-w-[12rem] brightness-125 contrast-125",
    src: "/logos/microsoft.png",
  },
  "Neptune Technology Group": {
    alt: "Neptune Technology Group",
    className: "max-h-[2rem] max-w-[10rem]",
    href: logoLinks.neptune,
    largeClassName: "max-h-[2.4rem] max-w-[13.25rem]",
    src: "/logos/neptune.png",
  },
}

function LogoLink({
  ariaLabel,
  children,
  className,
  href,
}: {
  ariaLabel: string
  children: React.ReactNode
  className?: string
  href: string
}) {
  return (
    <a
      aria-label={ariaLabel}
      className={cn(
        "flex min-w-0 items-center justify-center transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70",
        className,
      )}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

export function BrandProofMark({
  className,
  label,
  size = "default",
}: {
  className?: string
  label: string
  size?: "default" | "large"
}) {
  const large = size === "large"

  if (label === "Cigna / Evernorth") {
    return (
      <div
        className={cn(
          "flex w-full min-w-0 max-w-full items-center justify-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]",
          large ? "h-14 max-w-[19.5rem] gap-1.5 px-1 sm:max-w-[17.25rem] sm:gap-2 sm:px-2" : "h-11 max-w-[14.75rem] gap-1 px-0",
          className,
        )}
      >
        <LogoLink ariaLabel="Visit The Cigna Group website" className="shrink-0" href={logoLinks.cigna}>
          <img
            src="/logos/cigna-group-reverse.png"
            alt="The Cigna Group"
            className={cn("w-auto min-w-0 object-contain", large ? "h-[2.15rem] sm:h-[2.05rem]" : "h-[1.9rem]")}
          />
        </LogoLink>
        <span className="shrink-0 translate-y-[1px] font-mono text-[10px] uppercase tracking-[0.08em] text-cyan-100/60">
          x
        </span>
        <LogoLink ariaLabel="Visit Evernorth website" className="shrink-0" href={logoLinks.evernorth}>
          <img
            src="/logos/evernorth-white-trimmed.png"
            alt="Evernorth Health Services"
            className={cn("w-auto min-w-0 object-contain", large ? "h-[1.95rem] sm:h-[1.8rem]" : "h-[1.6rem]")}
          />
        </LogoLink>
      </div>
    )
  }

  if (label === "Hexagon / Intergraph") {
    return (
      <div
        className={cn(
          "flex min-w-0 max-w-full items-center justify-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]",
          large ? "h-14 max-w-[17rem] gap-3 px-3" : "h-11 max-w-[13rem] gap-2 px-2",
          className,
        )}
      >
        <LogoLink ariaLabel="Visit Hexagon website" href={logoLinks.hexagon}>
          <img
            src="/logos/hexagon.svg"
            alt="Hexagon"
            className={cn("min-w-0 object-contain brightness-0 invert", large ? "max-h-[2.45rem] max-w-[6.3rem]" : "max-h-[2rem] max-w-[4.8rem]")}
          />
        </LogoLink>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cyan-100/60">x</span>
        <LogoLink ariaLabel="Visit Intergraph website" href={logoLinks.intergraph}>
          <img
            src="/logos/intergraph.svg"
            alt="Intergraph"
            className={cn("min-w-0 object-contain brightness-0 invert", large ? "max-h-[2.15rem] max-w-[8.4rem]" : "max-h-[1.7rem] max-w-[6rem]")}
          />
        </LogoLink>
      </div>
    )
  }

  const logo = logoAssets[label]

  if (!logo) {
    return <span className={cn("text-base font-semibold text-white", className)}>{label}</span>
  }

  return (
    <a
      aria-label={`Visit ${logo.alt} website`}
      className={cn(
        "flex min-w-0 max-w-full items-center justify-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)] transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70",
        large ? "h-14 max-w-[15rem] px-4" : "h-11 max-w-[12rem] px-3",
        className,
      )}
      href={logo.href}
      rel="noreferrer"
      target="_blank"
    >
      <img src={logo.src} alt={logo.alt} className={cn("min-w-0 object-contain", large ? logo.largeClassName : logo.className)} />
    </a>
  )
}
