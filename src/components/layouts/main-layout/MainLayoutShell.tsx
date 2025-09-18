"use client"
import { ReactNode, useEffect, useState } from "react"
import { SideBar } from "../sidebar"
import { TopBar } from "../topbar/TopBar"
import { INavSection } from "@/config/navigation"

export const MainLayoutShell = ({
  children,
  navSections,
}: {
  children: ReactNode
  navSections: INavSection[]
}) => {
  const [expandedSideBar, setExpandedSideBar] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setExpandedSideBar(window.innerWidth > 640)
    }
    checkSize()
  }, [])

  return (
    <div className="bg-bgSecondary">
      <TopBar
        expandedSideBar={expandedSideBar}
        toggleExpandedSideBar={() => setExpandedSideBar((prev) => !prev)}
      />
      <div className="flex relative">
        <SideBar expandedSideBar={expandedSideBar} navSections={navSections} />
        <div className="p-5 px-6 grow-1">{children}</div>
      </div>
    </div>
  )
}
