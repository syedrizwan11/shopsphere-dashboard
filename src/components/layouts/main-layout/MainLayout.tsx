import { ReactNode } from "react"
import { MainLayoutSkeleton } from "./MainLayoutSkeleton"
import { getAllProductCategories } from "@/actions"
import { type NavItem, navSections } from "@/config/navigation"

export const MainLayout = async ({ children }: { children: ReactNode }) => {
  const productCategories = await getAllProductCategories()
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
      <MainLayoutSkeleton navSections={updatedNavSections}>
        {children}
      </MainLayoutSkeleton>
    </div>
  )
}
