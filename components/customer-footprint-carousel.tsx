"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

type FootprintItem = {
  domain: string
  name: string
}

type FootprintRow = {
  direction: "left" | "right"
  items: FootprintItem[]
  label: string
}

type LogoOverride = {
  className?: string
  kind?: "image" | "mark"
  shell?: "bare" | "default" | "light"
  src?: string
  text?: string
}

const localLogo = (slug: string) => `/logos/customer-footprint/${slug}.svg`

const logoOverrides: Record<string, LogoOverride> = {
  AMD: { src: localLogo("amd"), shell: "bare", className: "customer-footprint-logo-vector" },
  Boeing: { src: localLogo("boeing"), shell: "bare", className: "customer-footprint-logo-vector" },
  Chase: { src: localLogo("chase"), shell: "bare", className: "customer-footprint-logo-vector" },
  Cisco: { src: localLogo("cisco"), shell: "bare", className: "customer-footprint-logo-vector" },
  Dell: { src: localLogo("dell"), shell: "bare", className: "customer-footprint-logo-vector" },
  FedEx: { src: localLogo("fedex"), shell: "bare", className: "customer-footprint-logo-vector" },
  "Goldman Sachs": { src: localLogo("goldmansachs"), shell: "bare", className: "customer-footprint-logo-vector" },
  HP: { src: localLogo("hp"), shell: "bare", className: "customer-footprint-logo-vector" },
  Intel: { src: localLogo("intel"), shell: "bare", className: "customer-footprint-logo-vector" },
  Meta: { src: localLogo("meta"), shell: "bare", className: "customer-footprint-logo-vector" },
  NASA: { src: localLogo("nasa"), shell: "bare", className: "customer-footprint-logo-vector" },
  NVIDIA: { src: localLogo("nvidia"), shell: "bare", className: "customer-footprint-logo-vector" },
  Qualcomm: { src: localLogo("qualcomm"), shell: "bare", className: "customer-footprint-logo-vector" },
  Sage: { src: localLogo("sage"), shell: "bare", className: "customer-footprint-logo-vector" },
  Starbucks: { src: localLogo("starbucks"), shell: "bare", className: "customer-footprint-logo-vector" },
  Target: { src: localLogo("target"), shell: "bare", className: "customer-footprint-logo-vector" },
  Toyota: { src: localLogo("toyota"), shell: "bare", className: "customer-footprint-logo-vector" },
  Uber: { src: localLogo("uber"), shell: "bare", className: "customer-footprint-logo-vector" },
  Visa: { src: localLogo("visa"), shell: "bare", className: "customer-footprint-logo-vector" },
  "Analog Devices": { kind: "mark", shell: "light", text: "ADI" },
  "Itaú Bank": { kind: "mark", shell: "light", text: "Itaú" },
  Otis: { kind: "mark", shell: "light", text: "OTIS" },
  RTX: { kind: "mark", shell: "light", text: "RTX" },
  SAS: { kind: "mark", shell: "light", text: "SAS" },
}

const footprintRows: FootprintRow[] = [
  {
    label: "Retail / Consumer",
    direction: "left",
    items: [
      { name: "Academy Sports + Outdoors", domain: "academy.com" },
      { name: "Best Buy", domain: "bestbuy.com" },
      { name: "Carvana", domain: "carvana.com" },
      { name: "Costco", domain: "costco.com" },
      { name: "Gap", domain: "gapinc.com" },
      { name: "Home Depot", domain: "homedepot.com" },
      { name: "Kroger", domain: "kroger.com" },
      { name: "Mattress Firm", domain: "mattressfirm.com" },
      { name: "Target", domain: "target.com" },
      { name: "Uber", domain: "uber.com" },
      { name: "Walmart", domain: "walmart.com" },
    ],
  },
  {
    label: "CPG / Food / Distribution",
    direction: "right",
    items: [
      { name: "Alltech", domain: "alltech.com" },
      { name: "Altria", domain: "altria.com" },
      { name: "Coca-Cola / Coke", domain: "coca-cola.com" },
      { name: "Conagra", domain: "conagrabrands.com" },
      { name: "FedEx", domain: "fedex.com" },
      { name: "Mars", domain: "mars.com" },
      { name: "Monster Energy", domain: "monsterenergy.com" },
      { name: "PepsiCo", domain: "pepsico.com" },
      { name: "Performance Food Group / PFG", domain: "pfgc.com" },
      { name: "P&G / Procter & Gamble", domain: "pg.com" },
      { name: "Starbucks", domain: "starbucks.com" },
      { name: "Subway", domain: "subway.com" },
      { name: "Sysco", domain: "sysco.com" },
    ],
  },
  {
    label: "Aerospace / Manufacturing / Tech",
    direction: "left",
    items: [
      { name: "AMD", domain: "amd.com" },
      { name: "Analog Devices", domain: "analog.com" },
      { name: "Boeing", domain: "boeing.com" },
      { name: "NASA", domain: "nasa.gov" },
      { name: "Caterpillar", domain: "caterpillar.com" },
      { name: "Cisco", domain: "cisco.com" },
      { name: "Copeland / Emerson", domain: "copeland.com" },
      { name: "Dell", domain: "dell.com" },
      { name: "DXC", domain: "dxc.com" },
      { name: "HP", domain: "hp.com" },
      { name: "Intel", domain: "intel.com" },
      { name: "John Deere", domain: "deere.com" },
      { name: "Meta", domain: "meta.com" },
      { name: "NVIDIA", domain: "nvidia.com" },
      { name: "Otis", domain: "otis.com" },
      { name: "Qualcomm", domain: "qualcomm.com" },
      { name: "RTX", domain: "rtx.com" },
      { name: "Sage", domain: "sage.com" },
      { name: "SAS", domain: "sas.com" },
      { name: "Sierra AI", domain: "sierra.ai" },
      { name: "Suffolk Construction", domain: "suffolk.com" },
      { name: "SymphonyAI", domain: "symphonyai.com" },
      { name: "Teradyne Communications", domain: "teradyne.com" },
      { name: "Toyota", domain: "toyota.com" },
    ],
  },
  {
    label: "Finance / Services / Sports / Other",
    direction: "right",
    items: [
      { name: "Chase", domain: "chase.com" },
      { name: "EY", domain: "ey.com" },
      { name: "Fiserv", domain: "fiserv.com" },
      { name: "Goldman Sachs", domain: "goldmansachs.com" },
      { name: "Itaú Bank", domain: "itau.com.br" },
      { name: "Kaplan", domain: "kaplan.com" },
      { name: "KPMG", domain: "kpmg.com" },
      { name: "LexisNexis", domain: "lexisnexis.com" },
      { name: "Major League Soccer / MLS", domain: "mlssoccer.com" },
      { name: "NFL", domain: "nfl.com" },
      { name: "PwC", domain: "pwc.com" },
      { name: "RELX", domain: "relx.com" },
      { name: "Visa", domain: "visa.com" },
    ],
  },
]

function faviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=256`
}

function FootprintLogo({ item }: { item: FootprintItem }) {
  const [imageFailed, setImageFailed] = useState(false)
  const logoOverride = logoOverrides[item.name]
  const shell = logoOverride?.shell ?? "default"
  const logoSrc = logoOverride?.src ?? faviconUrl(item.domain)

  return (
    <a
      aria-label={`Visit ${item.name} website`}
      className="customer-footprint-item group"
      href={`https://${item.domain}`}
      rel="noreferrer"
      target="_blank"
    >
      <span
        className={cn(
          "customer-footprint-logo-shell",
          shell === "bare" && "customer-footprint-logo-shell-bare",
          shell === "light" && "customer-footprint-logo-shell-light",
        )}
        aria-hidden="true"
      >
        {logoOverride?.kind === "mark" ? (
          <span className="customer-footprint-logo-mark">{logoOverride.text}</span>
        ) : imageFailed ? (
          <span className="customer-footprint-fallback">{item.name.slice(0, 2)}</span>
        ) : (
          <img
            alt=""
            className={cn("customer-footprint-logo", logoOverride?.className)}
            loading="lazy"
            onError={() => setImageFailed(true)}
            referrerPolicy="no-referrer"
            src={logoSrc}
          />
        )}
      </span>
      <span className="customer-footprint-name">{item.name}</span>
    </a>
  )
}

function FootprintRow({ direction, items, label }: FootprintRow) {
  const repeatedItems = [...items, ...items]

  return (
    <div className="customer-footprint-row" aria-label={label}>
      <div className="mb-3 flex items-center gap-3 px-1">
        <span className="h-px flex-1 bg-cyan-300/10" />
        <p className="shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-200/65 sm:text-[10px] sm:tracking-[0.24em]">
          {label}
        </p>
        <span className="h-px flex-1 bg-cyan-300/10" />
      </div>
      <div className="customer-footprint-viewport">
        <div
          className={cn(
            "customer-footprint-track",
            direction === "right" && "customer-footprint-track-reverse",
          )}
        >
          {repeatedItems.map((item, index) => (
            <div key={`${item.name}-${index}`} aria-hidden={index >= items.length}>
              <FootprintLogo item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CustomerFootprintCarousel() {
  const organizationCount = footprintRows.reduce((total, row) => total + row.items.length, 0)

  return (
    <section className="mt-14 overflow-hidden border-y border-cyan-300/10 py-10">
      <div className="mb-8 grid gap-4 lg:grid-cols-[0.55fr_1fr] lg:items-end">
        <div>
          <p className="mb-3 font-mono text-[10px] uppercase leading-5 tracking-[0.2em] text-cyan-300/80 sm:text-xs sm:tracking-[0.28em]">
            Enterprise AI Customer Footprint
          </p>
          <h3 className="max-w-3xl text-[1.65rem] font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Organizations I&apos;ve supported through enterprise AI.
          </h3>
        </div>
        <p className="max-w-3xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
          A representative set of organizations I supported, advised, partnered
          with, or engaged through Microsoft AI GBB and enterprise AI work,
          plus state and local public-sector teams.
        </p>
      </div>

      <div className="space-y-6" aria-label={`${organizationCount} organization footprint logos`}>
        {footprintRows.map((row) => (
          <FootprintRow key={row.label} {...row} />
        ))}
      </div>
    </section>
  )
}
