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
        "bg-sidebar min-h-screen border-r border-border transition-[width] duration-300 ease-in-out",
        expanded ? "w-72 p-4" : "w-16 p-2"
      )}
    >
      <SidebarHeader
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />

      <UserCompanyInfo fullView={expanded} />

      <div className="flex flex-col h-[calc(100%-5rem)] justify-between">
        <nav className="flex-1 overflow-y-auto custom-scrollbar mt-6">
          {navSections.map((section, idx) => (
            <SideBarNavSectionContainer
              key={`${section.title}-${idx}`}
              section={section}
              expanded={expanded}
            />
          ))}
        </nav>

        <div className="pt-4">
          <ToggleNightMode expanded={expanded} />
        </div>
      </div>
    </aside>
  )
}
