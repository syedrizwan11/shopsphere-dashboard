import { cn } from "@/lib/utils"
import React from "react"

interface LargeHeadingProps {
  children: React.ReactNode
  className?: string
}
export const LargeHeading = ({ children, className }: LargeHeadingProps) => {
  return (
    <div className={cn("text-xl font-semibold text-textPrimary", className)}>
      {children}
    </div>
  )
}
