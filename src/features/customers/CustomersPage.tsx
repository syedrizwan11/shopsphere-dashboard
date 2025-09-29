"use client"
import { DataTable } from "@/components/ui/data-table"
import { User } from "@prisma/client"
import { useState } from "react"
import { errorToast } from "@/lib/toast"
import { useRouter } from "next/navigation"
import { CustomerTableConfig } from "./customerTableConfig"
import { deleteUser } from "@/actions"

interface CustomerPageProps {
  customers: User[]
}
export const CustomersPage = ({ customers }: CustomerPageProps) => {
  const [customersData, setCustomersData] = useState(customers)
  const router = useRouter()

  const handleDeleteRecord = async (row: User) => {
    const prevData = customersData

    setCustomersData((prev) => prev.filter((p) => p.id !== row.id))
    const res = await deleteUser(row.id!)
    if (!res.success) {
      errorToast("Error In Deleting This Customer", res.error)
      setCustomersData([...prevData])
    }
  }

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
