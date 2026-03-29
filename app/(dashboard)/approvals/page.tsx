"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/utils";
import { Loader2, Check, X, CheckSquare } from "lucide-react";

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
    <div className="space-y-6 animate-fade-in stagger">
      <div className="page-header">
        <h1>Pending Approvals</h1>
        <p>Review and resolve claims routed to your queue.</p>
      </div>

      <div className="card overflow-hidden">
        {loading ? (
          <div className="p-16 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" /></div>
        ) : approvals.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-400">
              <CheckSquare className="w-8 h-8" />
            </div>
            <h3 className="text-[18px] font-bold text-slate-800 mb-1">You're all caught up!</h3>
            <p className="text-[14px] text-slate-400">There are no pending approvals in your queue right now.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-premium">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Request Details</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map(approval => {
                  const exp = approval.expense;
                  const isActing = acting === exp.id;
                  
                  return (
                    <tr key={approval.id}>
                      <td>
                         <div className="font-semibold text-slate-800">{exp.employee.name}</div>
                         <div className="text-[12px] text-slate-400 mt-0.5">{exp.employee.email}</div>
                      </td>
                      <td>
                        <div className="font-medium text-slate-700 max-w-[200px] truncate" title={exp.description}>
                          {exp.description}
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-slate">{exp.category}</span>
                      </td>
                      <td>
                        <span className="text-slate-500">
                          {new Date(exp.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                      </td>
                      <td>
                        <span className="font-bold text-slate-900">{formatCurrency(exp.amountConverted)}</span>
                      </td>
                      <td className="text-right">
                         {approval.status === "PENDING" ? (
                           <div className="flex items-center justify-end gap-2">
                             <button 
                               disabled={isActing} 
                               onClick={() => handleAction(exp.id, "REJECT")}
                               className="w-9 h-9 flex items-center justify-center text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-all disabled:opacity-50"
                               title="Reject"
                             >
                               <X className="w-4 h-4" />
                             </button>
                             <button 
                               disabled={isActing} 
                               onClick={() => handleAction(exp.id, "APPROVE")}
                               className="px-4 py-2 text-green-700 bg-green-100 hover:bg-green-200 rounded-xl transition-all flex items-center gap-1.5 disabled:opacity-50 font-semibold text-[13px]"
                             >
                               {isActing && acting === exp.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                               Approve
                             </button>
                           </div>
                         ) : (
                           <span className={`badge ${approval.status === 'APPROVED' ? 'badge-green' : 'badge-red'}`}>
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
