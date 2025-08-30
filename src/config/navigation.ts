import {
  House,
  Store,
  CreditCard,
  Users,
  ChartSpline,
  LucideIcon,
  Settings,
  HelpCircle,
} from "lucide-react" // or any icon library

export type NavItem = {
  label: string
  href?: string
  icon?: LucideIcon
  count?: number
  children?: NavItem[]
}

export type INavSection = {
  title?: string
  items: NavItem[]
}

export const navSections: INavSection[] = [
  {
    title: "GENERAL",
    items: [
      { label: "Dashboard", href: "/", icon: House },
      {
        label: "Products",
        href: "/products/sneakers",
        icon: Store,
        children: [
          { label: "Sneakers", href: "/products/sneakers" },
          { label: "Jacket", href: "/products/jacket" },
          { label: "T-Shirt", href: "/products/t-shirt" },
          { label: "Bag", href: "/products/bag" },
          // { label: "Add Products", href: "/products/add" },
        ],
      },
      { label: "Transactions", href: "/transactions", icon: CreditCard },
      { label: "Customers", href: "/customers", icon: Users },
      { label: "Sales Report", href: "/sales-report", icon: ChartSpline },
    ],
  },
  {
    title: "TOOLS",
    items: [
      { label: "Account & Settings", href: "/settings", icon: Settings },
      { label: "Help", href: "/help", icon: HelpCircle },
    ],
  },
]
