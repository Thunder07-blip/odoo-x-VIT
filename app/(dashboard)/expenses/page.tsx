"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { PlusCircle, Loader2, Receipt, Search } from "lucide-react";

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
      case "APPROVED": return <span className="badge badge-green">Approved</span>;
      case "REJECTED": return <span className="badge badge-red">Rejected</span>;
      case "IN_REVIEW": return <span className="badge badge-amber">In Review</span>;
      case "SUBMITTED": return <span className="badge badge-blue">Submitted</span>;
      default: return <span className="badge badge-slate">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in stagger">
      <div className="flex items-center justify-between">
        <div className="page-header">
          <h1>My Expenses</h1>
          <p>Manage and track your submitted expense claims.</p>
        </div>
        <Link 
          href="/expenses/new" 
          className="btn-primary flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4" /> New Expense
        </Link>
      </div>

      <div className="card overflow-hidden">
        {/* Toolbar */}
        <div className="px-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex hide-scrollbar overflow-x-auto">
            {tabs.map(tab => (
              <button 
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.value 
                    ? "border-primary text-primary" 
                    : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="relative py-3 sm:py-0 w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search expenses..." 
              className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="p-16 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" /></div>
        ) : filtered.length === 0 ? (
          <div className="p-16 text-center text-slate-500 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
              <Receipt className="w-6 h-6" />
            </div>
            <span className="block text-[15px] font-medium text-slate-600 mb-1">No expenses found</span>
            <span className="block text-[13px] text-slate-400">There are no expenses matching the current filter.</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-premium">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(exp => (
                  <tr key={exp.id}>
                    <td>
                      <div className="font-medium text-slate-800 max-w-[250px] truncate" title={exp.description}>
                        {exp.description}
                      </div>
                    </td>
                    <td>
                      <span className="text-slate-500">{exp.category}</span>
                    </td>
                    <td>
                      <span className="text-slate-500">{new Date(exp.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </td>
                    <td>
                      <span className="font-semibold text-slate-900">{formatCurrency(exp.amountConverted)}</span>
                    </td>
                    <td>{getStatusBadge(exp.status)}</td>
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
