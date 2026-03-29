"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, X, Trash2, Info, ArrowRight, Users } from "lucide-react";
import { toast } from "sonner";

interface ApproverStep {
  approverId: string;
  stepOrder: number;
  isRequired: boolean;
}

const EMPTY_RULE = {
  userId: "",
  ruleName: "",
  description: "",
  isManagerApprover: false,
  isSequential: false,
  minApprovalPercentage: 100,
};

export default function RulesPage() {
  const [rules, setRules] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [form, setForm] = useState({ ...EMPTY_RULE });
  const [steps, setSteps] = useState<ApproverStep[]>([]);

  // Derived
  const selectedUser = users.find(u => u.id === form.userId);
  const approverCandidates = users.filter(u => u.role === "MANAGER" || u.role === "ADMIN");

  const fetchData = () => {
    Promise.all([
      fetch("/api/rules").then(r => r.json()),
      fetch("/api/users").then(r => r.json()),
    ]).then(([rulesJson, usersJson]) => {
      if (rulesJson.success) setRules(rulesJson.data);
      if (usersJson.success) setUsers(usersJson.data);
      setLoading(false);
    });
  };

  useEffect(() => { fetchData(); }, []);

  const openModal = () => {
    setForm({ ...EMPTY_RULE });
    setSteps([]);
    setShowModal(true);
  };

  // ── Step management ────────────────────────────────────
  const addStep = () => {
    setSteps(prev => [...prev, { approverId: "", stepOrder: prev.length + 1, isRequired: false }]);
  };

  const removeStep = (idx: number) => {
    setSteps(prev => prev.filter((_, i) => i !== idx).map((s, i) => ({ ...s, stepOrder: i + 1 })));
  };

  const updateStep = (idx: number, field: keyof ApproverStep, value: any) => {
    setSteps(prev => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s));
  };

  // Already-selected approver IDs (prevent duplicates)
  const selectedApproverIds = steps.map(s => s.approverId).filter(Boolean);

  // ── Validation ──────────────────────────────────────────
  const validate = (): string | null => {
    if (!form.userId) return "Please select a target user.";
    if (!form.ruleName.trim()) return "Rule name is required.";
    if (steps.length === 0) return "Add at least one approver.";
    if (steps.some(s => !s.approverId)) return "All approver slots must be filled.";
    const ids = steps.map(s => s.approverId);
    if (new Set(ids).size !== ids.length) return "Duplicate approvers detected.";
    if (form.minApprovalPercentage < 1 || form.minApprovalPercentage > 100) return "Approval % must be 1–100.";
    return null;
  };

  // ── Submit ──────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { toast.error(err); return; }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, steps }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("Approval rule created successfully!");
      setShowModal(false);
      fetchData();
    } catch (err: any) { toast.error(err.message); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Approval Policy Rules</h1>
        <button onClick={openModal} className="bg-primary text-white px-4 py-2.5 rounded-md shadow-sm font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Create Rule
        </button>
      </div>
      <p className="text-sm text-slate-500">Define routing, approval chains, and threshold logic for your workspace.</p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        : rules.length === 0 ? <div className="p-12 text-center text-slate-500">No rules configured yet. Click "Create Rule" to define your first approval chain.</div>
        : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Rule</th>
                  <th className="px-6 py-3 font-medium">Target User</th>
                  <th className="px-6 py-3 font-medium">Strategy</th>
                  <th className="px-6 py-3 font-medium">Mgr First?</th>
                  <th className="px-6 py-3 font-medium">Min %</th>
                  <th className="px-6 py-3 font-medium">Approval Chain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rules.map(r => (
                  <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{r.ruleName}</td>
                    <td className="px-6 py-4 text-slate-500">{r.user?.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-[11px] font-bold rounded uppercase tracking-wide ${r.isSequential ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                        {r.isSequential ? "Sequential" : "Parallel"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{r.isManagerApprover ? "Yes" : "No"}</td>
                    <td className="px-6 py-4 text-slate-800 font-semibold">{r.minApprovalPercentage}%</td>
                    <td className="px-6 py-4 text-slate-500">
                      {r.steps?.length > 0 ? (
                        <div className="flex items-center gap-1 text-xs">
                          {r.steps.map((s: any, i: number) => (
                            <span key={s.id} className="flex items-center gap-1">
                              <span className={`px-1.5 py-0.5 rounded ${s.isRequired ? 'bg-red-100 text-red-700 font-bold' : 'bg-slate-100 text-slate-600'}`}>
                                {s.approver?.name}
                              </span>
                              {i < r.steps.length - 1 && (r.isSequential ? <ArrowRight className="w-3 h-3 text-slate-400" /> : <span className="text-slate-300">|</span>)}
                            </span>
                          ))}
                        </div>
                      ) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ══════════ CREATE RULE MODAL ══════════ */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-[680px] max-h-[90vh] overflow-y-auto relative z-10 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-10">
              <h2 className="text-xl font-bold text-slate-800">Create Approval Rule</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1 rounded-md border border-slate-200"><X className="w-4 h-4" /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* 1. Rule Name + Description */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Rule Name <span className="text-red-500">*</span></label>
                  <input required value={form.ruleName} onChange={e => setForm({ ...form, ruleName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="e.g. Travel Expense Policy" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
                  <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Optional description..." />
                </div>
              </div>

              {/* 2. User Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Target User <span className="text-red-500">*</span></label>
                <select required value={form.userId} onChange={e => setForm({ ...form, userId: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select user this rule applies to...</option>
                  {users.filter(u => u.role !== "ADMIN").map(u => (
                    <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                  ))}
                </select>
                {selectedUser?.managerId && (
                  <p className="text-xs text-slate-400 mt-1">
                    Default manager: <strong className="text-slate-600">{users.find(u => u.id === selectedUser.managerId)?.name || "Unknown"}</strong>
                  </p>
                )}
              </div>

              {/* 3. Rule Settings */}
              <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rule Configuration</p>

                {/* Manager checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={form.isManagerApprover} onChange={e => setForm({ ...form, isManagerApprover: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">Manager approval required first</span>
                    <p className="text-xs text-slate-400 mt-0.5">If checked, the user's manager is automatically added as Step 0 (must approve before others).</p>
                  </div>
                </label>

                {/* Sequential checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={form.isSequential} onChange={e => setForm({ ...form, isSequential: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">Sequential approval flow</span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {form.isSequential
                        ? "✓ Approvals happen one-by-one in order. Next approver activates only after the previous approves."
                        : "All approvers are notified simultaneously and can act in any order."}
                    </p>
                  </div>
                </label>

                {/* Min % */}
                <div className="flex items-center gap-3 pt-1">
                  <label className="text-sm font-semibold text-slate-800 whitespace-nowrap">Min. Approval %</label>
                  <input type="number" min={1} max={100} value={form.minApprovalPercentage}
                    onChange={e => setForm({ ...form, minApprovalPercentage: parseInt(e.target.value) || 100 })}
                    className="w-20 px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-center font-mono" />
                  <span className="text-xs text-slate-400">Required percentage of approvers to pass</span>
                </div>
              </div>

              {/* 4. Approvers Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-bold text-slate-800">Approval Steps</span>
                  </div>
                  <button type="button" onClick={addStep}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-md font-medium hover:bg-primary/20 transition-colors flex items-center gap-1">
                    <Plus className="w-3 h-3" /> Add Approver
                  </button>
                </div>

                {steps.length === 0 ? (
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
                    <Info className="w-5 h-5 text-slate-300 mx-auto mb-2" />
                    <p className="text-sm text-slate-400">No approvers added yet. Click "Add Approver" above.</p>
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-4 py-2.5 text-left text-slate-500 font-medium w-12">#</th>
                          <th className="px-4 py-2.5 text-left text-slate-500 font-medium">Approver</th>
                          <th className="px-4 py-2.5 text-center text-slate-500 font-medium w-24">Required</th>
                          <th className="px-4 py-2.5 text-center text-slate-500 font-medium w-16"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {steps.map((step, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50">
                            <td className="px-4 py-2.5">
                              <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">{idx + 1}</span>
                            </td>
                            <td className="px-4 py-2.5">
                              <select value={step.approverId} onChange={e => updateStep(idx, "approverId", e.target.value)}
                                className="w-full px-2 py-1.5 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                <option value="">Select approver...</option>
                                {approverCandidates.filter(u => u.id === step.approverId || !selectedApproverIds.includes(u.id)).map(u => (
                                  <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                                ))}
                              </select>
                            </td>
                            <td className="px-4 py-2.5 text-center">
                              <label className="flex items-center justify-center cursor-pointer" title="If checked, rejection by this approver instantly rejects the entire request">
                                <input type="checkbox" checked={step.isRequired} onChange={e => updateStep(idx, "isRequired", e.target.checked)}
                                  className="w-4 h-4 rounded border-slate-300 text-red-600 focus:ring-red-200" />
                              </label>
                            </td>
                            <td className="px-4 py-2.5 text-center">
                              <button type="button" onClick={() => removeStep(idx)} className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {steps.some(s => s.isRequired) && (
                  <div className="mt-2 flex items-start gap-1.5 text-xs text-red-600 bg-red-50 p-2 rounded-md border border-red-100">
                    <Info className="w-3 h-3 mt-0.5 shrink-0" />
                    <span><strong>Required</strong> approvers can instantly reject requests. Use carefully.</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-4 flex gap-3 border-t border-slate-100">
                <button type="button" onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium text-sm">Cancel</button>
                <button type="submit" disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 font-medium text-sm flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} Create Rule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
