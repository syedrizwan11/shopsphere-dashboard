import { Role } from "@prisma/client"
import z from "zod"

export const CustomerRole = z.enum(Object.values(Role))
export const customerSchema = z.object({
  name: z.string("Required Field").min(3, "At least 3 characters required"),
  email: z.email("Must Be An Email").min(1, "Write Your Email"),
  contact: z
    .string()
    .regex(
      /^[1-9]\d{1,14}$/,
      "Must be a valid phone number in E.164 format without '+' (e.g. 923001234567)"
    ),
  address: z.string("Must provide an Address"),
})
