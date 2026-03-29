"use client";

import { LogOut, User, Bell } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function Topbar({ user }: { user: { name: string, role: string } }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  const getTitle = () => {
    if (pathname.includes("dashboard")) return { title: "Dashboard", sub: "Your workspace overview" };
    if (pathname.includes("expenses/new")) return { title: "New Expense", sub: "Submit a new claim" };
    if (pathname.includes("expenses")) return { title: "My Expenses", sub: "Track your submissions" };
    if (pathname.includes("approvals")) return { title: "Approvals", sub: "Review pending requests" };
    if (pathname.includes("users")) return { title: "User Management", sub: "Manage workspace members" };
    if (pathname.includes("analytics")) return { title: "Analytics", sub: "Deep performance insights" };
    if (pathname.includes("rules")) return { title: "Approval Rules", sub: "Configure workflow policies" };
    return { title: "Workspace", sub: "" };
  };

  const { title, sub } = getTitle();
  const initials = user.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <header className="h-[72px] flex items-center justify-between px-8 sticky top-0 z-10 bg-white/80 backdrop-blur-xl"
      style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div>
        <h1 className="text-lg font-semibold text-slate-800">{title}</h1>
        {sub && <p className="text-[13px] text-slate-400 -mt-0.5">{sub}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all">
          <Bell className="w-4 h-4" />
        </button>
        
        <div className="h-8 w-px bg-slate-100" />
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[13px] font-medium text-slate-700">{user.name}</p>
            <p className="text-[11px] text-slate-400 capitalize">{user.role.toLowerCase()}</p>
          </div>
          <div className="w-9 h-9 rounded-xl text-white font-semibold text-xs flex items-center justify-center"
            style={{ background: 'var(--gradient-primary)' }}>
            {initials}
          </div>
        </div>

        <button onClick={handleLogout}
          className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all ml-1"
          title="Logout">
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
