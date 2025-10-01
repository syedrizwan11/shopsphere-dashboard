import { getAllTransactions } from "@/actions"
import { BreadCrumb, ErrorAlert, LargeHeading } from "@/components/ui"
import { TransactionPage } from "@/features/transactions"

const Transactions = async () => {
  const result = await getAllTransactions()

  if (!result.success) return <ErrorAlert />

  return (
    <div>
      <LargeHeading>Transactions</LargeHeading>
      <BreadCrumb />
      <TransactionPage transactions={result.data} />
    </div>
  )
}

export default Transactions
