"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { User } from "@prisma/client"

export const deleteUser = async (id: number) => {
  return actionWrapper<User>(async (prisma) => {
    const userDeleted = await prisma.user.delete({
      where: { id },
    })
    if (!userDeleted) throw new Error("Error in Deleting this User")
    return userDeleted
  })
}
