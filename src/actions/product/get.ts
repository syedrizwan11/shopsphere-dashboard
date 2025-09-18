"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Product } from "@prisma/client"

export const getAllProductsByCategory = async (
  productCategoryName: string,
  orgId: number
) => {
  return actionWrapper<Product[]>(async (prisma) => {
    const products = await prisma.product.findMany({
      where: { productCategory: { name: productCategoryName }, orgId },
    })
    if (products) return products
    throw new Error("products not found")
  })
}
