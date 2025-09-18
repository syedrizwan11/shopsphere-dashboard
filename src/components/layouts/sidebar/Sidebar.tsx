import { ToggleNightMode } from "@/components/ui"
import { SideBarNavSectionContainer, UserCompanyInfo } from "."
import { type INavSection } from "@/config/navigation"
import { cn } from "@/lib/utils"
import { UserInfoBadge } from "@/components/ui/UserInfoBadge"

interface SideBarProps {
  expandedSideBar: boolean
  navSections: INavSection[]
}

export const SideBar = ({ expandedSideBar, navSections }: SideBarProps) => {
  return (
    <aside
      className={cn(
        "bg-bgPrimary text-sm sm:min-h-[calc(100vh-var(--topBarHeight))] transition-all duration-200 ease-in-out shrink-0",
        expandedSideBar
          ? "sm:w-fixedSideBar w-full sm:static absolute z-1000 p-4"
          : "w-16 p-2 h-topBar sm:block hidden"
      )}
    >
      <div>
        <UserCompanyInfo fullView={expandedSideBar} />

        <div className="flex flex-col justify-between">
          <nav className="flex-1 mt-6">
            {navSections.map((section, idx) => (
              <SideBarNavSectionContainer
                key={`${section.title}-${idx}`}
                section={section}
                expanded={expandedSideBar}
              />
            ))}
          </nav>

          <ToggleNightMode expanded={expandedSideBar} />
          <br />
          <UserInfoBadge expanded={expandedSideBar} />
        </div>
      </div>
    </aside>
  )
}
