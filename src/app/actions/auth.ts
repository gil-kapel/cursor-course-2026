'use server';

import { signIn, signOut } from '@/lib/auth';

export async function signInWithGoogle(redirectTo: string) {
  await signIn('google', { redirectTo });
}

export async function signOutUser() {
  await signOut({ redirectTo: '/' });
}
