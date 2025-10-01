import { FulfillmentStatus, PaymentStatus } from "@prisma/client"
import z from "zod"

export const TransactionPaymentStatus = z.enum(Object.values(PaymentStatus))
export const TransactionFulfillmentStatus = z.enum(
  Object.values(FulfillmentStatus)
)
export const transactionSchema = z.object({
  productId: z.number().min(1, "Enter a Valid Id"),
  userId: z.number().min(1, "Enter a Valid Id"),
  price: z.number().min(1, "Enter a Valid Price"),
  paymentStatus: TransactionPaymentStatus,
  fulfillmentStatus: TransactionFulfillmentStatus,
})
