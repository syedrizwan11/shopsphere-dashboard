import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React from "react"
import { SmallHeading } from "./SmallHeading"

interface SummaryCardHeaderProps {
  text: string
  link: string
}
export const SummaryCardHeader = ({ text, link }: SummaryCardHeaderProps) => {
  return (
    <SmallHeading className="flex justify-between w-full flex-wrap">
      <span>{text}</span>
      <Link className="text-xs flex gap-1 items-center" href={link}>
        Show All
        <ArrowUpRight />
      </Link>
    </SmallHeading>
  )
}
