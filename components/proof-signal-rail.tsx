import { BrandProofMark } from "@/components/brand-proof-mark"
import { cn } from "@/lib/utils"

type ProofSignalItem =
  | {
      caption: string
      label: string
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
  { type: "metric", label: "$200M+", caption: "AI revenue" },
  { type: "metric", label: "$25M", caption: "annual savings" },
]

const heroProofItems: ProofSignalItem[] = [
  { type: "logo", label: "Microsoft" },
  { type: "logo", label: "Boeing" },
  { type: "logo", label: "Cigna / Evernorth" },
]

function ProofMetric({
  caption,
  label,
  variant,
}: {
  caption: string
  label: string
  variant: "hero" | "profile"
}) {
  return (
    <div className="text-center">
      <div
        className={cn(
          "whitespace-nowrap font-semibold leading-none text-cyan-200",
          variant === "profile" ? "text-4xl md:text-[2.8rem]" : "text-xl xl:text-2xl",
        )}
      >
        {label}
      </div>
      <div
        className={cn(
          "mt-2 whitespace-nowrap font-mono uppercase text-slate-400",
          variant === "profile" ? "text-[11px] tracking-[0.22em]" : "text-[9px] tracking-[0.14em] xl:text-[10px] xl:tracking-[0.18em]",
        )}
      >
        {caption}
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
            : "hidden max-w-3xl grid-cols-3 lg:grid",
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "flex items-center justify-center bg-slate-950/45 backdrop-blur",
            profile ? "min-h-[5.75rem] px-4 py-4 md:px-5 xl:min-h-[6.25rem] xl:px-7" : "min-h-14 px-3 py-2 xl:min-h-16",
            profile && (item.type === "metric" ? "xl:col-span-3" : "xl:col-span-2"),
            heroHasMetrics && (item.type === "metric" ? "col-span-3 2xl:col-span-1" : "col-span-2 2xl:col-span-1"),
          )}
        >
          {item.type === "metric" ? (
            <ProofMetric caption={item.caption} label={item.label} variant={variant} />
          ) : (
            <BrandProofMark label={item.label} size={profile ? "large" : "default"} />
          )}
        </div>
      ))}
    </div>
  )
}
