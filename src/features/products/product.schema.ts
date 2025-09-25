import z from "zod"

export const AvailabilityStatusEnum = z.enum(["AVAILABLE", "OUT_OF_STOCK"])

export const productSchema = z.object({
  name: z.string("Required Field").min(3, "At least 3 characters required"),
  price: z.number().int().nonnegative("Price must be 0 or greater"),
  quantity: z.number().int().nonnegative("Quantity must be 0 or greater"),
  status: AvailabilityStatusEnum,
  description: z.string().min(1, "Description is required"),
  category: z.string(),
  images: z
    .array(z.union([z.instanceof(File), z.string()]))
    .min(1, "At least one image is required"),
})
