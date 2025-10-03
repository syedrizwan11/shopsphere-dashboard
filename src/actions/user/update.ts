"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { User } from "@prisma/client"

export const updateUser = async (data: {
  id: number
  name: string
  email: string
  contact: string
  address: string
}) => {
  return actionWrapper<User>(async (prisma) => {
    const { id, ...userData } = data
    const userUpdated = await prisma.user.update({
      where: { id },
      data: {
        ...userData,
      },
    })
    if (!userUpdated) throw new Error("could not update this product")
    return userUpdated
  })
}
