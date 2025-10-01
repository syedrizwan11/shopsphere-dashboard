import { Transaction } from "@prisma/client"

export type EnrichedTransaction = Transaction & {
  productName?: string
  productImage?: string
}
