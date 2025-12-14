/*
  Warnings:

  - You are about to drop the `audio_project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `uploaded_voice` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "audio_project" DROP CONSTRAINT "audio_project_user_id_fkey";

-- DropForeignKey
ALTER TABLE "uploaded_voice" DROP CONSTRAINT "uploaded_voice_user_id_fkey";

-- DropTable
DROP TABLE "audio_project";

-- DropTable
DROP TABLE "uploaded_voice";

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT NOT NULL,
    "imageKitId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
