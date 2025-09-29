"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Transaction } from "@prisma/client"

export const getAllTransactions = async () => {
  return actionWrapper<Transaction[]>(async (prisma) => {
    const orgId = 1
    const transactions = await prisma.transaction.findMany({ where: { orgId } })
    if (transactions) return transactions
    throw new Error("transactions not found")
  })
}

export const getTransactionById = async (id: number) => {
  return actionWrapper<Transaction>(async (prisma) => {
    const transaction = await prisma.transaction.findUnique({ where: { id } })
    if (transaction) return transaction
    throw new Error("users not found")
  })
}
