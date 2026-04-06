'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import BottomSheet from './BottomSheet';
import {
  PRIORITY_COLORS,
  PRIORITY_LABELS,
  AdminTaskPriority,
} from '@/types/admin-roadmap';

interface PriorityBadgeProps {
  priority: AdminTaskPriority;
  isMobile?: boolean;
  onChange?: (priority: AdminTaskPriority) => void;
}

const ALL_PRIORITIES = Object.values(AdminTaskPriority) as AdminTaskPriority[];

export default function PriorityBadge({ priority, isMobile = false, onChange }: PriorityBadgeProps) {
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

  const handleSelect = (p: AdminTaskPriority) => {
    if (p !== priority) onChange?.(p);
    setIsOpen(false);
  };

  const dropdownContent = (
    <>
      {ALL_PRIORITIES.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => handleSelect(p)}
          className="w-full px-2 py-2.5 md:py-1.5 flex items-center gap-2 hover:bg-[#F7F7F8] transition-colors"
        >
          <div
            className="flex-1 h-9 md:h-7 rounded-md flex items-center justify-center text-sm md:text-xs font-medium text-white"
            style={{ backgroundColor: PRIORITY_COLORS[p] }}
          >
            {PRIORITY_LABELS[p]}
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
          backgroundColor: PRIORITY_COLORS[priority],
          cursor: onChange ? 'pointer' : 'default',
        }}
      >
        {PRIORITY_LABELS[priority]}
      </button>

      {isMobile ? (
        <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
          <p className="text-sm font-semibold text-[#303150] mb-2 px-1">עדיפות</p>
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
