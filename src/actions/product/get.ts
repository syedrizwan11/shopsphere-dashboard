"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Product } from "@prisma/client"

export const getAllProductsByCategory = async (productCategoryName: string) => {
  return actionWrapper<Product[]>(async (prisma) => {
    const orgId = 1
    if (!productCategoryName || !orgId) {
      throw new Error("Invalid filters")
    }
    const products = await prisma.product.findMany({
      where: { productCategory: { name: productCategoryName }, orgId },
    })
    if (products) return products
    throw new Error("products not found")
  })
}

export const getProductById = async (id: number) => {
  return actionWrapper<Product>(async (prisma) => {
    const product = await prisma.product.findUnique({
      where: { id },
    })
    if (product) return product
    throw new Error("product not found")
  })
}
