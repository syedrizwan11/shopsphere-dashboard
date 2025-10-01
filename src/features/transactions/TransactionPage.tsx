"use client"
import { DataTable } from "@/components/ui/data-table"
import { useRouter } from "next/navigation"
import { transactionTableConfig } from "./transactionTableConfig"
import { deleteTransaction } from "@/actions"
import { EnrichedTransaction } from "@/types/transaction"
import { useOptimisticDelete } from "@/hooks/useOptimisticDelete"

interface TransactionPageProps {
  transactions: EnrichedTransaction[]
}
export const TransactionPage = ({ transactions }: TransactionPageProps) => {
  const { data: transactionsData, handleDeleteRecord } =
    useOptimisticDelete<EnrichedTransaction>(transactions, deleteTransaction)
  const router = useRouter()

  return (
    <div>
      <DataTable<EnrichedTransaction>
        data={transactionsData}
        columnsConfig={transactionTableConfig}
        options={{
          includeActionsColumn: true,
          includeSelectionColumn: true,
          showColumnToggle: true,
          showExportButton: true,
          filterByColumn: "productName",
          pageSize: 8,
          onAddRecord: () => {
            router.push(`/transactions/add-transaction`)
          },
          onDeleteRecord: handleDeleteRecord,
          onEditRecord: (row) => {
            router.push(`/transactions/edit-transaction/${row.id}`)
          },
        }}
      />
    </div>
  )
}
