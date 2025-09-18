import { getAllProductsByCategory } from "@/actions"
import { ProductsPage } from "@/features/products"
import { notFound } from "next/navigation"

type Props = {
  params: { category: string }
}

export default async function ProductCategoryPage({ params }: Props) {
  const category = await decodeURIComponent(params.category)
  const products = await getAllProductsByCategory(category, 1)

  if (!products.success) {
    return notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">Products</h1>
      <ProductsPage products={products.data} />
    </div>
  )
}
