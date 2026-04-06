import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';
import MobileAdminNav from '@/components/admin/MobileAdminNav';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  try {
    await requireAdmin();
  } catch {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen bg-[#F7F7F8]" dir="rtl">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        <MobileAdminNav />
        <main className="flex-1 p-4 md:p-6 lg:p-10 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
