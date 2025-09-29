"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { User } from "@prisma/client"

export const getAllUsers = async (orgId: number) => {
  return actionWrapper<User[]>(async (prisma) => {
    const users = await prisma.user.findMany({ where: { orgId } })
    if (users) return users
    throw new Error("users not found")
  })
}

export const getUserById = async (id: number) => {
  return actionWrapper<User>(async (prisma) => {
    const user = await prisma.user.findUnique({ where: { id } })
    if (user) return user
    throw new Error("users not found")
  })
}
