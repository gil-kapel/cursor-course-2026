'use client';

import { useState, useCallback } from 'react';
import NavBar from './sections/NavBar';
import HeroSection from './sections/HeroSection';
import SyllabusBento from './sections/SyllabusBento';
import ToolsMarquee from './sections/ToolsMarquee';
import CtaSection from './sections/CtaSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';
import CheckoutDrawer from '@/components/checkout/CheckoutDrawer';
import Toast from '@/components/checkout/Toast';
import { useCheckoutDrawer } from '@/hooks/useCheckoutDrawer';
import type { PlanId } from '@/lib/checkout';

interface CheckoutUser {
  id?: string;
  name?: string | null;
  email?: string | null;
}

interface LandingPageProps {
  user?: CheckoutUser | null;
  initialCheckoutStep?: string | null;
}

export default function LandingPage({ user = null, initialCheckoutStep = null }: LandingPageProps) {
  const drawer = useCheckoutDrawer({ user, initialCheckoutStep });
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  const handleSelectPlan = useCallback(
    (plan: PlanId) => {
      drawer.openDrawer(plan);
    },
    [drawer],
  );

  const handleShowToast = useCallback((message: string) => {
    setToast({ message, visible: true });
  }, []);

  const handleDismissToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F7]" dir="rtl" lang="he">
      <NavBar />
      <main>
        <HeroSection />
        <ToolsMarquee />
        <SyllabusBento />
        <TestimonialSection />
        <CtaSection onSelectPlan={handleSelectPlan} />
      </main>
      <FooterSection />

      <CheckoutDrawer
        isOpen={drawer.isOpen}
        step={drawer.step}
        selectedPlan={drawer.selectedPlan}
        user={user}
        onClose={drawer.closeDrawer}
        onGoToStep={drawer.goToStep}
        onShowToast={handleShowToast}
      />

      <Toast
        message={toast.message}
        visible={toast.visible}
        onDismiss={handleDismissToast}
      />
    </div>
  );
}
