import { Button } from "@/components/primitives/button"
import React from "react"
interface PaginationProps {
  selectedRows: number
  totalRows: number
  isPrevDisabled?: boolean
  isNextDisabled?: boolean
  toPrev: () => void
  toNext: () => void
}
export const Pagination = ({
  selectedRows,
  totalRows,
  isPrevDisabled,
  isNextDisabled,
  toNext,
  toPrev,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <div className="text-muted-foreground flex-1 text-sm">
        {selectedRows} of {totalRows} row(s) selected.
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={toPrev}
          disabled={isPrevDisabled}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={toNext}
          disabled={isNextDisabled}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
