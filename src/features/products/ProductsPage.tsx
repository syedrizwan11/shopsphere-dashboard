"use client"
import { BreadCrumb } from "@/components/ui"
import { DataTable } from "@/components/ui/datatable"
import { Product } from "@prisma/client"
import { productColumnsConfig } from "./ProductTableConfig"
import { deleteProduct } from "@/actions/product/delete"
import { useState } from "react"
import { errorToast } from "@/lib/toast"

interface ProductsPageCategory {
  products: Product[]
}
export const ProductsPage = ({ products }: ProductsPageCategory) => {
  const [productsData, setProductsData] = useState(products)

  const handleDeleteRecord = async (row: Product) => {
    const prevData = productsData

    setProductsData((prev) => prev.filter((p) => p.id !== row.id))
    const res = await deleteProduct(row.id!)

    if (!res.success) {
      errorToast("Error In Deleting This Product", res.error)
      setProductsData([...prevData])
    }
  }

  return (
    <div>
      <BreadCrumb />
      <DataTable<Product>
        data={productsData}
        columnsConfig={productColumnsConfig}
        options={{
          includeActionsColumn: true,
          includeSelectionColumn: true,
          showColumnToggle: true,
          showExportButton: true,
          filterByColumn: "name",
          pageSize: 8,
          onAddRecord: () => {},
          onDeleteRecord: handleDeleteRecord,
          onEditRecord: () => {},
        }}
      />
    </div>
  )
}
