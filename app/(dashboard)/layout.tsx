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
    <div className="min-h-screen bg-app-bg text-slate-900 font-inter">
      <Sidebar role={user.role} />
      <div className="pl-[240px] flex flex-col min-h-screen">
        <Topbar user={user} />
        <main className="p-6 flex-1 w-full max-w-[1400px] mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
