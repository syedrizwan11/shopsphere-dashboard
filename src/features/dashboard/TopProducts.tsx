"use client"
import { SummaryCardHeader } from "@/components/ui"
import { DataTable } from "@/components/ui/datatable"
import { ColumnConfig } from "@/components/ui/datatable/useGeneratedColums"
import Image from "next/image"

export type Product = {
  id: string
  name: string
  price: number
  sales: number
  status: "success" | "failed" | "pending"
  image: string
}

const products: Product[] = [
  {
    id: "prd1",
    name: "Wireless Headphones",
    price: 129,
    sales: 350,
    status: "success",
    image: "/images/shoes-1.png",
  },
  {
    id: "prd2",
    name: "Smartwatch",
    price: 199,
    sales: 210,
    status: "success",
    image: "/images/shoes-1.png",
  },
  {
    id: "prd3",
    name: "Gaming Mouse",
    price: 59,
    sales: 480,
    status: "success",
    image: "/images/shoes-1.png",
  },
  {
    id: "prd4",
    name: "4K Monitor",
    price: 399,
    sales: 95,
    status: "success",
    image: "/images/shoes-1.png",
  },
]

const productColumnsConfig = [
  {
    key: "name",
    header: "Product",
    render: (p: Product) => (
      <div className="flex items-center gap-3">
        <Image
          src={p.image}
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
  },
  { key: "price", header: "Price", sortable: true },
  { key: "sales", header: "Sales", sortable: true },
  { key: "status", header: "Status" },
] satisfies ColumnConfig<Product>[]

export const PopularProductsTable = () => {
  return (
    <DataTable
      heading={<SummaryCardHeader text="Popular Products" link="/" />}
      data={products}
      columnsConfig={productColumnsConfig}
      pageSize={5}
    />
  )
}
