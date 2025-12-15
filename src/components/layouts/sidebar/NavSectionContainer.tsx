import { INavSection } from "@/config/navigation"
import { CollapsibleNavSection } from "./CollapsibleNavSection"
import { NavSection } from "./NavSection"
import { iconMap } from "@/constants/icons"

interface SidebarSectionProps {
  section: INavSection
  expanded: boolean
}

export const NavSectionContainer = ({
  section,
  expanded,
}: SidebarSectionProps) => (
  <div className="mb-6 last:mb-0">
    {expanded && (
      <div className="text-xs font-semibold text-muted-foreground px-2 mb-3 tracking-wide uppercase">
        {section.title}
      </div>
    )}

    {section.items.map((item) => {
      const Icon = item.icon ? iconMap[item.icon] : null
      return item.children && expanded ? (
        <CollapsibleNavSection
          key={item.label}
          icon={Icon && <Icon />}
          text={item.label}
          href={item.href || ""}
          subSections={item.children}
        />
      ) : (
        <NavSection
          key={item.label}
          icon={Icon && <Icon />}
          text={item.label}
          href={item.href || ""}
          expanded={expanded}
        />
      )
    })}
  </div>
)
