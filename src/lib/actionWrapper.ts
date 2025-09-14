import { PrismaClient } from "@prisma/client"
import prisma from "./prisma"
import { ApiResponse } from "@/types"

export const actionWrapper = <T>(
  action: (prisma: PrismaClient) => Promise<ApiResponse<T>>
) => {
  try {
    const result = action(prisma)
    return { success: true, data: result }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Internal Server Error",
    }
  } finally {
    prisma.$disconnect()
  }
}
