import { getTransactionById } from "@/actions"
import { BreadCrumb, ErrorAlert, LargeHeading } from "@/components/ui"
import { TransactionForm } from "@/features/transactions"

type props = {
  params: { transactionId: string }
}
const EditTransactionPage = async ({ params }: props) => {
  const { transactionId } = await params
  const result = await getTransactionById(Number(transactionId))

  if (!result.success) return <ErrorAlert />
  return (
    <div>
      <LargeHeading>Transactions</LargeHeading>
      <BreadCrumb />
      <TransactionForm transaction={result.data} />
    </div>
  )
}

export default EditTransactionPage
