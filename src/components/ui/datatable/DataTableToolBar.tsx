import { Input } from "@/components/primitives/input"
import { Table } from "@tanstack/react-table"

export function DataTableToolbar<TData extends object>({
  table,
  filterColumn,
}: {
  table: Table<TData>
  filterColumn?: keyof TData
}) {
  if (!filterColumn) return null
  return (
    <div className="flex items-center py-4 gap-2">
      <Input
        placeholder={`Filter ${String(filterColumn)}...`}
        value={
          (table
            .getColumn(filterColumn as string)
            ?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table
            .getColumn(filterColumn as string)
            ?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  )
}
