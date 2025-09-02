"use client"
import { ReactNode, useState } from "react"
import { SideBar } from "../sidebar"
import { TopBar } from "../topbar/TopBar"

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [expandedSideBar, setExpandedSideBar] = useState(false)

  return (
    <div className="bg-bgSecondary">
      <TopBar
        expandedSideBar={expandedSideBar}
        toggleExpandedSideBar={() => setExpandedSideBar((prev) => !prev)}
      />
      <div className="flex relative">
        <SideBar expandedSideBar={expandedSideBar} />
        <div className="p-5 px-6 grow-1">{children}</div>
      </div>
    </div>
  )
}
