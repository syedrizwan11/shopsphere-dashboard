import { cn } from "@/lib/utils"
import React from "react"

interface SmallHeadingProps {
  children: React.ReactNode
  className?: string
}
export const SmallHeading = ({ children, className }: SmallHeadingProps) => {
  return (
    <div
      className={cn("text-[1rem] font-semibold text-textSecondary", className)}
    >
      {children}
    </div>
  )
}
