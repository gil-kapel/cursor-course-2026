'use client';

import { useState, useRef, useEffect } from 'react';
import { LogOut, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { signOutUser } from '@/app/actions/auth';

interface UserMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export default function UserMenu({ user }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold text-white bg-[#69ADFF] hover:bg-[#5A9EE6] transition-colors"
      >
        התחברות
      </Link>
    );
  }

  const initials = (user.name ?? user.email ?? '?')
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-[#69ADFF]/40 transition-colors cursor-pointer flex items-center justify-center bg-[#69ADFF]/10"
        aria-expanded={open}
        aria-haspopup="menu"
        title={user.name ?? 'החשבון שלי'}
      >
        {user.image ? (
          <img src={user.image} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <span className="text-[0.625rem] font-bold text-[#69ADFF]">{initials}</span>
        )}
      </button>

      {open && (
        <div
          className="absolute left-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg border border-[#F7F7F8] py-2 z-50"
          role="menu"
          dir="rtl"
          lang="he"
        >
          <div className="px-4 py-2 border-b border-[#F7F7F8]">
            {user.name && (
              <p className="text-[0.8125rem] font-semibold text-[#303150] truncate">{user.name}</p>
            )}
            {user.email && (
              <p className="text-[0.6875rem] text-[#7E7F90] truncate" dir="ltr">{user.email}</p>
            )}
          </div>

          <form action={signOutUser}>
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-4 py-2.5 text-[0.8125rem] text-[#7E7F90] hover:bg-[#F7F7F8] hover:text-[#303150] transition-colors cursor-pointer"
              role="menuitem"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.75} />
              <span>התנתקות</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
