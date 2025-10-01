import { ColumnConfig } from "@/components/ui"
import { cn } from "@/lib/utils"
import { EnrichedTransaction } from "@/types/transaction"
import { FulfillmentStatus, PaymentStatus } from "@prisma/client"
import Image from "next/image"

export const transactionTableConfig = [
  {
    key: "id",
    header: "tx-Id",
    sortable: true,
  },
  {
    key: "productName",
    header: "Product",
    render: (tx: EnrichedTransaction) => (
      <div className="flex items-center gap-3">
        <Image
          src={tx.productImage ?? ""}
          alt={tx.productName ?? ""}
          width={30}
          height={30}
          className="rounded"
        />
        <div>
          <div className="text-xs text-textTertiary">ID: {tx.productId}</div>
          <div className="font-medium">{tx.productName}</div>
        </div>
      </div>
    ),
    sortable: true,
    canHide: true,
  },
  {
    key: "price",
    header: "Price",
    sortable: true,
    canHide: true,
  },
  {
    key: "userId",
    header: "Customer's Id",
    sortable: true,
    canHide: true,
  },
  {
    key: "paymentStatus",
    header: "Payment",
    render: (tx: EnrichedTransaction) => (
      <div
        className={cn(
          "rounded-xl p-1 px-3 w-fit capitalize",
          tx.paymentStatus === PaymentStatus.PAID
            ? "bg-lime-300 text-green-800"
            : "bg-amber-300 text-red-700"
        )}
      >
        {tx.paymentStatus.toLowerCase()}
      </div>
    ),
    sortable: true,
    canHide: true,
  },
  {
    key: "fulfillmentStatus",
    header: "Status",
    render: (tx: EnrichedTransaction) => (
      <div
        className={cn(
          "rounded-xl p-1 px-3 w-fit capitalize",
          tx.fulfillmentStatus === FulfillmentStatus.COMPLETED
            ? "bg-lime-300 text-green-800"
            : tx.fulfillmentStatus === FulfillmentStatus.SHIPPING
            ? "bg-violet-300 text-violet-800"
            : "bg-red-300 text-red-700"
        )}
      >
        {tx.fulfillmentStatus.toLowerCase()}
      </div>
    ),
    sortable: true,
    canHide: true,
  },
  {
    key: "createdAt",
    header: "Date",
    render: (tx: EnrichedTransaction) => (
      <div>{tx.createdAt.toLocaleDateString()}</div>
    ),
    sortable: true,
    canHide: true,
  },
] satisfies ColumnConfig<EnrichedTransaction>[]
