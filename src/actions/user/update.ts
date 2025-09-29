"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Role, User } from "@prisma/client"

export const updateUser = async (data: {
  id: number
  name: string
  email: string
  role: Role
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
