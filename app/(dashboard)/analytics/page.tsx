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

  if (!data) return <div className="p-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-slate-800">Deep Analytics</h1>
      <p className="text-sm text-slate-500 mb-6">Review performance distribution and claim evaluations globally across the system.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-primary mb-6">
            <PieChart className="w-5 h-5" />
            <h2 className="font-bold text-slate-800">Category Distribution</h2>
          </div>
          <div className="space-y-5">
             {Object.entries(data.categoryBreakdown || {}).sort(([,a]: any, [,b]: any) => b - a).map(([cat, amount]: any) => (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-700">{cat}</span>
                    <span className="font-bold text-slate-900">{formatCurrency(amount)}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50">
                     <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: `${(amount / data.totalAmount) * 100}%` }}></div>
                  </div>
                </div>
             ))}
             {Object.keys(data.categoryBreakdown || {}).length === 0 && <p className="text-sm text-slate-500 text-center py-4">No data generated yet.</p>}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-primary mb-6">
            <TrendingUp className="w-5 h-5" />
            <h2 className="font-bold text-slate-800">Execution Health Checks</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[calc(100%-3rem)] font-inter">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center justify-center">
               <div className="text-3xl font-black text-slate-800">{data.approvedCount}</div>
               <div className="text-[10px] font-bold text-success uppercase tracking-widest mt-2">Approved Claims</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center justify-center">
               <div className="text-3xl font-black text-slate-800">{data.rejectedCount}</div>
               <div className="text-[10px] font-bold text-danger uppercase tracking-widest mt-2">Rejected Claims</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center justify-center">
               <div className="text-3xl font-black text-slate-800">{data.pendingCount}</div>
               <div className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mt-2">Pending Processing</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center justify-center">
               <div className="text-3xl font-black text-slate-800">{data.totalExpenses}</div>
               <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Total Payloads Extracted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
