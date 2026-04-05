'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { type PlanId, SESSION_STORAGE_KEY, CHECKOUT_PLANS } from '@/lib/checkout';

export type CheckoutStep = 'auth' | 'payment' | 'success';

interface CheckoutDrawerState {
  isOpen: boolean;
  step: CheckoutStep;
  selectedPlan: PlanId | null;
}

interface UseCheckoutDrawerOptions {
  user: { id?: string; email?: string | null } | null | undefined;
  initialCheckoutStep?: string | null;
}

export function useCheckoutDrawer({ user, initialCheckoutStep }: UseCheckoutDrawerOptions) {
  const router = useRouter();
  const [state, setState] = useState<CheckoutDrawerState>({
    isOpen: false,
    step: 'auth',
    selectedPlan: null,
  });

  // Restore drawer after OAuth redirect
  useEffect(() => {
    if (initialCheckoutStep === 'payment' && user) {
      try {
        const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (raw) {
          const { plan } = JSON.parse(raw) as { plan: PlanId };
          if (plan in CHECKOUT_PLANS) {
            setState({ isOpen: true, step: 'payment', selectedPlan: plan });
          }
          sessionStorage.removeItem(SESSION_STORAGE_KEY);
        }
      } catch {
        // Ignore malformed sessionStorage
      }
      router.replace('/', { scroll: false });
    }
  }, [initialCheckoutStep, user, router]);

  const openDrawer = useCallback(
    (plan: PlanId) => {
      const step: CheckoutStep = user ? 'payment' : 'auth';
      setState({ isOpen: true, step, selectedPlan: plan });
    },
    [user],
  );

  const closeDrawer = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const goToStep = useCallback((step: CheckoutStep) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  return { ...state, openDrawer, closeDrawer, goToStep };
}
