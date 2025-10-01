import { BreadCrumb, LargeHeading } from "@/components/ui"
import { TransactionForm } from "@/features/transactions"

const AddTransactionPage = async () => {
  return (
    <>
      <LargeHeading>Transactions</LargeHeading>
      <BreadCrumb />
      <TransactionForm />
    </>
  )
}

export default AddTransactionPage
