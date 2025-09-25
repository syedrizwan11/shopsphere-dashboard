import { ColumnDef } from "@tanstack/react-table"
import { TbCaretUpDownFilled } from "react-icons/tb"
import { ColumnConfig, TableOptions } from "./DataTable"
import { SquarePen, Trash2 } from "lucide-react"
import { Button } from "@/components/primitives/button"
import { ActionWithConfirmationPrompt } from "../confirmation-prompt/ConfirmationPrompt"

export function useGeneratedColumns<T extends { id?: number }>(
  config: ColumnConfig<T>[],
  optionalFields?: Pick<
    TableOptions<T>,
    | "includeActionsColumn"
    | "includeSelectionColumn"
    | "onDeleteRecord"
    | "onEditRecord"
  >
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
    enableHiding: col.canHide ?? false,
    cell: ({ row }) => {
      const original = row.original as T
      return col.render
        ? col.render(original)
        : String(row.getValue(col.key as string))
    },
  }))

  if (optionalFields?.includeSelectionColumn) {
    cols.unshift({
      id: "select",
      header: ({ table }) => (
        <input
          type="checkbox"
          className="ml-1"
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="ml-1"
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    })
  }

  if (optionalFields?.includeActionsColumn) {
    cols.push({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => optionalFields?.onEditRecord?.(row.original)}
            >
              <SquarePen size={20} className="text-teal-500" />
            </Button>

            <ActionWithConfirmationPrompt
              trigger={
                <div className="hover:bg-gray-200 hover:text-accent-foreground dark:hover:bg-gray-200/20 cursor-pointer size-8 flex justify-center items-center rounded-md">
                  <Trash2 size={20} className="text-red-400" />
                </div>
              }
              onConfirmation={() => {
                optionalFields?.onDeleteRecord?.(row.original)
              }}
            />
          </div>
        )
      },
      enableSorting: false,
      enableHiding: true,
    })
  }

  return cols
}
