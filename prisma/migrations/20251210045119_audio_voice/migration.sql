-- AlterTable
ALTER TABLE "users" ADD COLUMN     "credits" INTEGER NOT NULL DEFAULT 10;

-- CreateTable
CREATE TABLE "uploaded_voice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "uploaded_voice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audio_project" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "text" TEXT,
    "audio_url" TEXT NOT NULL,
    "s3Key" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "voiceS3Key" TEXT NOT NULL,
    "exaggeration" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "cfg_weight" DOUBLE PRECISION NOT NULL DEFAULT 0.5,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audio_project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "uploaded_voice" ADD CONSTRAINT "uploaded_voice_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audio_project" ADD CONSTRAINT "audio_project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
