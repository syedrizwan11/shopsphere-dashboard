"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { AvailabilityStatus, Product } from "@prisma/client"
import { storeImages, cleanupImages } from ".."

export const updateProduct = async (data: {
  name: string
  price: number
  quantity: number
  status: AvailabilityStatus
  description: string
  category: string
  images: (File | string)[]
  id: number
}) => {
  return actionWrapper<Product>(async (prisma) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, category, images, ...productData } = data

    const newImages = images.filter((img) => img instanceof File)
    const existingImageUrls = images.filter((img) => typeof img === "string")

    const product = await prisma.product.findUnique({
      where: { id },
      select: { images: true },
    })

    if (!product) throw new Error("product not found")

    const imagesToBeCleaned = product.images.filter(
      (el) => !existingImageUrls.includes(el)
    )
    console.log(imagesToBeCleaned)
    await cleanupImages(imagesToBeCleaned)
    const uploadedUrls = await storeImages(newImages)

    const productUpdated = await prisma.product.update({
      where: { id },
      data: {
        ...productData,
        images: [...existingImageUrls, ...uploadedUrls],
      },
    })
    if (!productUpdated) throw new Error("could not update this product")
    return productUpdated
  })
}
