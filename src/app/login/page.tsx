import { auth, signIn } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { GraduationCap } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';

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
