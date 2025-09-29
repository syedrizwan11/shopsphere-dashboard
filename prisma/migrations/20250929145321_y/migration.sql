/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Transaction_transactionId_key";

-- AlterTable
ALTER TABLE "public"."Transaction" DROP COLUMN "transactionId";
