import { redirect } from 'next/navigation';
import { requireAdmin } from '@/lib/admin';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  try {
    await requireAdmin();
  } catch {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen bg-[#F7F7F8]" dir="rtl">
      <AdminSidebar />
      <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
