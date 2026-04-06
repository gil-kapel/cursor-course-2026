'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import BottomSheet from './BottomSheet';
import {
  STATUS_COLORS,
  STATUS_LABELS,
  AdminTaskStatus,
} from '@/types/admin-roadmap';

interface StatusBadgeProps {
  status: AdminTaskStatus;
  isMobile?: boolean;
  onChange?: (status: AdminTaskStatus) => void;
}

const ALL_STATUSES = Object.values(AdminTaskStatus) as AdminTaskStatus[];

export default function StatusBadge({ status, isMobile = false, onChange }: StatusBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 4,
      right: window.innerWidth - rect.right,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (!isOpen || isMobile) return;
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, isMobile, updatePosition]);

  useEffect(() => {
    if (!isOpen || isMobile) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isMobile]);

  const handleSelect = (s: AdminTaskStatus) => {
    if (s !== status) onChange?.(s);
    setIsOpen(false);
  };

  const dropdownContent = (
    <>
      {ALL_STATUSES.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => handleSelect(s)}
          className="w-full px-2 py-2.5 md:py-1.5 flex items-center gap-2 hover:bg-[#F7F7F8] transition-colors"
        >
          <div
            className="flex-1 h-9 md:h-7 rounded-md flex items-center justify-center text-sm md:text-xs font-medium text-white"
            style={{ backgroundColor: STATUS_COLORS[s] }}
          >
            {STATUS_LABELS[s]}
          </div>
        </button>
      ))}
    </>
  );

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => onChange && setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full min-h-[44px] md:min-h-0 md:h-9 rounded-lg text-sm font-medium text-white select-none transition-opacity hover:opacity-90"
        style={{
          backgroundColor: STATUS_COLORS[status],
          cursor: onChange ? 'pointer' : 'default',
        }}
      >
        {STATUS_LABELS[status]}
      </button>

      {isMobile ? (
        <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-sm font-semibold text-[#303150] mb-2 px-1">סטטוס</p>
          {dropdownContent}
        </BottomSheet>
      ) : (
        isOpen && mounted && createPortal(
          <div
            ref={dropdownRef}
            className="fixed z-[10000] bg-white rounded-xl overflow-hidden py-1"
            style={{
              top: position.top,
              right: position.right,
              width: position.width,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
              border: '1px solid #F7F7F8',
            }}
            dir="rtl"
          >
            {dropdownContent}
          </div>,
          document.body,
        )
      )}
    </>
  );
}
