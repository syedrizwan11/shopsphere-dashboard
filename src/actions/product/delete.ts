"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Product } from "@prisma/client"

export const deleteProduct = async (id: number) => {
  return actionWrapper<Product>(async (prisma) => {
    const productDeleted = await prisma.product.delete({
      where: { id },
      include: { productCategory: { select: { name: true } } },
    })
    if (!productDeleted) throw new Error("could not delete this product")
    // revalidatePath(`/products/${productDeleted.productCategory.name}`, "page")
    return productDeleted
  })
}
