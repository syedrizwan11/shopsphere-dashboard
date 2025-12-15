"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/primitives/accordion"
import { NavSectionProps } from "./NavSection"
import { NavItem } from "@/config/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface CollapsibleNavSectionProps extends NavSectionProps {
  subSections?: NavItem[]
}

export const CollapsibleNavSection = ({
  icon,
  text,
  subSections,
}: CollapsibleNavSectionProps) => {
  const path = decodeURIComponent(usePathname()).toLowerCase()
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={cn(
            "p-3 rounded-2xl cursor-pointer",
            path.includes(text.toLowerCase())
              ? "bg-lightblue text-grayDark font-bold"
              : "text-textTertiary"
          )}
        >
          <div className="flex gap-3 items-center">
            <div className="text-2xl">{icon}</div>
            <div>{text}</div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="ml-6 border-l-2 border-gray mb-2">
          {subSections?.map((el) => (
            <div className="relative pb-2" key={el.label}>
              <Link
                href={el.href || "/"}
                className={cn(
                  "pl-5 relative top-4 cursor-pointer",
                  path.includes(el.label.toLowerCase())
                    ? "text-blue font-semibold"
                    : "text-textTertiary"
                )}
              >
                {el.label}
              </Link>
              <div className="absolute left-0 bottom-0 w-2 border-b-2 border-gray" />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
