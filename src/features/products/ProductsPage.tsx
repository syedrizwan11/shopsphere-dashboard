"use client"
import { BreadCrumb, DataTable } from "@/components/ui"
import { Product } from "@prisma/client"
import { productColumnsConfig } from "./productTableConfig"
import { deleteProduct } from "@/actions/product/delete"
import { useRouter } from "next/navigation"
import { useOptimisticDelete } from "@/hooks/useOptimisticDelete"

interface ProductsPageProps {
  products: Product[]
  productCategory: string
}
export const ProductsPage = ({
  products,
  productCategory,
}: ProductsPageProps) => {
  const { data: productsData, handleDeleteRecord } = useOptimisticDelete(
    products,
    deleteProduct
  )
  const router = useRouter()

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
          onAddRecord: () => {
            router.push(`/products/${productCategory}/add-product`)
          },
          onDeleteRecord: handleDeleteRecord,
          onEditRecord: (row) => {
            router.push(`/products/${productCategory}/edit-product/${row.id}`)
          },
        }}
      />
    </div>
  )
}
