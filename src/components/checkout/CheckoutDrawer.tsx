'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { springSmooth, easeFade } from '@/components/landing/motion';
import type { CheckoutStep } from '@/hooks/useCheckoutDrawer';
import type { PlanId } from '@/lib/checkout';
import AuthStep from './steps/AuthStep';
import PaymentStep from './steps/PaymentStep';
import SuccessStep from './steps/SuccessStep';

interface CheckoutDrawerProps {
  isOpen: boolean;
  step: CheckoutStep;
  selectedPlan: PlanId | null;
  user: { id?: string; name?: string | null; email?: string | null } | null | undefined;
  onClose: () => void;
  onGoToStep: (step: CheckoutStep) => void;
  onShowToast: (message: string) => void;
}

export default function CheckoutDrawer({
  isOpen,
  step,
  selectedPlan,
  user,
  onClose,
  onGoToStep,
  onShowToast,
}: CheckoutDrawerProps) {
  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && selectedPlan && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={springSmooth}
            className="fixed inset-y-0 left-0 z-50 w-full md:w-[480px] max-w-full bg-white shadow-xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-drawer-title"
            dir="rtl"
            lang="he"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F7F7F8]">
              <h2
                id="checkout-drawer-title"
                className="text-[1rem] font-bold text-[#303150]"
              >
                {step === 'auth' && 'התחברות'}
                {step === 'payment' && 'תשלום'}
                {step === 'success' && 'סיימנו!'}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg text-[#7E7F90] hover:bg-[#F7F7F8] transition-colors cursor-pointer"
                aria-label="סגור"
              >
                <X className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            {/* Step content */}
            <div className="flex-1 overflow-y-auto scrollbar-ghost">
              <AnimatePresence mode="wait">
                {step === 'auth' && (
                  <motion.div
                    key="auth"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={easeFade}
                  >
                    <AuthStep planId={selectedPlan} />
                  </motion.div>
                )}
                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={easeFade}
                  >
                    <PaymentStep
                      planId={selectedPlan}
                      user={user}
                      onSuccess={() => onGoToStep('success')}
                    />
                  </motion.div>
                )}
                {step === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={easeFade}
                  >
                    <SuccessStep
                      onClose={onClose}
                      onShowToast={onShowToast}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
