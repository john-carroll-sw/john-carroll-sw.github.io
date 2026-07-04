import { BrandProofMark } from "@/components/brand-proof-mark"
import { cn } from "@/lib/utils"

type ProofSignalItem =
  | {
      caption: string
      detail?: string
      label: string
      source?: string
      type: "metric"
    }
  | {
      label: string
      type: "logo"
    }

const fullProofItems: ProofSignalItem[] = [
  { type: "logo", label: "Microsoft" },
  { type: "logo", label: "Boeing" },
  { type: "logo", label: "Cigna / Evernorth" },
  { type: "logo", label: "Hexagon / Intergraph" },
  { type: "logo", label: "Neptune Technology Group" },
  { type: "logo", label: "Auburn University" },
  {
    type: "metric",
    label: "$200M+",
    caption: "AI-related revenue influenced",
    source: "Microsoft AI Global Black Belt",
    detail: "Helped enterprise customers move AI opportunities from experimentation into funded production work.",
  },
  {
    type: "metric",
    label: "$25M",
    caption: "annual efficiency savings",
    source: "Boeing",
    detail: "Built analytics and value-stream systems tied to recurring operational savings across major aerospace programs.",
  },
]

const heroProofItems: ProofSignalItem[] = [
  { type: "logo", label: "Microsoft" },
  { type: "logo", label: "Boeing" },
  { type: "logo", label: "Cigna / Evernorth" },
]

function ProofMetric({
  caption,
  detail,
  label,
  source,
  variant,
}: {
  caption: string
  detail?: string
  label: string
  source?: string
  variant: "hero" | "profile"
}) {
  const profile = variant === "profile"

  return (
    <div className={cn("w-full", profile ? "text-left" : "text-center")}>
      <div className={cn(profile && "space-y-4")}>
        <div>
          <div
            className={cn(
              "whitespace-nowrap font-semibold leading-none text-cyan-200",
              profile ? "text-4xl md:text-[2.8rem]" : "text-xl xl:text-2xl",
            )}
          >
            {label}
          </div>
          <div
            className={cn(
              "mt-2 font-mono uppercase text-slate-400",
              profile
                ? "text-[11px] leading-5 tracking-[0.22em]"
                : "whitespace-nowrap text-[9px] tracking-[0.14em] xl:text-[10px] xl:tracking-[0.18em]",
            )}
          >
            {caption}
          </div>
        </div>

        {profile && detail ? (
          <div className="border-t border-cyan-200/15 pt-4">
            {source ? <p className="text-sm font-semibold text-slate-100">{source}</p> : null}
            <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function ProofSignalRail({ variant = "hero" }: { variant?: "hero" | "profile" }) {
  const profile = variant === "profile"
  const items = profile ? fullProofItems : heroProofItems
  const heroHasMetrics = !profile && items.some((item) => item.type === "metric")

  return (
    <div
      className={cn(
        "grid gap-px overflow-hidden border border-cyan-200/10 bg-cyan-200/10",
        profile
          ? "grid-cols-2 xl:grid-cols-6"
          : heroHasMetrics
            ? "hidden max-w-[56rem] grid-cols-6 lg:grid 2xl:grid-cols-[1.08fr_1.08fr_1.32fr_minmax(7.5rem,0.95fr)_minmax(7.5rem,0.95fr)]"
            : "hidden max-w-3xl grid-cols-[0.94fr_0.94fr_1.12fr] lg:grid",
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex items-center justify-center bg-slate-950/45 backdrop-blur",
            profile ? "min-h-[5.75rem] px-4 py-4 md:px-5 xl:min-h-[6.25rem] xl:px-7" : "min-h-14 px-3 py-2 xl:min-h-16",
            profile && (item.type === "metric" ? "col-span-2 justify-start xl:col-span-3" : "xl:col-span-2"),
            heroHasMetrics && (item.type === "metric" ? "col-span-3 2xl:col-span-1" : "col-span-2 2xl:col-span-1"),
            !profile && item.type === "logo" && item.label === "Cigna / Evernorth" && "px-1",
          )}
        >
          {item.type === "metric" ? (
            <ProofMetric
              caption={item.caption}
              detail={item.detail}
              label={item.label}
              source={item.source}
              variant={variant}
            />
          ) : (
            <BrandProofMark label={item.label} size={profile ? "large" : "default"} />
          )}
        </div>
      ))}
    </div>
  )
}
