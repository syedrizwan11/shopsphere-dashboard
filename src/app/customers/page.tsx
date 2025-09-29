import { getAllUsers } from "@/actions"
import { BreadCrumb, LargeHeading } from "@/components/ui"
import { CustomersPage } from "@/features/customers"
export const dynamic = "force-dynamic"
const Customers = async () => {
  const result = await getAllUsers()

  if (!result.success) return <div>{result.error}</div>

  return (
    <div>
      <LargeHeading>Customers</LargeHeading>
      <BreadCrumb />
      <CustomersPage customers={result.data} />
    </div>
  )
}

export default Customers
