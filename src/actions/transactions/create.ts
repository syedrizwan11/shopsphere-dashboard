"use server"
import { actionWrapper } from "@/lib/actionWrapper"
import { FulfillmentStatus, PaymentStatus, Transaction } from "@prisma/client"

export const createUser = async (data: {
  productId: number
  userId: number
  price: number
  paymentStatus: PaymentStatus
  fulfillmentStatus: FulfillmentStatus
}) => {
  return actionWrapper<Transaction>(async (prisma) => {
    const orgId = 1
    const transactionCreated = await prisma.transaction.create({
      data: { ...data, orgId },
    })
    if (!transactionCreated)
      throw new Error("could not create this Transaction")
    return transactionCreated
  })
}
