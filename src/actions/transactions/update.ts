"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { FulfillmentStatus, PaymentStatus, Transaction } from "@prisma/client"

export const updateTransaction = async (data: {
  id: number
  price: number
  paymentStatus: PaymentStatus
  fulfillmentStatus: FulfillmentStatus
}) => {
  return actionWrapper<Transaction>(async (prisma) => {
    const { id, ...transactionData } = data
    const productUpdated = await prisma.transaction.update({
      where: { id },
      data: {
        ...transactionData,
      },
    })
    if (!productUpdated) throw new Error("could not update this transaction")
    return productUpdated
  })
}
