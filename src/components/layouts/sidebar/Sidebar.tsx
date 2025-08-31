"use client"

import { useState } from "react"
import { ToggleNightMode } from "@/components/ToggleNightMode"
import { SideBarNavSectionContainer, UserCompanyInfo } from "."
import { navSections } from "@/config/navigation"
import { cn } from "@/lib/utils"
import { SidebarHeader } from "./SideBarHeader"

export const SideBar = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside
      className={cn(
        "bg-sidebar min-h-screen border-r border-border transition-all duration-200 ease-in-out",
        expanded ? "w-72 p-4" : "w-16 p-2"
      )}
    >
      <SidebarHeader
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      <UserCompanyInfo fullView={expanded} />

      <div className="flex flex-col justify-between">
        <nav className="flex-1 mt-6">
          {navSections.map((section, idx) => (
            <SideBarNavSectionContainer
              key={`${section.title}-${idx}`}
              section={section}
              expanded={expanded}
            />
          ))}
        </nav>

        <div>
          <ToggleNightMode expanded={expanded} />
        </div>
      </div>
    </aside>
  )
}
