import { ToggleNightMode } from "@/components/ui"
import { SideBarNavSectionContainer, UserCompanyInfo } from "."
import { navSections } from "@/config/navigation"
import { cn } from "@/lib/utils"

interface SideBarProps {
  expandedSideBar: boolean
}

export const SideBar = ({ expandedSideBar }: SideBarProps) => {
  return (
    <aside
      className={cn(
        "bg-bgPrimary sm:min-h-screen transition-all duration-200 ease-in-out",
        expandedSideBar
          ? "sm:w-fixedSideBar w-full sm:static absolute p-4"
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

          <div>
            <ToggleNightMode expanded={expandedSideBar} />
          </div>
        </div>
      </div>
    </aside>
  )
}
