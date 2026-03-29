"use client";

import { LogOut, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function Topbar({ user }: { user: { name: string, role: string } }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

  const getTitle = () => {
    if (pathname.includes("dashboard")) return "Dashboard";
    if (pathname.includes("expenses")) return "My Expenses";
    if (pathname.includes("approvals")) return "Approvals";
    if (pathname.includes("users")) return "User Management";
    if (pathname.includes("analytics")) return "Analytics Core";
    return "Workspace";
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10 w-full">
      <div className="font-semibold text-lg text-slate-800">
         {getTitle()}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-right">
          <p className="font-medium text-slate-900">{user.name}</p>
          <p className="text-xs text-slate-500 capitalize">{user.role.toLowerCase()}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary">
          <User className="w-4 h-4" />
        </div>
        <button 
          onClick={handleLogout}
          className="text-slate-400 hover:text-danger ml-2 transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
