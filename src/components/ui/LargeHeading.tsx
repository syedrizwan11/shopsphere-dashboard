import { cn } from "@/lib/utils"

interface LargeHeadingProps {
  text: string
  className: string
}
export const LargeHeading = ({ text, className }: LargeHeadingProps) => {
  return (
    <div className={cn("text-xl font-semibold text-textPrimary", className)}>
      {text}
    </div>
  )
}
