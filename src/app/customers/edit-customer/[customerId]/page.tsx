import { getUserById } from "@/actions"
import { BreadCrumb, ErrorAlert, LargeHeading } from "@/components/ui"
import { CustomerForm } from "@/features/customers"

interface Props {
  params: { customerId: string }
}

export default async function EditProductPage({ params }: Props) {
  const { customerId } = await params
  console.log(customerId)

  const result = await getUserById(Number(customerId))
  if (!result.success) {
    return <ErrorAlert />
  }

  return (
    <div>
      <LargeHeading>Customers</LargeHeading>
      <BreadCrumb />
      <CustomerForm customer={result.data} />
    </div>
  )
}
