'use client';

interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/30"
      onClick={onClose}
      dir="rtl"
    >
      <div
        className="absolute bottom-0 inset-x-0 bg-white rounded-t-2xl p-4 pb-8 animate-slide-up max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-[#E8E8ED] rounded-full mx-auto mb-4" />
        {children}
      </div>
    </div>
  );
}
