"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export interface NavSectionProps {
  icon: React.ReactNode
  text: string
  href: string
}

export const NavSection = ({ icon, text, href }: NavSectionProps) => {
  const path = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        "flex gap-3 items-center p-3 rounded-2xl cursor-pointer",
        path === href
          ? "bg-lightblue text-grayDark font-bold"
          : "text-textTertiary"
      )}
    >
      <div className="text-2xl">{icon}</div>
      <div>{text}</div>
    </Link>
  )
}
