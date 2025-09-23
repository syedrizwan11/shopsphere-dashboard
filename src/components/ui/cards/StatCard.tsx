import { Card, CardContent } from "../../primitives/card"
import { SmallHeading } from ".."
import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
interface StatCardProps {
  text: string
  value: string
  percentage: number
  isTrendingUp?: boolean
  className?: string
  blueVariant?: boolean
  link?: string
}
export const StatCard = ({
  text,
  value,
  percentage,
  isTrendingUp,
  blueVariant,
  link,
  className,
}: StatCardProps) => {
  return (
    <Card
      className={cn("py-4", blueVariant && "bg-blue text-white", className)}
    >
      <CardContent className="flex flex-col justify-between px-4 h-full min-h-20">
        <div className="flex justify-between">
          <SmallHeading className={blueVariant ? "text-white" : ""}>
            {text}
          </SmallHeading>
          <Link href={link || ""}>
            <ArrowUpRight />
          </Link>
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
                  blueVariant
                    ? "text-white"
                    : isTrendingUp
                    ? "text-green-500"
                    : "text-red-500"
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
