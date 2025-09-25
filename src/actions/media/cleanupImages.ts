"use server"

import fs from "fs/promises"
import path from "path"

export const cleanupImages = async (fileNames: string[]) => {
  const uploadDir = path.join(process.cwd(), `public`)

  for (const fileName of fileNames) {
    const filePath = path.join(uploadDir, fileName)
    try {
      await fs.unlink(filePath)
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        console.log("file already missing", filePath)
      } else throw error
    }
  }
}
