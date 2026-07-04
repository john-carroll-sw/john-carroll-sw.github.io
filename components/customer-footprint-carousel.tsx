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
    label: "Manufacturing / Tech",
    direction: "left",
    items: [
      { name: "AMD", domain: "amd.com" },
      { name: "Analog Devices", domain: "analog.com" },
      { name: "Boeing", domain: "boeing.com" },
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

  return (
    <a
      aria-label={`Visit ${item.name} website`}
      className="customer-footprint-item group"
      href={`https://${item.domain}`}
      rel="noreferrer"
      target="_blank"
    >
      {imageFailed ? (
        <span className="customer-footprint-fallback" aria-hidden="true">
          {item.name.slice(0, 2)}
        </span>
      ) : (
        <img
          alt=""
          className="customer-footprint-logo"
          loading="lazy"
          onError={() => setImageFailed(true)}
          referrerPolicy="no-referrer"
          src={faviconUrl(item.domain)}
        />
      )}
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
