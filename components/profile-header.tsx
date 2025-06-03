import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { RotatingTitle } from "./rotating-title"

export function ProfileHeader({ glitchActive }: { glitchActive: boolean }) {
  return (
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
  )
}
