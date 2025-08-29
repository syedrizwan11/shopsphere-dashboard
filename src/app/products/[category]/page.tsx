import { notFound } from "next/navigation"

type Props = {
  params: { category: string }
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params

  // Example: allowed categories
  const categories = ["sneakers", "jacket", "t-shirt", "bag"]

  if (!categories.includes(category)) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{category} Products</h1>
      {/* Fetch or filter products based on category here */}
    </div>
  )
}
