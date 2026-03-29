"use client";

import { useEffect, useState } from "react";
import { Loader2, TrendingUp, PieChart } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    fetch("/api/analytics")
      .then(res => res.json())
      .then(json => {
        if (json.success) setData(json.data);
      });
  }, []);

  if (!data) return <div className="p-20 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" /></div>;

  return (
    <div className="space-y-6 animate-fade-in stagger">
      <div className="page-header">
        <h1>Deep Analytics</h1>
        <p>Review performance distribution and claim evaluations globally across the system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <PieChart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-[16px]">Category Distribution</h2>
              <p className="text-[12px] text-slate-400">Total spend broken down by category</p>
            </div>
          </div>
          <div className="space-y-5">
             {Object.entries(data.categoryBreakdown || {}).sort(([,a]: any, [,b]: any) => b - a).map(([cat, amount]: any) => (
                <div key={cat}>
                  <div className="flex justify-between text-[13px] mb-2">
                    <span className="font-medium text-slate-600">{cat}</span>
                    <span className="font-bold text-slate-900">{formatCurrency(amount)}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                     <div className="h-full rounded-full transition-all duration-1000 origin-left" 
                          style={{ width: `${(amount / data.totalAmount) * 100}%`, background: 'var(--gradient-primary)' }}></div>
                  </div>
                </div>
             ))}
             {Object.keys(data.categoryBreakdown || {}).length === 0 && <p className="text-[13px] text-slate-400 py-4 text-center">No spend data available yet.</p>}
          </div>
        </div>

        <div className="card p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-[16px]">Execution Health Checks</h2>
              <p className="text-[12px] text-slate-400">System-wide claim evaluation metrics</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-center flex flex-col justify-center">
               <div className="text-[32px] font-black text-emerald-600 leading-none">{data.approvedCount}</div>
               <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-widest mt-2">Approved Claims</div>
            </div>
            <div className="p-6 bg-rose-50/50 border border-rose-100 rounded-2xl text-center flex flex-col justify-center">
               <div className="text-[32px] font-black text-rose-600 leading-none">{data.rejectedCount}</div>
               <div className="text-[11px] font-bold text-rose-500 uppercase tracking-widest mt-2">Rejected Claims</div>
            </div>
            <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl text-center flex flex-col justify-center">
               <div className="text-[32px] font-black text-amber-600 leading-none">{data.pendingCount}</div>
               <div className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mt-2">Pending Processing</div>
            </div>
            <div className="p-6 bg-slate-50/70 border border-slate-100 rounded-2xl text-center flex flex-col justify-center">
               <div className="text-[32px] font-black text-slate-700 leading-none">{data.totalExpenses}</div>
               <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">Total Payloads Extracted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
