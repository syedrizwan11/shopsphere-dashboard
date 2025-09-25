"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { ProductCategory } from "@prisma/client"

export const getAllProductCategories = async () => {
  const orgId = 1
  return actionWrapper<ProductCategory[]>(async (prisma) => {
    const productCategories = await prisma.productCategory.findMany({
      where: { orgId },
    })
    if (productCategories) return productCategories
    throw new Error("products not found")
  })
}
