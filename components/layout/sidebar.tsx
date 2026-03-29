"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, CheckSquare, Users, Settings, BarChart, Sparkles } from "lucide-react";

export function Sidebar({ role }: { role: string }) {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard }
  ];

  if (role !== "ADMIN") {
    links.push({ name: "My Expenses", href: "/expenses", icon: Receipt });
  }
  if (role === "MANAGER" || role === "ADMIN") {
    links.push({ name: "Approvals", href: "/approvals", icon: CheckSquare });
  }
  if (role === "ADMIN") {
    links.push({ name: "Users", href: "/users", icon: Users });
    links.push({ name: "Approval Rules", href: "/rules", icon: Settings });
    links.push({ name: "Analytics", href: "/analytics", icon: BarChart });
  }

  return (
    <aside className="w-[260px] h-screen fixed top-0 left-0 flex flex-col z-20 bg-white"
      style={{ borderRight: '1px solid rgba(0,0,0,0.05)' }}>
      {/* Logo */}
      <div className="h-[72px] flex items-center gap-3 px-7">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
          style={{ background: 'var(--gradient-primary)' }}>
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="font-bold text-[18px] text-slate-800 tracking-tight">ExpenseFlow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pt-2 space-y-1">
        <p className="px-3 mb-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">Menu</p>
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
          const Icon = link.icon;
          return (
            <Link key={link.name} href={link.href}
              className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
              <Icon className="w-[18px] h-[18px]" style={{ opacity: isActive ? 1 : 0.7 }} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 mx-4 mb-4 rounded-2xl" style={{ background: 'var(--gradient-card)' }}>
        <p className="text-[11px] font-medium text-slate-400">ExpenseFlow v2.0</p>
        <p className="text-[10px] text-slate-300 mt-0.5">AI-Powered Expense Platform</p>
      </div>
    </aside>
  );
}
