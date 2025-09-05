import { Card, CardContent } from "../primitives/card"
import { LargeHeading } from "."
import { cn } from "@/lib/utils"
interface StyledSummaryCardProps {
  title: string
  description: string
  link: string
  className?: string
}
export const StyledSummaryCard = ({
  title,
  description,
  link,
  className,
}: StyledSummaryCardProps) => {
  return (
    <Card
      className={cn(
        " px-3 bg-[url(/svgs/card-bg.svg)] bg-cover text-white",
        className
      )}
    >
      <CardContent className="h-fit">
        <LargeHeading className="text-white pb-2">{title}</LargeHeading>
        <div className="mb-4">{description}</div>
        <a href={link} className="p-2 rounded-xl px-8 bg-white text-blue">
          Learn More
        </a>
      </CardContent>
    </Card>
  )
}
