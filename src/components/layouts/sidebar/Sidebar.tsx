import Image from "next/image"
import { CollapsibleNavSection, NavSection } from "."
import { navSections } from "@/config/navigation"

export const SideBar = () => {
  return (
    <div className="w-72 min-h-screen bg-bgPrimary p-4 text-sm">
      <div className="rounded-xl flex py-1 px-4 border border-gray-300 items-center">
        <Image
          src="/images/company-logo.png"
          alt="compony-logo"
          height={50}
          width={50}
        />
        <div className="shrink-0"></div>
        <div>
          <p className="text-textTertiary">Company</p>
          <p className="text-primary font-bold">Lanky Store</p>
        </div>
      </div>

      {navSections.map((section, idx) => (
        <div key={`${section.title} ${idx}`}>
          <div className="text-textTertiary text-md ps-2 mt-8 mb-3">
            {section.title}
          </div>

          {section.items.map(({ label, icon: Icon, href, children }) =>
            label.toLowerCase() === "products" ? (
              <CollapsibleNavSection
                key={label}
                icon={Icon && <Icon />}
                text={label}
                href={href || ""}
                subSections={children}
              />
            ) : (
              <NavSection
                key={label}
                icon={Icon && <Icon />}
                text={label}
                href={href || ""}
              />
            )
          )}
        </div>
      ))}
    </div>
  )
}
