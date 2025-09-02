import { cn } from "@/lib/utils"
import React from "react"

interface SmallTextProps {
  children: React.ReactNode
  className?: string
}
export const SmallText = ({ children, className }: SmallTextProps) => {
  return (
    <div className={cn("text-sm text-textTertiary", className)}>{children}</div>
  )
}
