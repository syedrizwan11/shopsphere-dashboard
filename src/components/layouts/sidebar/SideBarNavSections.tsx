import { INavSection } from "@/config/navigation"
import { CollapsibleNavSection } from "./CollapsibleNavSection"
import { NavSection } from "./navSection"

interface SidebarSectionProps {
  section: INavSection
  expanded: boolean
}

export const SideBarNavSections = ({
  section,
  expanded,
}: SidebarSectionProps) => (
  <div className="mb-6">
    {expanded && (
      <div className="text-xs font-semibold text-muted-foreground px-2 mb-3 tracking-wide uppercase">
        {section.title}
      </div>
    )}

    {section.items.map((item) =>
      item.children && expanded ? (
        <CollapsibleNavSection
          key={item.label}
          icon={item.icon && <item.icon />}
          text={item.label}
          href={item.href || ""}
          subSections={item.children}
        />
      ) : (
        <NavSection
          key={item.label}
          icon={item.icon && <item.icon />}
          text={item.label}
          href={item.href || ""}
          expanded={expanded}
        />
      )
    )}
  </div>
)
