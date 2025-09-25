import { getAllProductsByCategory } from "@/actions"
import { ProductsPage } from "@/features/products"
import { notFound } from "next/navigation"

type Props = {
  params: { category: string }
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params
  const result = await getAllProductsByCategory(decodeURIComponent(category))

  if (!result.success) {
    return notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">Products</h1>
      <ProductsPage products={result.data} productCategory={category} />
    </div>
  )
}
