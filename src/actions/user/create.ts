"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { User } from "@prisma/client"

export const createUser = async (data: {
  name: string
  email: string
  contact: string
  address: string
}) => {
  return actionWrapper<User>(async (prisma) => {
    const orgId = 1
    const userCreated = await prisma.user.create({
      data: { ...data, orgId },
    })
    if (!userCreated) throw new Error("could not create this product")
    // revalidatePath(`/products/${productDeleted.productCategory.name}`, "page")
    return userCreated
  })
}
