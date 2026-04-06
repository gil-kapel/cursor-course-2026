-- CreateEnum
CREATE TYPE "AdminTaskStatus" AS ENUM ('WORKING_ON_IT', 'DONE', 'STUCK', 'NOT_STARTED');

-- CreateEnum
CREATE TYPE "AdminTaskPriority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "AdminTaskGroup" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#69ADFF',
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminTaskGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminTask" (
    "id" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,
    "parentId" TEXT,
    "title" TEXT NOT NULL,
    "ownerId" TEXT,
    "status" "AdminTaskStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "priority" "AdminTaskPriority" NOT NULL DEFAULT 'MEDIUM',
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "orderIndex" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminTask_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminTaskGroup_orderIndex_idx" ON "AdminTaskGroup"("orderIndex");

-- CreateIndex
CREATE INDEX "AdminTask_groupId_idx" ON "AdminTask"("groupId");

-- CreateIndex
CREATE INDEX "AdminTask_groupId_orderIndex_idx" ON "AdminTask"("groupId", "orderIndex");

-- CreateIndex
CREATE INDEX "AdminTask_parentId_idx" ON "AdminTask"("parentId");

-- CreateIndex
CREATE INDEX "AdminTask_groupId_parentId_orderIndex_idx" ON "AdminTask"("groupId", "parentId", "orderIndex");

-- CreateIndex
CREATE INDEX "AdminTask_status_idx" ON "AdminTask"("status");

-- CreateIndex
CREATE INDEX "AdminTask_priority_idx" ON "AdminTask"("priority");

-- AddForeignKey
ALTER TABLE "AdminTask" ADD CONSTRAINT "AdminTask_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "AdminTaskGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminTask" ADD CONSTRAINT "AdminTask_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "AdminTask"("id") ON DELETE CASCADE ON UPDATE CASCADE;
