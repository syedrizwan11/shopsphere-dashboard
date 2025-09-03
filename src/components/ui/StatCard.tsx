import { Card, CardContent } from "../primitives/card"
import { SmallHeading } from "."
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
interface StatCardProps {
  text: string
  value: string
  percentage: number
  isTrendingUp: boolean
  className?: string
}
export const StatCard = ({
  text,
  value,
  percentage,
  isTrendingUp,
  className,
}: StatCardProps) => {
  return (
    <Card className={cn("py-4", className)}>
      <CardContent className="flex flex-col justify-between px-4 h-full">
        <div className="flex justify-between">
          <SmallHeading>{text}</SmallHeading>
          <ArrowUpRight />
        </div>
        <div className="flex justify-between items-center gap-4 ">
          <div className="text-xl">{value}</div>
          <div className="text-xs">
            <div className="flex items-center gap-1">
              {isTrendingUp ? (
                <TrendingUp className="text-green-500" size={15} />
              ) : (
                <TrendingDown className="text-red-500" />
              )}

              <div
                className={cn(
                  "",
                  isTrendingUp ? "text-green-500" : "text-red-500"
                )}
              >
                {percentage}%
              </div>
            </div>
            <div>From Last Week</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
