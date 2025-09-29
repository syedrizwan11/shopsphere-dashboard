"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { Transaction } from "@prisma/client"

export const deleteTransaction = async (id: number) => {
  return actionWrapper<Transaction>(async (prisma) => {
    const transactionDeleted = await prisma.transaction.delete({
      where: { id },
    })
    if (!transactionDeleted)
      throw new Error("Error in Deleting this transaction")
    return transactionDeleted
  })
}
