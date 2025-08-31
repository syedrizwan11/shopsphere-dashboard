import React from "react"
import { LogoHeader } from "."

interface TopBarProps {
  expandedSideBar: boolean
  toggleExpandedSideBar: () => void
}

export const TopBar = ({
  expandedSideBar,
  toggleExpandedSideBar,
}: TopBarProps) => {
  return (
    <div className="bg-bgPrimary h-topBar p-2 pl-2 pr-4">
      <LogoHeader expanded={expandedSideBar} onToggle={toggleExpandedSideBar} />
    </div>
  )
}
