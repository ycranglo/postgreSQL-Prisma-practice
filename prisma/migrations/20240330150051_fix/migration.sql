/*
  Warnings:

  - You are about to drop the column `UserId` on the `Preferences` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[preferencesId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Preferences" DROP CONSTRAINT "Preferences_UserId_fkey";

-- DropIndex
DROP INDEX "Preferences_UserId_key";

-- AlterTable
ALTER TABLE "Preferences" DROP COLUMN "UserId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferencesId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_preferencesId_key" ON "User"("preferencesId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_preferencesId_fkey" FOREIGN KEY ("preferencesId") REFERENCES "Preferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
