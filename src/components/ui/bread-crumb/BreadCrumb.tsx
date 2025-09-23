"use client"
import { FaCaretRight } from "react-icons/fa"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export const BreadCrumb = () => {
  const paths = decodeURIComponent(usePathname()).split("/").filter(Boolean)

  return (
    <div className="flex mb-4 cursor-default text-textTertiary">
      <div className="flex items-center">
        <div>Dashboard</div>
        <FaCaretRight className="text-lg mt-[2px]" />
      </div>
      {paths.map((el, idx) => (
        <div
          key={el}
          className={cn(
            "flex items-center capitalize",
            idx === paths.length - 1 && "font-semibold text-blue"
          )}
        >
          <div>{el}</div>
          {idx < paths.length - 1 && (
            <FaCaretRight className="text-lg mt-[2px]" />
          )}
        </div>
      ))}
    </div>
  )
}
