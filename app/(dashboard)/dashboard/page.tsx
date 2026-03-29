"use client";

import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { Loader2, DollarSign, Clock, CheckCircle, XCircle, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/analytics")
      .then(res => res.json())
      .then(json => { if (json.success) setData(json.data); });
  }, []);

  if (!data) return <div className="p-20 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  const cards = [
    { label: "Total Spent", value: formatCurrency(data.totalAmount), icon: DollarSign, color: "from-indigo-500 to-purple-500", bg: "bg-indigo-50" },
    { label: "Pending Claims", value: data.pendingCount, icon: Clock, color: "from-amber-400 to-orange-500", bg: "bg-amber-50" },
    { label: "Approved", value: data.approvedCount, icon: CheckCircle, color: "from-emerald-400 to-green-500", bg: "bg-emerald-50" },
    { label: "Rejected", value: data.rejectedCount, icon: XCircle, color: "from-rose-400 to-red-500", bg: "bg-rose-50" },
  ];

  const totalSpend = Object.values(data.categoryBreakdown || {}).reduce((a: number, b: any) => a + b, 0) as number;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="page-header">
        <h1>Workspace Overview</h1>
        <p>Track spending, approvals, and team activity at a glance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
        {cards.map((c, i) => (
          <div key={i} className="card p-6 flex items-start justify-between group cursor-default">
            <div>
              <p className="text-[13px] font-medium text-slate-400 mb-1.5">{c.label}</p>
              <h3 className="text-[28px] font-bold text-slate-800 tracking-tight">{c.value}</h3>
            </div>
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
              <c.icon className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      <div className="card p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 text-[15px]">Category Breakdown</h3>
            <p className="text-[12px] text-slate-400">Spending distribution across categories</p>
          </div>
        </div>
        <div className="space-y-4">
          {Object.entries(data.categoryBreakdown || {}).length > 0 ? Object.entries(data.categoryBreakdown).map(([cat, amount]: any) => {
            const pct = totalSpend > 0 ? (amount / totalSpend * 100) : 0;
            return (
              <div key={cat}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[13px] font-medium text-slate-600">{cat}</span>
                  <span className="text-[13px] font-semibold text-slate-800">{formatCurrency(amount)}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: 'var(--gradient-primary)' }} />
                </div>
              </div>
            );
          }) : <div className="text-slate-400 text-sm py-4 text-center">No spending data available.</div>}
        </div>
      </div>
    </div>
  );
}
