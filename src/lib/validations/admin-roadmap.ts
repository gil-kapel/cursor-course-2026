import { z } from 'zod';

const adminTaskStatusEnum = z.enum(['WORKING_ON_IT', 'DONE', 'STUCK', 'NOT_STARTED']);
const adminTaskPriorityEnum = z.enum(['HIGH', 'MEDIUM', 'LOW']);
const isoDate = z.string().datetime({ offset: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}/));

export const createAdminTaskSchema = z.object({
  groupId: z.string().cuid('Invalid group ID'),
  parentId: z.string().cuid('Invalid parent ID').nullable().optional(),
  title: z.string().min(1).max(200),
  ownerId: z.string().max(100).optional(),
  status: adminTaskStatusEnum.default('NOT_STARTED'),
  priority: adminTaskPriorityEnum.default('MEDIUM'),
  startDate: isoDate.optional(),
  endDate: isoDate.optional(),
});

export const updateAdminTaskSchema = z.object({
  groupId: z.string().cuid('Invalid group ID').optional(),
  parentId: z.string().cuid('Invalid parent ID').nullable().optional(),
  title: z.string().min(1).max(200).optional(),
  ownerId: z.string().max(100).nullable().optional(),
  status: adminTaskStatusEnum.optional(),
  priority: adminTaskPriorityEnum.optional(),
  startDate: isoDate.nullable().optional(),
  endDate: isoDate.nullable().optional(),
  orderIndex: z.number().int().min(0).optional(),
});

export const createAdminTaskGroupSchema = z.object({
  title: z.string().min(1).max(100),
  color: z.string().max(30),
});

export const updateAdminTaskGroupSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  color: z.string().max(30).optional(),
});

export const updateAdminTaskGroupOrderSchema = z.array(
  z.object({
    id: z.string().cuid('Invalid group ID'),
    orderIndex: z.number().int().min(0),
  })
).min(1, 'At least one group required');

export const updateAdminTaskOrderSchema = z.array(
  z.object({
    id: z.string(),
    orderIndex: z.number().int().min(0),
    groupId: z.string().optional(),
    parentId: z.string().nullable().optional(),
  })
).min(1);
