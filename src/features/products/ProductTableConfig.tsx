import { ColumnConfig } from "@/components/ui/datatable/useGeneratedColums"
import { cn } from "@/lib/utils"
import { ProductAvailabilityStatus } from "@/types/product"
import { Product } from "@prisma/client"
import Image from "next/image"

export const productColumnsConfig = [
  {
    key: "name",
    header: "Product",
    render: (p: Product) => (
      <div className="flex items-center gap-3">
        <Image
          src={p.images[0]}
          alt={p.name}
          width={30}
          height={30}
          className="rounded"
        />
        <div>
          <div className="text-xs text-textTertiary">ID: {p.id}</div>
          <div className="font-medium">{p.name}</div>
        </div>
      </div>
    ),
    sortable: true,
  },
  { key: "quantity", header: "Price", sortable: true },
  {
    key: "createdAt",
    header: "Date",
    render: (p: Product) => <div>{p.createdAt.toLocaleDateString()}</div>,
    sortable: true,
  },
  {
    key: "status",
    header: "Status",
    render: (p: Product) => (
      <div
        className={cn(
          "rounded-xl p-1 px-3 w-fit",
          p.status === "AVAILABLE"
            ? "bg-green-300 text-green-800"
            : "bg-red-300 text-red-700"
        )}
      >
        {ProductAvailabilityStatus[p.status]}
      </div>
    ),
  },
] satisfies ColumnConfig<Product>[]
