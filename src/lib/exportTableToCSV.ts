import { Table } from "@tanstack/react-table"

export function exportToCSV<T>(table: Table<T>, filename = "data.csv") {
  const rows = table.getRowModel().rows
  if (rows.length === 0) return

  const headers = table
    .getAllLeafColumns()
    .filter((col) => col.id !== "select" && col.id !== "actions")
    .map((col) => col.id)
    .join(",")
  const data = rows
    .map((row) =>
      row
        .getVisibleCells()
        .filter(
          (cell) => cell.column.id !== "select" && cell.column.id !== "actions"
        )
        .map((cell) => JSON.stringify(cell.getValue() ?? ""))
        .join(",")
    )
    .join("\n")

  const csvContent = [headers, data].join("\n")
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
