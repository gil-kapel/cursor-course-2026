'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LayoutDashboard, Map, DollarSign } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/admin/roadmap', label: 'מפת דרכים', icon: Map },
  { href: '/admin/cfo', label: 'ניהול פיננסי', icon: DollarSign },
];

export default function MobileAdminNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header bar */}
      <div className="md:hidden sticky top-0 z-30 bg-white border-b border-[#E8E8ED] px-4 py-3 flex items-center gap-3" dir="rtl">
        <button
          onClick={() => setOpen(true)}
          className="p-1.5 -m-1.5 rounded-lg hover:bg-[#F7F7F8] transition-colors"
          aria-label="פתח תפריט"
        >
          <Menu className="w-5 h-5 text-[#303150]" strokeWidth={2} />
        </button>
        <LayoutDashboard className="w-5 h-5 text-[#69ADFF]" strokeWidth={2} />
        <span className="text-base font-bold text-[#303150]">ניהול</span>
      </div>

      {/* Drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden" dir="rtl">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />

          {/* Drawer panel — slides in from right (RTL start) */}
          <div className="absolute top-0 right-0 bottom-0 w-64 bg-white shadow-xl animate-slide-in-right flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#E8E8ED]">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-[#69ADFF]" strokeWidth={2} />
                <span className="text-base font-bold text-[#303150]">ניהול</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[#F7F7F8] transition-colors"
                aria-label="סגור תפריט"
              >
                <X className="w-5 h-5 text-[#7E7F90]" strokeWidth={2} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col gap-1 p-3 flex-1">
              {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                const isActive = pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#69ADFF]/10 text-[#69ADFF]'
                        : 'text-[#7E7F90] hover:bg-[#F7F7F8] hover:text-[#303150]'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
