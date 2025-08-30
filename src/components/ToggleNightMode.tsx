"use client"
import { Moon } from "lucide-react"
import { NavSection } from "./layouts/sidebar"
import { Switch } from "./ui/switch"
import { cn } from "@/lib/utils"
interface ToggleNightModeProps {
  expanded?: boolean
}
export const ToggleNightMode = ({ expanded }: ToggleNightModeProps) => {
  const NightModeToggleHandler = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.add("dark")
    } else document.documentElement.classList.remove("dark")
  }
  return (
    <div
      className={cn(
        "flex items-center justify-between flex-row",
        !expanded && "flex-col"
      )}
    >
      <NavSection
        text="Dark Mode"
        icon={<Moon />}
        href=""
        expanded={expanded}
      />
      <Switch onCheckedChange={NightModeToggleHandler} />
    </div>
  )
}
