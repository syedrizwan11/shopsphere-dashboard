"use client"
import { DataTable } from "@/components/ui/data-table"
import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { CustomerTableConfig } from "./customerTableConfig"
import { deleteUser } from "@/actions"
import { useOptimisticDelete } from "@/hooks/useOptimisticDelete"

interface CustomerPageProps {
  customers: User[]
}
export const CustomersPage = ({ customers }: CustomerPageProps) => {
  const { data: customersData, handleDeleteRecord } = useOptimisticDelete(
    customers,
    deleteUser
  )
  const router = useRouter()

  return (
    <div>
      <DataTable<User>
        data={customersData}
        columnsConfig={CustomerTableConfig}
        options={{
          includeActionsColumn: true,
          includeSelectionColumn: true,
          showColumnToggle: true,
          showExportButton: true,
          filterByColumn: "name",
          pageSize: 8,
          onAddRecord: () => {
            router.push(`/customers/add-customer`)
          },
          onDeleteRecord: handleDeleteRecord,
          onEditRecord: (row) => {
            router.push(`/customers/edit-customer/${row.id}`)
          },
        }}
      />
    </div>
  )
}
