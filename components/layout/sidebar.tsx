"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Receipt, CheckSquare, Users, Settings, BarChart } from "lucide-react";

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
    <aside className="w-[240px] bg-white border-r border-slate-200 h-screen fixed top-0 left-0 flex flex-col z-20">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 font-bold text-xl text-primary">
        ExpenseFlow
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                isActive 
                  ? "bg-slate-100 text-primary font-bold" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
              )}
            >
              <Icon className="w-5 h-5 opacity-80" />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
