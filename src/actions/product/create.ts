"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { AvailabilityStatus, Product } from "@prisma/client"
import { processImages } from ".."

export const createProduct = async (data: {
  name: string
  price: number
  quantity: number
  status: AvailabilityStatus
  description: string
  images: File[]
  category: string
}) => {
  return actionWrapper<Product>(async (prisma) => {
    const { category, images, ...productData } = data

    const productCategory = await prisma.productCategory.findFirst({
      where: { orgId: 1, name: category },
      select: { id: true },
    })
    if (!productCategory) throw new Error("Category not found")

    const productImagesUrls = await processImages(images)
    const productCreated = await prisma.product.create({
      data: {
        ...productData,
        orgId: 1,
        productCategoryId: productCategory.id,
        images: productImagesUrls,
      },
    })
    if (!productCreated) throw new Error("could not create this product")
    // revalidatePath(`/products/${productDeleted.productCategory.name}`, "page")
    return productCreated
  })
}
