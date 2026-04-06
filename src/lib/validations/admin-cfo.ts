import { z } from 'zod';

const financeRecordTypeEnum = z.enum(['INCOME', 'EXPENSE']);
const billingCycleEnum = z.enum(['MONTHLY', 'YEARLY']);
const subscriptionStatusEnum = z.enum(['ACTIVE', 'REVIEWING', 'CANCELED']);
const transactionStatusEnum = z.enum(['COMPLETED', 'PENDING']);
const nonNegativeAmount = z.number().nonnegative('Amount must be non-negative');
const currencyCode = z.string().max(10).default('ILS');
const isoDate = z.string().datetime({ offset: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}/));

export const createAdminSubscriptionSchema = z.object({
  title: z.string().trim().min(1).max(200),
  type: financeRecordTypeEnum,
  amount: nonNegativeAmount,
  currency: currencyCode,
  category: z.string().trim().max(100).optional().default(''),
  billingCycle: billingCycleEnum,
  nextBillingDate: isoDate,
  status: subscriptionStatusEnum.default('ACTIVE'),
});

export const updateAdminSubscriptionSchema = z.object({
  title: z.string().trim().min(1).max(200).optional(),
  type: financeRecordTypeEnum.optional(),
  amount: nonNegativeAmount.optional(),
  currency: currencyCode.optional(),
  category: z.string().trim().max(100).optional(),
  billingCycle: billingCycleEnum.optional(),
  nextBillingDate: isoDate.optional(),
  status: subscriptionStatusEnum.optional(),
});

export const createAdminTransactionSchema = z.object({
  title: z.string().trim().min(1).max(200),
  type: financeRecordTypeEnum,
  amount: nonNegativeAmount,
  currency: currencyCode,
  category: z.string().trim().max(100).optional().default(''),
  date: isoDate,
  status: transactionStatusEnum.default('COMPLETED'),
  receiptUrl: z.string().url('Invalid URL').max(500).optional(),
});

export const updateAdminTransactionSchema = z.object({
  title: z.string().trim().min(1).max(200).optional(),
  type: financeRecordTypeEnum.optional(),
  amount: nonNegativeAmount.optional(),
  currency: currencyCode.optional(),
  category: z.string().trim().max(100).optional(),
  date: isoDate.optional(),
  status: transactionStatusEnum.optional(),
  receiptUrl: z.string().url('Invalid URL').max(500).nullable().optional(),
});
