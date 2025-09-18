"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavSectionProps {
  icon: React.ReactNode
  text: string
  href: string
  expanded?: boolean
}

export const NavSection = ({ icon, text, href, expanded }: NavSectionProps) => {
  const path = decodeURIComponent(usePathname()).toLowerCase()

  return (
    <Link
      href={href}
      className={clsx(
        "flex gap-3 items-center p-3 rounded-2xl cursor-pointer",
        path.includes(text.toLowerCase())
          ? "bg-lightblue text-grayDark font-bold"
          : "text-textTertiary"
      )}
    >
      <div className="text-2xl">{icon}</div>
      {expanded && <div>{text}</div>}
    </Link>
  )
}
