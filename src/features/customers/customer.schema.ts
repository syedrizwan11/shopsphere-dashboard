import { Role } from "@prisma/client"
import z from "zod"

export const CustomerRole = z.enum(Object.values(Role))
export const customerSchema = z.object({
  name: z.string("Required Field").min(3, "At least 3 characters required"),
  email: z.email("Must Be An Email").min(1, "Write Your Email"),
  role: CustomerRole,
})
