import { ColumnDef } from "@tanstack/react-table"
import { TbCaretUpDownFilled } from "react-icons/tb"

export type ColumnConfig<T> = {
  key: keyof T
  header?: string
  sortable?: boolean
  render?: (row: T) => React.ReactNode
}

export type OptionalFieldsConfig = {
  withCheckbox?: boolean
  withActions?: boolean
}

export function useGeneratedColumns<T>(
  config: ColumnConfig<T>[],
  optionalFields?: OptionalFieldsConfig
): ColumnDef<T>[] {
  const cols: ColumnDef<T>[] = config.map((col) => ({
    accessorKey: col.key as string,
    header: ({ column }) => {
      return (
        <div
          className="flex justify-between items-center pr-4"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {col.header ?? String(col.key)}
          {col.sortable && (
            <TbCaretUpDownFilled className="text-sm text-gray-400" />
          )}
        </div>
      )
    },
    enableSorting: col.sortable ?? false,
    cell: ({ row }) => {
      const original = row.original as T
      return col.render
        ? col.render(original)
        : String(row.getValue(col.key as string))
    },
  }))

  // Optional checkbox column
  if (optionalFields?.withCheckbox) {
    cols.unshift({
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    })
  }

  // Optional actions column
  if (optionalFields?.withActions) {
    cols.push({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button onClick={() => console.log("Edit", row.original)}>✏️</button>
          <button onClick={() => console.log("Delete", row.original)}>
            🗑️
          </button>
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    })
  }

  return cols
}
