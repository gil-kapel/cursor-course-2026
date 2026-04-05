import { auth, signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect('/course');

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F8]" dir="rtl" lang="he">
      <div className="w-full max-w-sm mx-4">
        <div className="bg-white rounded-2xl shadow-sm border border-[#F7F7F8] p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-xl font-bold text-[#303150]">קורס Cursor</h1>
            <p className="text-[0.8125rem] text-[#7E7F90] mt-1">
              התחברו כדי לשמור התקדמות
            </p>
          </div>

          {/* Google sign-in */}
          <form
            action={async () => {
              'use server';
              await signIn('google', { redirectTo: '/course' });
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-[#E8E8ED] bg-white hover:bg-[#F7F7F8] transition-colors text-[0.875rem] font-semibold text-[#303150] cursor-pointer"
            >
              <GoogleIcon />
              <span>התחברות עם Google</span>
            </button>
          </form>

          <p className="text-[0.6875rem] text-[#BDBDCB] text-center mt-6 leading-relaxed">
            בהתחברות אתם מאשרים שמירת כתובת האימייל וההתקדמות בקורס.
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 2.58 9 2.58Z" fill="#EA4335" />
    </svg>
  );
}
