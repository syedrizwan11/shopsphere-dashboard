import { ReactNode } from "react"
import { MainLayoutShell } from "./MainLayoutShell"
import { getAllProductCategories } from "@/actions"
import { type NavItem, navSections } from "@/config/navigation"

export const MainLayout = async ({ children }: { children: ReactNode }) => {
  const productCategories = await getAllProductCategories(1)
  const updatedNavSections = productCategories.success
    ? navSections.map((el) => ({
        ...el,
        items: el.items.map((item) =>
          item.label.toLowerCase() === "products"
            ? {
                ...item,
                href: productCategories.data[0]?.name
                  ? `/products/${productCategories.data[0].name}`
                  : "",
                children: productCategories.data.map(
                  (category) =>
                    ({
                      label: category.name,
                      href: "/products/" + category.name,
                    } as NavItem)
                ),
              }
            : item
        ),
      }))
    : navSections

  return (
    <div>
      <MainLayoutShell navSections={updatedNavSections}>
        {children}
      </MainLayoutShell>
    </div>
  )
}
