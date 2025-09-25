import { BreadCrumb, LargeHeading } from "@/components/ui"
import { ProductForm } from "@/features/products"

export default async function AddProductPage() {
  return (
    <div>
      <LargeHeading>Products</LargeHeading>
      <BreadCrumb />
      <ProductForm />
    </div>
  )
}
