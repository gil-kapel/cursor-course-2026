'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface SuccessStepProps {
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export default function SuccessStep({ onClose, onShowToast }: SuccessStepProps) {
  const router = useRouter();

  useEffect(() => {
    onShowToast('התשלום התקבל, חשבונית בדרך למייל. שנתחיל?');

    const timer = setTimeout(() => {
      onClose();
      router.push('/course');
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose, onShowToast, router]);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 space-y-5">
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-[#0DBACC]/12 flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 400, delay: 0.3 }}
        >
          <Check className="w-10 h-10 text-[#0DBACC]" strokeWidth={2.5} />
        </motion.div>
      </motion.div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-[#303150]">התשלום הצליח!</h3>
        <p className="text-sm text-[#7E7F90]">הקורס מחכה לכם, מעבירים אתכם לשיעור הראשון...</p>
      </div>
    </div>
  );
}
