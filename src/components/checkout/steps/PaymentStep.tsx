'use client';

import { Lock } from 'lucide-react';
import CheckoutPlanSummary from '../CheckoutPlanSummary';
import PaymentForm from './PaymentForm';
import type { PlanId } from '@/lib/checkout';
import { CHECKOUT_PLANS } from '@/lib/checkout';

interface PaymentStepProps {
  planId: PlanId;
  user: { id?: string; name?: string | null; email?: string | null } | null | undefined;
  onSuccess: () => void;
}

export default function PaymentStep({ planId, user, onSuccess }: PaymentStepProps) {
  const plan = CHECKOUT_PLANS[planId];

  return (
    <div className="p-5 space-y-5">
      <CheckoutPlanSummary planId={planId} showHighlights />

      <PaymentForm
        plan={planId}
        userId={user?.id ?? ''}
        userEmail={user?.email ?? ''}
        onSuccess={onSuccess}
        onError={() => {}}
      />

      {/* Trust microcopy */}
      <div className="flex items-center justify-center gap-2 pt-2">
        <Lock className="w-3.5 h-3.5 text-[#BDBDCB]" strokeWidth={2} />
        <p className="text-[0.6875rem] text-[#BDBDCB]">
          תשלום מאובטח ומוצפן.
          {plan.id === 'monthly' && ' ביטול בכל עת.'}
        </p>
      </div>
    </div>
  );
}
