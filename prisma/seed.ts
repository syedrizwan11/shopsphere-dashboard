import prisma from "../src/lib/prisma.ts"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filePath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filePath)

const models = {
  organization: prisma.organization,
  user: prisma.user,
}

const main = async () => {
  const dataDirectory = path.join(__dirname, "seedData")
  const orderedModelNames = Object.keys(models)

  for (const modelName of orderedModelNames) {
    const filepath = path.join(dataDirectory, modelName + ".json")
    const fileData = JSON.parse(fs.readFileSync(filepath, "utf-8"))
    const model = models[modelName]

    await model.createMany({ data: fileData, skipDuplicates: true })
    console.log("seeded ", modelName)
  }
}
main()
  .then(() => {
    console.log("data seeded")
  })
  .catch((err) => console.log(err))
