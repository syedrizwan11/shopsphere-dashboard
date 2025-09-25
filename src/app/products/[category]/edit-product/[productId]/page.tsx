import { getProductById } from "@/actions"
import { BreadCrumb, LargeHeading } from "@/components/ui"
import { ProductForm } from "@/features/products"
import { notFound } from "next/navigation"

interface Props {
  params: { productId: string }
}

export default async function EditProductPage({ params }: Props) {
  const { productId } = await params

  const result = await getProductById(Number(productId))
  if (!result.success) {
    return notFound()
  }

  return (
    <div>
      <LargeHeading>Products</LargeHeading>
      <BreadCrumb />
      <ProductForm product={result.data} />
    </div>
  )
}
