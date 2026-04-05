'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';
import CheckoutPlanSummary from '../CheckoutPlanSummary';
import { signInWithGoogle } from '@/app/actions/auth';
import { SESSION_STORAGE_KEY } from '@/lib/checkout';
import type { PlanId } from '@/lib/checkout';

interface AuthStepProps {
  planId: PlanId;
}

export default function AuthStep({ planId }: AuthStepProps) {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify({ plan: planId }),
      );
      await signInWithGoogle('/?checkout=payment');
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-[#303150]">
          מעולה, רק נחבר את החשבון
        </h3>
        <p className="text-sm text-[#7E7F90] leading-relaxed">
          כדי לשמור את ההתקדמות שלך בקורס, צריך חיבור מהיר עם Google.
        </p>
      </div>

      <CheckoutPlanSummary planId={planId} />

      <form action={handleSignIn}>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-3.5 rounded-xl border border-[#E8E8ED] bg-white hover:bg-[#F7F7F8] transition-colors text-sm font-semibold text-[#303150] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-[#7E7F90]" />
          ) : (
            <>
              <GoogleIcon />
              <span>המשך עם Google</span>
            </>
          )}
        </button>
      </form>

      <p className="text-[0.6875rem] text-[#BDBDCB] text-center leading-relaxed">
        בהתחברות אתם מאשרים שמירת כתובת האימייל וההתקדמות בקורס.
      </p>
    </div>
  );
}
