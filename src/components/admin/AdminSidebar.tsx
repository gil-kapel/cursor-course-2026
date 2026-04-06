'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, LayoutDashboard, DollarSign } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/admin/roadmap', label: 'מפת דרכים', icon: Map },
  { href: '/admin/cfo', label: 'ניהול פיננסי', icon: DollarSign },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-white border-e border-[#E8E8ED] min-h-screen p-4" dir="rtl">
      <Link href="/admin" className="flex items-center gap-2 mb-8 px-2">
        <LayoutDashboard className="w-5 h-5 text-[#69ADFF]" strokeWidth={2} />
        <span className="text-base font-bold text-[#303150]">ניהול</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#69ADFF]/10 text-[#69ADFF]'
                  : 'text-[#7E7F90] hover:bg-[#F7F7F8] hover:text-[#303150]'
              }`}
            >
              <Icon className="w-4.5 h-4.5" strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
