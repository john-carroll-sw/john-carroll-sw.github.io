import type React from "react"

import { cn } from "@/lib/utils"

const portraitSizes = {
  fill: "h-full w-full",
  hero: "h-20 w-20 md:h-24 md:w-24 xl:h-28 xl:w-28",
  heroFeature: "h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 xl:h-44 xl:w-44",
  dossier: "h-20 w-20 xl:h-24 xl:w-24",
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
