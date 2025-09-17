"use client"
import { BreadCrumb } from "@/components/ui"
import { DataTable } from "@/components/ui/datatable"
import { Product } from "@prisma/client"
import { productColumnsConfig } from "./ProductTableConfig"

interface ProductsPageCategory {
  products: Product[]
}

export const ProductsPage = ({ products }: ProductsPageCategory) => {
  return (
    <div>
      <BreadCrumb />
      <DataTable
        data={products}
        columnsConfig={productColumnsConfig}
        options={{
          includeActionsColumn: true,
          includeSelectionColumn: true,
          showColumnToggle: true,
          showExportButton: true,
          filterByColumn: "name",
          pageSize: 8,
          onAddRecord: () => {},
          onDeleteRecord: () => {},
          onEditRecord: () => {},
        }}
      />
    </div>
  )
}
