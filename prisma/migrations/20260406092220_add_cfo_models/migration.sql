-- CreateEnum
CREATE TYPE "FinanceRecordType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "BillingCycle" AS ENUM ('MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('ACTIVE', 'REVIEWING', 'CANCELED');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('COMPLETED', 'PENDING');

-- CreateTable
CREATE TABLE "AdminSubscription" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "FinanceRecordType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'ILS',
    "category" TEXT,
    "billingCycle" "BillingCycle" NOT NULL DEFAULT 'MONTHLY',
    "nextBillingDate" TIMESTAMP(3) NOT NULL,
    "status" "SubscriptionStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminTransaction" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "FinanceRecordType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'ILS',
    "category" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'COMPLETED',
    "receiptUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminSubscription_type_idx" ON "AdminSubscription"("type");

-- CreateIndex
CREATE INDEX "AdminSubscription_status_idx" ON "AdminSubscription"("status");

-- CreateIndex
CREATE INDEX "AdminSubscription_billingCycle_idx" ON "AdminSubscription"("billingCycle");

-- CreateIndex
CREATE INDEX "AdminSubscription_nextBillingDate_idx" ON "AdminSubscription"("nextBillingDate");

-- CreateIndex
CREATE INDEX "AdminTransaction_type_idx" ON "AdminTransaction"("type");

-- CreateIndex
CREATE INDEX "AdminTransaction_status_idx" ON "AdminTransaction"("status");

-- CreateIndex
CREATE INDEX "AdminTransaction_date_idx" ON "AdminTransaction"("date");
