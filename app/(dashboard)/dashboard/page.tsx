"use client";

import { useEffect, useState } from "react";
import { formatCurrency } from "@/lib/utils";
import { Loader2, DollarSign, Clock, CheckCircle, XCircle } from "lucide-react";

export default function DashboardPage() {
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
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Workspace Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Spent</p>
              <h3 className="text-3xl font-bold text-slate-900">{formatCurrency(data.totalAmount)}</h3>
            </div>
            <div className="p-3 bg-primary/10 text-primary rounded-lg"><DollarSign className="w-5 h-5" /></div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Unresolved Claims</p>
              <h3 className="text-3xl font-bold text-slate-900">{data.pendingCount}</h3>
            </div>
            <div className="p-3 bg-yellow-100 text-yellow-600 rounded-lg"><Clock className="w-5 h-5" /></div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Approved Count</p>
              <h3 className="text-3xl font-bold text-slate-900">{data.approvedCount}</h3>
            </div>
            <div className="p-3 bg-success/10 text-success rounded-lg"><CheckCircle className="w-5 h-5" /></div>
         </div>

         <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between hover:shadow-md transition-shadow">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Rejected Count</p>
              <h3 className="text-3xl font-bold text-slate-900">{data.rejectedCount}</h3>
            </div>
            <div className="p-3 bg-danger/10 text-danger rounded-lg"><XCircle className="w-5 h-5" /></div>
         </div>
      </div>
      
      {/* Expanded scope for Category arrays could render Chart.js here natively mapping data.categoryBreakdown */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 mb-4">Category Breakdown</h3>
        <div className="space-y-3">
          {Object.entries(data.categoryBreakdown || {}).length > 0 ? Object.entries(data.categoryBreakdown).map(([cat, amount]: any) => (
             <div key={cat} className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-medium">{cat}</span>
                <span className="font-bold text-slate-900">{formatCurrency(amount)}</span>
             </div>
          )) : <div className="text-slate-500 text-sm">No spend data mapped.</div>}
        </div>
      </div>
    </div>
  );
}
