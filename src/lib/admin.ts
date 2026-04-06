import { auth } from './auth';

function getAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return getAdminEmails().includes(email.toLowerCase());
}

export function getAdminEmailsList(): string[] {
  return getAdminEmails();
}

export async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error('Authentication required');
  }

  if (!isAdminEmail(session.user.email)) {
    throw new Error('Admin access required');
  }

  return session;
}
