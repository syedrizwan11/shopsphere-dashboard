import { BreadCrumb, LargeHeading } from "@/components/ui"
import { CustomerForm } from "@/features/customers"

export default async function AddProductPage() {
  return (
    <div>
      <LargeHeading>Customers</LargeHeading>
      <BreadCrumb />
      <CustomerForm />
    </div>
  )
}
