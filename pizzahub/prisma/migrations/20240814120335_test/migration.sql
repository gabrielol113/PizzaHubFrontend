/*
  Warnings:

  - The `expires_at` column on the `Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "expires_at",
ADD COLUMN     "expires_at" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "role",
ALTER COLUMN "emailVerified" DROP NOT NULL;

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);
