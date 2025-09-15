"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Product } from "@prisma/client"

export const getAllProductsByCategory = async (
  productCategoryId: number,
  orgId: number
) => {
  return actionWrapper<Product[]>(async (prisma) => {
    const products = await prisma.product.findMany({
      where: { productCategoryId, orgId },
    })
    if (products) return products
    throw new Error("products not found")
  })
}
