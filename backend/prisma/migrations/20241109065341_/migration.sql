/*
  Warnings:

  - You are about to drop the column `manufactureId` on the `cars` table. All the data in the column will be lost.
  - You are about to drop the column `transmissionId` on the `cars` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_manufactureId_fkey";

-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_transmissionId_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "manufactureId",
DROP COLUMN "transmissionId";
