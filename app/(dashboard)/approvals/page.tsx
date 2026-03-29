"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/utils";
import { Loader2, Check, X } from "lucide-react";

export default function ApprovalsPage() {
  const [approvals, setApprovals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState<string | null>(null);

  const fetchApprovals = async () => {
    const res = await fetch("/api/approvals");
    const json = await res.json();
    if (json.success) setApprovals(json.data);
    setLoading(false);
  };

  useEffect(() => { fetchApprovals(); }, []);

  const handleAction = async (expenseId: string, action: "APPROVE" | "REJECT") => {
    setActing(expenseId);
    try {
      const res = await fetch("/api/approvals/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expenseId, action })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      
      toast.success(json.message);
      fetchApprovals();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setActing(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-slate-800">Pending Approvals</h1>
      <p className="text-sm text-slate-500 mb-6">Review and resolve claims routed to your queue.</p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        ) : approvals.length === 0 ? (
          <div className="p-12 text-center text-slate-500">You're all caught up! No pending approvals.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Employee</th>
                  <th className="px-6 py-3 font-medium">Description</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {approvals.map(approval => {
                  const exp = approval.expense;
                  const isActing = acting === exp.id;
                  return (
                    <tr key={approval.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">
                         <div className="font-semibold">{exp.employee.name}</div>
                         <div className="text-xs text-slate-500">{exp.employee.email}</div>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-700 max-w-[200px] truncate" title={exp.description}>{exp.description}</td>
                      <td className="px-6 py-4 text-slate-500">{exp.category}</td>
                      <td className="px-6 py-4 text-slate-500">{new Date(exp.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4 font-bold">{formatCurrency(exp.amountConverted)}</td>
                      <td className="px-6 py-4 text-right">
                         {approval.status === "PENDING" ? (
                           <div className="flex items-center justify-end gap-2">
                             <button 
                               disabled={isActing} 
                               onClick={() => handleAction(exp.id, "REJECT")}
                               className="p-2 text-danger bg-danger/10 hover:bg-danger/20 rounded-md transition-colors disabled:opacity-50"
                               title="Reject"
                             >
                               <X className="w-4 h-4" />
                             </button>
                             <button 
                               disabled={isActing} 
                               onClick={() => handleAction(exp.id, "APPROVE")}
                               className="p-2 text-success bg-success/10 hover:bg-success/20 rounded-md transition-colors flex items-center gap-1 disabled:opacity-50"
                             >
                               {isActing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                               <span className="font-medium pr-1">Approve</span>
                             </button>
                           </div>
                         ) : (
                           <span className={`px-2 py-1 text-[11px] font-bold rounded flex w-fit ml-auto uppercase tracking-wider ${approval.status === 'APPROVED' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                             {approval.status}
                           </span>
                         )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
