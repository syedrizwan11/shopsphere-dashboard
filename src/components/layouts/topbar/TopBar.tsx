import React from "react"
import { LogoHeader } from "."
import { UserInfoBadge } from "@/components/ui/UserInfoBadge"
import { Bell } from "lucide-react"

interface TopBarProps {
  expandedSideBar: boolean
  toggleExpandedSideBar: () => void
}

export const TopBar = ({
  expandedSideBar,
  toggleExpandedSideBar,
}: TopBarProps) => {
  return (
    <div className="bg-bgPrimary h-topBar p-2 pl-2 pr-4 flex justify-between items-center">
      <LogoHeader expanded={expandedSideBar} onToggle={toggleExpandedSideBar} />
      <div className="flex gap-4 items-center">
        <Bell />
        <UserInfoBadge expanded />
      </div>
    </div>
  )
}
