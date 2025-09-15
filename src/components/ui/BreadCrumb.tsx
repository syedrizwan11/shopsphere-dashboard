"use client"
import { usePathname } from "next/navigation"

export const BreadCrumb = () => {
  const pathName = usePathname()

  return <div>{pathName}</div>
}
