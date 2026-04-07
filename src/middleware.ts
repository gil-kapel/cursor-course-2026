import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isLocalDevGoogleAuthDisabled } from './lib/dev-mode';

export async function middleware(req: NextRequest) {
  // For database-session auth, the real admin check happens server-side
  // in the admin layout (requireAdmin) and in each server action.
  // This middleware ensures there's at least a session cookie present
  // before hitting the admin pages.
  if (isLocalDevGoogleAuthDisabled) {
    return NextResponse.next();
  }

  const sessionCookie = req.cookies.get('authjs.session-token') ?? req.cookies.get('__Secure-authjs.session-token');

  if (!sessionCookie) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
