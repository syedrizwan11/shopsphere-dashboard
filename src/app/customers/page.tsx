import { getAllUsers } from "@/actions"
import { ErrorAlert } from "@/components/ui"

import { CustomersPage } from "@/features/customers"

const Customers = async () => {
  const result = await getAllUsers()

  if (!result.success) return <ErrorAlert />

  return (
    <>
      <CustomersPage customers={result.data} />
    </>
  )
}

export default Customers
