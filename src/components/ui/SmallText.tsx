import { cn } from "@/lib/utils"
import React from "react"

interface SmallTextProps {
  children: React.ReactNode
  className?: string
}
export const SmallText = ({ children, className }: SmallTextProps) => {
  return (
    <div className={cn("text-[0.8rem] text-textTertiary", className)}>
      {children}
    </div>
  )
}
