"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { PlusCircle, Loader2 } from "lucide-react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("ALL");

  useEffect(() => {
    fetch("/api/expenses")
      .then(res => res.json())
      .then(json => {
         if (json.success) setExpenses(json.data);
         setLoading(false);
      });
  }, []);

  const tabs = [
    { label: "All Expenses", value: "ALL" },
    { label: "Submitted", value: "SUBMITTED" },
    { label: "In Review", value: "IN_REVIEW" },
    { label: "Approved", value: "APPROVED" },
    { label: "Rejected", value: "REJECTED" },
  ];

  const filtered = activeTab === "ALL" ? expenses : expenses.filter(e => e.status === activeTab);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "APPROVED": return <span className="px-2 py-1 bg-success/10 text-success text-[11px] font-bold rounded flex w-fit uppercase tracking-wider">Approved</span>;
      case "REJECTED": return <span className="px-2 py-1 bg-danger/10 text-danger text-[11px] font-bold rounded flex w-fit uppercase tracking-wider">Rejected</span>;
      case "IN_REVIEW": return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-[11px] font-bold rounded flex w-fit uppercase tracking-wider">In Review</span>;
      default: return <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded flex w-fit uppercase tracking-wider">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">My Expenses</h1>
        <Link 
          href="/expenses/new" 
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
        >
          <PlusCircle className="w-4 h-4" /> New Expense
        </Link>
      </div>

      <div className="flex border-b border-slate-200 hide-scrollbar overflow-x-auto">
        {tabs.map(tab => (
          <button 
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.value ? "border-primary text-primary" : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center justify-center">
            <span className="block text-sm">No expenses found matching the current filter.</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Description</th>
                  <th className="px-6 py-3 font-medium">Category</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(exp => (
                  <tr key={exp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900 max-w-[200px] truncate" title={exp.description}>{exp.description}</td>
                    <td className="px-6 py-4 text-slate-500">{exp.category}</td>
                    <td className="px-6 py-4 text-slate-500">{new Date(exp.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 font-medium">{formatCurrency(exp.amountConverted)}</td>
                    <td className="px-6 py-4">{getStatusBadge(exp.status)}</td>
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
