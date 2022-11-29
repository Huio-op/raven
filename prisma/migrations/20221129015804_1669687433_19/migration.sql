-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_parentPostId_fkey";

-- AlterTable
ALTER TABLE "post" ALTER COLUMN "parentPostId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_parentPostId_fkey" FOREIGN KEY ("parentPostId") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
