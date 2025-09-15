import { AvailabilityStatus } from "@prisma/client"

export enum ProductAvailabilityStatus {
  AVAILABLE = "Available",
  OUT_OF_STOCK = "Out Of Stock",
}
export type ProductType = {
  id: number
  name: string
  price: number
  quantity: number
  status: AvailabilityStatus
  description: string
  images: string[]
  productCategoryId: number
  orgId: number
}
