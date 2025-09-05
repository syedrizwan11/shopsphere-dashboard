"use client"

import { ReactNode, useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table"

import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ColumnConfig,
  OptionalFieldsConfig,
  useGeneratedColumns,
} from "./useGeneratedColums"
import { DataTableToolbar } from "./DataTableToolBar"
import { Pagination } from "./Pagination"

export type DataTableProps<TData extends object> = {
  data: TData[]
  heading?: ReactNode | string
  columnsConfig: ColumnConfig<TData>[]
  options?: OptionalFieldsConfig
  filterColumn?: keyof TData
  // withSelection?: boolean
  // withActions?: boolean
  // sortableColumns?: (keyof TData)[]
  // hiddenColumns?: (keyof TData)[]
  pageSize?: number
  onEdit?: (row: TData) => void
  onDelete?: (row: TData) => void
}

export function DataTable<TData extends object>({
  heading,
  data,
  columnsConfig,
  options,
  filterColumn,
  pageSize,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  })
  const [rowSelection, setRowSelection] = useState({})

  const columns = useGeneratedColumns<TData>(columnsConfig, options)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  })

  return (
    <div className="w-full bg-bgPrimary p-4 rounded-3xl border shadow">
      <div className="text-xl mb-4 px-2">{heading}</div>
      <DataTableToolbar<TData> table={table} filterColumn={filterColumn} />

      <div className="overflow-hidden rounded-lg border">
        <TableContainer>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableContainer>
      </div>
      {pageSize && (
        <Pagination
          selectedRows={table.getFilteredSelectedRowModel().rows.length}
          totalRows={table.getFilteredRowModel().rows.length}
          isNextDisabled={!table.getCanNextPage()}
          isPrevDisabled={!table.getCanPreviousPage()}
          toNext={() => table.nextPage()}
          toPrev={() => table.previousPage()}
        />
      )}
    </div>
  )
}
