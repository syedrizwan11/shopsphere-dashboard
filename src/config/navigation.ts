import {
  House,
  Store,
  CreditCard,
  Users,
  ChartSpline,
  LucideIcon,
  Settings,
  HelpCircle,
  Moon,
} from "lucide-react" // or any icon library

export type NavItem = {
  label: string
  href?: string
  icon?: LucideIcon
  count?: number
  children?: NavItem[]
}

export type NavSection = {
  title?: string
  items: NavItem[]
}

export const navSections: NavSection[] = [
  {
    title: "GENERAL",
    items: [
      { label: "Dashboard", href: "/", icon: House },
      {
        label: "Products",
        href: "/products",
        icon: Store,
        children: [
          { label: "Sneakers", href: "/products/sneakers" },
          { label: "Jacket", href: "/products/jacket" },
          { label: "T-Shirt", href: "/products/t-shirt" },
          { label: "Bag", href: "/products/bag" },
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
      { label: "Dark Mode", icon: Moon }, // this one can be a toggle instead of link
    ],
  },
]
