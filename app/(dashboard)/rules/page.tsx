"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus } from "lucide-react";

export default function RulesPage() {
  const [rules, setRules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rules")
      .then(res => res.json())
      .then(json => {
        if (json.success) setRules(json.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Approval Policy Rules</h1>
        <button className="bg-primary text-white px-4 py-2.5 rounded-md shadow-sm font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Create Rule
        </button>
      </div>
      <p className="text-sm text-slate-500 mb-6">Define explicit routing constraints and parallel/sequential layers required for workspace users.</p>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
             <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        ) : rules.length === 0 ? (
             <div className="p-12 text-center text-slate-500">No active rules configured. Operations default automatically to Auto-Approved routing mappings.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Target User</th>
                  <th className="px-6 py-3 font-medium">Strategy</th>
                  <th className="px-6 py-3 font-medium">Manager Override</th>
                  <th className="px-6 py-3 font-medium">Steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {rules.map(r => (
                   <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{r.user?.name}</td>
                      <td className="px-6 py-4">
                         <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded flex w-fit uppercase tracking-widest">
                            {r.isSequential ? "Sequential" : `Parallel (${r.minApprovalPercentage}%)`}
                         </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{r.isManagerApprover ? "Yes" : "No"}</td>
                      <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                         {r.steps.length > 0 ? r.steps.map((s: any) => s.approver?.name).join(" → ") : "None"}
                      </td>
                   </tr>
                 ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
