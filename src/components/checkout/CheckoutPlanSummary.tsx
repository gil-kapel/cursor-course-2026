'use client';

import { Crown, Zap, Check } from 'lucide-react';
import type { PlanId } from '@/lib/checkout';
import { CHECKOUT_PLANS } from '@/lib/checkout';

interface CheckoutPlanSummaryProps {
  planId: PlanId;
  showHighlights?: boolean;
}

export default function CheckoutPlanSummary({ planId, showHighlights }: CheckoutPlanSummaryProps) {
  const plan = CHECKOUT_PLANS[planId];
  const Icon = planId === 'one_time' ? Crown : Zap;

  return (
    <div className="rounded-xl bg-[#F5F5F7] border border-[#EDEDF0] p-4 space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-white border border-[#EDEDF0] flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-[#69ADFF]" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#303150]">{plan.name}</p>
          <p className="text-xs text-[#7E7F90]">{plan.priceDisplay}</p>
        </div>
      </div>

      {showHighlights && (
        <ul className="space-y-1.5 pt-1">
          {plan.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#0DBACC] shrink-0" strokeWidth={2.5} />
              <span className="text-xs text-[#7E7F90]">{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
