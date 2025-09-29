/*
  Warnings:

  - A unique constraint covering the columns `[orgId,name]` on the table `ProductCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PAID', 'UNPAID');

-- CreateEnum
CREATE TYPE "public"."FulfillmentStatus" AS ENUM ('COMPLETED', 'SHIPPING', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."Transaction" (
    "id" SERIAL NOT NULL,
    "transactionId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "orgId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "paymentStatus" "public"."PaymentStatus" NOT NULL,
    "fulfillmentStatus" "public"."FulfillmentStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transactionId_key" ON "public"."Transaction"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductCategory_orgId_name_key" ON "public"."ProductCategory"("orgId", "name");

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transaction" ADD CONSTRAINT "Transaction_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."Organization"("OrganizationId") ON DELETE RESTRICT ON UPDATE CASCADE;
