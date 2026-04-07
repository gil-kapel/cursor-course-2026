import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { isLocalDevDbDisabled, LOCAL_DEV_DISABLE_DB_ENV_VAR } from './dev-mode';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set');
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export function getPrisma() {
  if (isLocalDevDbDisabled) {
    throw new Error(`Prisma is disabled while ${LOCAL_DEV_DISABLE_DB_ENV_VAR}=true`);
  }

  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const prisma = createPrismaClient();
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
  return prisma;
}
