import type React from "react"

import { cn } from "@/lib/utils"

const portraitSizes = {
  fill: "h-full w-full",
  profile: "h-24 w-24 xl:h-28 xl:w-28",
  small: "h-24 w-24",
}

type ProfilePortraitProps = React.HTMLAttributes<HTMLDivElement> & {
  imageClassName?: string
  size?: keyof typeof portraitSizes
}

export function ProfilePortrait({
  className,
  imageClassName,
  size = "profile",
  ...props
}: ProfilePortraitProps) {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-full bg-[linear-gradient(135deg,rgba(103,232,249,0.9),rgba(34,211,238,0.2)_42%,rgba(148,163,184,0.24))] p-px shadow-[0_22px_70px_rgba(0,0,0,0.42),0_0_34px_rgba(34,211,238,0.08)]",
        portraitSizes[size],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-full border border-cyan-200/10"
      />
      <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-950/80 p-[3px] ring-1 ring-cyan-100/20">
        <img
          src="/JohnCarrollProfilePic.png"
          alt="John Carroll"
          className={cn("h-full w-full rounded-full object-cover", imageClassName)}
        />
      </div>
    </div>
  )
}
