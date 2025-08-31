import { AppLogo } from "@/components/ui/AppLogo"
import { cn } from "@/lib/utils"
import { PanelLeftClose } from "lucide-react"

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
    <AppLogo />
  </div>
)
