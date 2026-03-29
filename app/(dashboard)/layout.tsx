import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { name: true, role: true }
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen font-inter" style={{ background: '#f8fafc' }}>
      <Sidebar role={user.role} />
      <div className="pl-[260px] flex flex-col min-h-screen">
        <Topbar user={user} />
        <main className="flex-1 p-8 w-full max-w-[1400px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
