"use server"
import { IMAGE_UPLOAD_FOLDER } from "@/constants"
import fs from "fs/promises"
import path from "path"

export const storeImages = async (files: File[]) => {
  const uploadDir = path.join(process.cwd(), `public/${IMAGE_UPLOAD_FOLDER}`)

  await fs.mkdir(uploadDir, { recursive: true })

  const urls: string[] = []
  for (const file of files) {
    const bytes = Buffer.from(await file.arrayBuffer())
    const fileName = `${Date.now()}-${file.name}`
    const filePath = path.join(uploadDir, fileName)
    await fs.writeFile(filePath, bytes)

    urls.push(`/${IMAGE_UPLOAD_FOLDER}/${fileName}`)
  }

  return urls
}
