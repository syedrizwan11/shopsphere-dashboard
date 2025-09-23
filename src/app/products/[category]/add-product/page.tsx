import { BreadCrumb } from "@/components/ui"
import { ProductForm } from "@/features/products"

export default async function AddProductPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">Products</h1>
      <BreadCrumb />
      <ProductForm />
    </div>
  )
}
