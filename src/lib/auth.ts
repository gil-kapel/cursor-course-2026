import NextAuth from 'next-auth';
import type { Session } from 'next-auth';
import Google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { getPrisma } from './db';
import { isLocalDevGoogleAuthDisabled, localDevSessionUser } from './dev-mode';

const localDevSession: Session = {
  user: { ...localDevSessionUser },
  expires: '9999-12-31T23:59:59.999Z',
};

const localDevHandler = async (request: Request) =>
  Response.redirect(new URL('/course', request.url), 307);

const localDevAuth = async () => localDevSession;
const localDevSignIn = async (..._args: unknown[]) => localDevSession;
const localDevSignOut = async (..._args: unknown[]) => undefined;

export const { handlers, auth, signIn, signOut } = isLocalDevGoogleAuthDisabled
  ? {
      handlers: {
        GET: localDevHandler,
        POST: localDevHandler,
      },
      auth: localDevAuth,
      signIn: localDevSignIn,
      signOut: localDevSignOut,
    }
  : NextAuth({
      adapter: PrismaAdapter(getPrisma()),
      providers: [Google],
      pages: {
        signIn: '/login',
        error: '/login',
      },
      callbacks: {
        session({ session, user }) {
          session.user.id = user.id;
          return session;
        },
      },
    });
