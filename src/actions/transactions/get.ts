"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { EnrichedTransaction } from "@/types/transaction"
import { Transaction } from "@prisma/client"

export const getAllTransactions = async () => {
  return actionWrapper<EnrichedTransaction[]>(async (prisma) => {
    const orgId = 1
    const transactions = await prisma.transaction.findMany({
      where: { orgId },
      include: {
        product: { select: { name: true, images: true } },
      },
    })
    const flattenedTransactions = transactions.map(({ product, ...trx }) => ({
      ...trx,
      productName: product?.name ?? null,
      productImage: product?.images[0] ?? null,
    }))
    if (transactions) return flattenedTransactions
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
