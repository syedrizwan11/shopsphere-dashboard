import { Button } from "@/components/primitives/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/primitives/dropdown-menu"
import { Input } from "@/components/primitives/input"
import { Table } from "@tanstack/react-table"
import { ChevronDown, Download, PlusIcon } from "lucide-react"
import { useEffect } from "react"
import { TableOptions } from "./DataTable"
import { exportToCSV } from "@/lib/exportTableToCSV"

interface DataTableToolbarProps<TData>
  extends Pick<
    TableOptions<TData>,
    "filterByColumn" | "showColumnToggle" | "showExportButton" | "onAddRecord"
  > {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
  filterByColumn,
  showColumnToggle,
  showExportButton,
  onAddRecord,
}: DataTableToolbarProps<TData>) {
  useEffect(() => {
    const handleResize = () => {
      table.getAllLeafColumns().forEach((col) => {
        const shouldHide = col.getCanHide() && window.innerWidth < 768
        col.toggleVisibility(!shouldHide)
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [table])

  return (
    <div className="flex items-center gap-2 justify-between sm:flex-row flex-col-reverse">
      {filterByColumn && (
        <Input
          placeholder={`Filter by ${String(filterByColumn)}...`}
          value={
            (table
              .getColumn(filterByColumn as string)
              ?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table
              .getColumn(filterByColumn as string)
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      )}
      <div className="flex gap-2">
        {showExportButton && (
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => exportToCSV(table)}
          >
            <div>Export</div>
            <Download size={20} />
          </Button>
        )}
        {showColumnToggle && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {onAddRecord && (
          <Button
            variant="tertiary"
            className="flex items-center gap-2 bg-blue"
            onClick={() => onAddRecord()}
          >
            <div>
              Add <span className="sm:inline hidden">Record</span>
            </div>
            <PlusIcon size={20} />
          </Button>
        )}
      </div>
    </div>
  )
}
