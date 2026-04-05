import { getPrisma } from './db';
import { isLocalDevBypassEnabled } from './dev-mode';

export type AccessLevel = 'full' | 'preview' | 'locked';

/**
 * Checks whether a user has access to a specific lesson.
 *
 * Resolution order:
 * 1. If no userId is provided, fall back to the lesson's static `status` field.
 * 2. A direct entitlement for the exact lessonId.
 * 3. A module-level entitlement (e.g. "mod-01") covering all lessons in that module.
 * 4. A course-level entitlement (resourceId = "*") granting full access.
 * 5. An active subscription with a plan that covers the full course.
 *
 * Returns 'full' if any condition matches, otherwise 'locked'.
 * ('preview' can be layered in later for partial content gating.)
 */
export async function canAccessLesson(
  userId: string | null | undefined,
  lessonId: string,
  staticStatus?: string,
): Promise<AccessLevel> {
  if (staticStatus !== 'locked') return 'full';
  if (isLocalDevBypassEnabled) return 'full';
  if (!userId) return 'locked';

  const moduleId = extractModuleId(lessonId);
  const prisma = getPrisma();

  const entitlement = await prisma.entitlement.findFirst({
    where: {
      userId,
      OR: [
        { resourceType: 'lesson', resourceId: lessonId },
        ...(moduleId ? [{ resourceType: 'module', resourceId: moduleId }] : []),
        { resourceType: 'course', resourceId: '*' },
      ],
      AND: [
        { OR: [{ expiresAt: null }, { expiresAt: { gte: new Date() } }] },
      ],
    },
    select: { id: true },
  });

  if (entitlement) return 'full';

  const activeSub = await prisma.subscription.findFirst({
    where: {
      userId,
      status: 'active',
      plan: { in: ['full_course'] },
    },
    select: { id: true },
  });

  return activeSub ? 'full' : 'locked';
}

/** Extracts the module portion from a lesson ID like "lesson-2.3" → "mod-02". */
function extractModuleId(lessonId: string): string | null {
  const match = lessonId.match(/^lesson-(\d+)\./);
  if (!match) return null;
  return `mod-${match[1].padStart(2, '0')}`;
}
