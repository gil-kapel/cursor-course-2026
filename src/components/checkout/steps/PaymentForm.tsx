'use client';

import { useState } from 'react';
import { Loader2, CreditCard, Smartphone } from 'lucide-react';
import type { PlanId } from '@/lib/checkout';
import { CHECKOUT_PLANS } from '@/lib/checkout';

export interface PaymentFormProps {
  plan: PlanId;
  userId: string;
  userEmail: string;
  onSuccess: () => void;
  onError: (error: string) => void;
}

/**
 * Placeholder payment form.
 * Replace this file with a real Stripe/Paddle integration
 * when the payment provider is chosen.
 */
export default function PaymentForm({
  plan,
  onSuccess,
  onError,
}: PaymentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const planData = CHECKOUT_PLANS[plan];

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Replace with real payment API call
      // const res = await fetch('/api/checkout/create-session', {
      //   method: 'POST',
      //   body: JSON.stringify({ plan }),
      // });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onSuccess();
    } catch {
      const msg = 'אירעה שגיאה בתשלום. נסו שוב.';
      setError(msg);
      onError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      {/* Quick pay buttons */}
      <div className="space-y-2.5">
        <p className="text-xs font-bold text-[#7E7F90] uppercase tracking-wider">
          תשלום מהיר
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E8E8ED] bg-[#F7F7F8] text-sm font-semibold text-[#BDBDCB] cursor-not-allowed"
          >
            <Smartphone className="w-4 h-4" strokeWidth={1.75} />
            Apple Pay
          </button>
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#E8E8ED] bg-[#F7F7F8] text-sm font-semibold text-[#BDBDCB] cursor-not-allowed"
          >
            <Smartphone className="w-4 h-4" strokeWidth={1.75} />
            Google Pay
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-[#EDEDF0]" />
        <span className="text-xs text-[#BDBDCB]">או כרטיס אשראי</span>
        <div className="flex-1 h-px bg-[#EDEDF0]" />
      </div>

      {/* Credit card fields placeholder */}
      <div className="space-y-3">
        <div className="relative">
          <div className="flex items-center gap-2 px-4 py-3.5 rounded-xl border border-[#E8E8ED] bg-[#F7F7F8]">
            <CreditCard className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
            <span className="text-sm text-[#BDBDCB]">מספר כרטיס</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="px-4 py-3.5 rounded-xl border border-[#E8E8ED] bg-[#F7F7F8]">
            <span className="text-sm text-[#BDBDCB]">MM / YY</span>
          </div>
          <div className="px-4 py-3.5 rounded-xl border border-[#E8E8ED] bg-[#F7F7F8]">
            <span className="text-sm text-[#BDBDCB]">CVV</span>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#303150] text-white font-bold text-sm transition-all duration-200 hover:bg-[#3D3D5C] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          `שלמו ${planData.price}`
        )}
      </button>
    </div>
  );
}
