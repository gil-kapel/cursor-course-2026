'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { User, UserCircle, X } from 'lucide-react';

interface AdminUser {
  email: string;
  name: string;
}

interface OwnerCellProps {
  ownerId: string | null;
  adminUsers?: AdminUser[];
  onChange?: (ownerId: string | null) => void;
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

function getAvatarColor(email: string): string {
  const colors = ['#69ADFF', '#8B5CF6', '#F59E0B', '#10B981', '#EC4899', '#303150'];
  let hash = 0;
  for (let i = 0; i < email.length; i++) hash = email.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export default function OwnerCell({ ownerId, adminUsers = [], onChange }: OwnerCellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPosition({ top: rect.bottom + 4, left: rect.left + rect.width / 2 });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen, updatePosition]);

  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen]);

  const handleSelect = (email: string | null) => {
    onChange?.(email);
    setIsOpen(false);
  };

  const currentUser = adminUsers.find((u) => u.email === ownerId);

  if (!ownerId || !currentUser) {
    return (
      <>
        <div
          ref={triggerRef}
          onClick={() => onChange && setIsOpen(!isOpen)}
          className="flex items-center justify-center h-9"
          style={{ cursor: onChange ? 'pointer' : 'default' }}
        >
          <div className="w-8 h-8 rounded-full border border-dashed border-[#E8E8ED] flex items-center justify-center hover:border-[#69ADFF] hover:bg-[#69ADFF]/5 transition-colors">
            <UserCircle className="w-5 h-5 text-[#BDBDCB]" strokeWidth={1.5} />
          </div>
        </div>

        {isOpen && mounted && createPortal(
          <OwnerDropdown
            ref={dropdownRef}
            position={position}
            adminUsers={adminUsers}
            currentOwnerId={ownerId}
            onSelect={handleSelect}
          />,
          document.body,
        )}
      </>
    );
  }

  return (
    <>
      <div
        ref={triggerRef}
        onClick={() => onChange && setIsOpen(!isOpen)}
        className="flex items-center justify-center h-9"
        style={{ cursor: onChange ? 'pointer' : 'default' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold select-none"
          style={{ backgroundColor: getAvatarColor(currentUser.email) }}
          title={currentUser.name}
        >
          {getInitials(currentUser.name)}
        </div>
      </div>

      {isOpen && mounted && createPortal(
        <OwnerDropdown
          ref={dropdownRef}
          position={position}
          adminUsers={adminUsers}
          currentOwnerId={ownerId}
          onSelect={handleSelect}
        />,
        document.body,
      )}
    </>
  );
}

interface OwnerDropdownProps {
  position: { top: number; left: number };
  adminUsers: AdminUser[];
  currentOwnerId: string | null;
  onSelect: (email: string | null) => void;
}

import { forwardRef } from 'react';

const OwnerDropdown = forwardRef<HTMLDivElement, OwnerDropdownProps>(
  function OwnerDropdown({ position, adminUsers, currentOwnerId, onSelect }, ref) {
    return (
      <div
        ref={ref}
        className="fixed z-[10000] bg-white rounded-xl overflow-hidden py-1 w-52"
        style={{
          top: position.top,
          left: position.left,
          transform: 'translateX(-50%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
          border: '1px solid #F7F7F8',
        }}
        dir="rtl"
      >
        {adminUsers.map((user) => (
          <button
            key={user.email}
            type="button"
            onClick={() => onSelect(user.email)}
            className={`w-full px-3 py-2 flex items-center gap-2.5 hover:bg-[#F7F7F8] transition-colors ${
              currentOwnerId === user.email ? 'bg-[#69ADFF]/5' : ''
            }`}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
              style={{ backgroundColor: getAvatarColor(user.email) }}
            >
              {getInitials(user.name)}
            </div>
            <div className="flex-1 text-start min-w-0">
              <p className="text-sm text-[#303150] font-medium truncate">{user.name}</p>
              <p className="text-[10px] text-[#BDBDCB] truncate">{user.email}</p>
            </div>
            {currentOwnerId === user.email && (
              <div className="w-2 h-2 rounded-full bg-[#69ADFF] shrink-0" />
            )}
          </button>
        ))}
        {currentOwnerId && (
          <>
            <div className="h-px bg-[#F7F7F8] my-0.5" />
            <button
              type="button"
              onClick={() => onSelect(null)}
              className="w-full px-3 py-2 flex items-center gap-2 hover:bg-red-50 transition-colors text-sm text-red-500"
            >
              <X className="w-3.5 h-3.5" strokeWidth={2} />
              הסר אחראי
            </button>
          </>
        )}
      </div>
    );
  }
);
