import { PrismaClient } from "@prisma/client"
import prisma from "./prisma"
import { ApiResponse } from "@/types"

export const actionWrapper = async <T>(
  action: (prisma: PrismaClient) => Promise<T>
): Promise<ApiResponse<T>> => {
  try {
    const data = await action(prisma)
    return { success: true, data }
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
