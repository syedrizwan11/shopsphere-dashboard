import { AppLogo } from "@/components/AppLogo"
import { PanelLeftClose, PanelRightClose } from "lucide-react"

interface SidebarHeaderProps {
  expanded: boolean
  onToggle: () => void
}

export const SidebarHeader = ({ expanded, onToggle }: SidebarHeaderProps) => (
  <div className="flex items-center justify-between mb-6">
    {expanded ? <AppLogo /> : <span className="sr-only">Logo</span>}
    <button
      aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      onClick={onToggle}
      className="p-2 rounded-md hover:bg-cyan-500 hover:text-white cursor-pointer transition-all"
    >
      {expanded ? <PanelLeftClose size={30} /> : <PanelRightClose size={30} />}
    </button>
  </div>
)
