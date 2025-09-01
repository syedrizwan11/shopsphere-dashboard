import { cn } from "@/lib/utils"
import { PanelLeftClose } from "lucide-react"
import Image from "next/image"

interface LogoHeaderProps {
  expanded: boolean
  onToggle: () => void
}

export const LogoHeader = ({ expanded, onToggle }: LogoHeaderProps) => (
  <div className="flex items-center justify-start gap-4 mb-6">
    <button
      aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      onClick={onToggle}
      className="p-2 rounded-md hover:bg-cyan-500 hover:text-white cursor-pointer transition-all"
    >
      <PanelLeftClose
        className={cn(
          "transition-all duration-300",
          expanded ? "-rotate-180" : ""
        )}
        size={30}
      />
    </button>
    <div className="flex items-center gap-2">
      <Image src="/favicon.ico" alt="shopsphere-logo" width={30} height={30} />
      <div className="text-xl font-bold text-textPrimary">NEXA</div>
    </div>
  </div>
)
