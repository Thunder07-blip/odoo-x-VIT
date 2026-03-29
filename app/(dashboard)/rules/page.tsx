"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, X, Trash2, Info, ArrowRight, Users as UsersIcon } from "lucide-react";
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

  const addStep = () => {
    setSteps(prev => [...prev, { approverId: "", stepOrder: prev.length + 1, isRequired: false }]);
  };

  const removeStep = (idx: number) => {
    setSteps(prev => prev.filter((_, i) => i !== idx).map((s, i) => ({ ...s, stepOrder: i + 1 })));
  };

  const updateStep = (idx: number, field: keyof ApproverStep, value: any) => {
    setSteps(prev => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s));
  };

  const selectedApproverIds = steps.map(s => s.approverId).filter(Boolean);

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
    <div className="space-y-6 animate-fade-in stagger relative">
      <div className="flex justify-between items-center">
        <div className="page-header">
          <h1>Approval Policy Rules</h1>
          <p>Define routing, approval chains, and threshold logic for your workspace.</p>
        </div>
        <button onClick={openModal} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Create Rule
        </button>
      </div>

      <div className="card overflow-hidden">
        {loading ? <div className="p-16 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" /></div>
        : rules.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 text-indigo-400">
               <UsersIcon className="w-8 h-8" />
             </div>
             <h3 className="text-[18px] font-bold text-slate-800 mb-1">No rules configured</h3>
             <p className="text-[14px] text-slate-400">Click "Create Rule" to define your first approval chain.</p>
          </div>
        )
        : (
          <div className="overflow-x-auto">
            <table className="table-premium">
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Target User</th>
                  <th>Strategy</th>
                  <th>Mgr First?</th>
                  <th>Min %</th>
                  <th>Approval Chain</th>
                </tr>
              </thead>
              <tbody>
                {rules.map(r => (
                  <tr key={r.id}>
                    <td><span className="font-semibold text-slate-800">{r.ruleName}</span></td>
                    <td><span className="text-slate-500">{r.user?.name}</span></td>
                    <td>
                      <span className={`badge ${r.isSequential ? 'badge-blue' : 'badge-amber'}`}>
                        {r.isSequential ? "Sequential" : "Parallel"}
                      </span>
                    </td>
                    <td><span className="text-slate-500">{r.isManagerApprover ? "Yes" : "No"}</span></td>
                    <td><span className="font-semibold text-slate-800">{r.minApprovalPercentage}%</span></td>
                    <td>
                      {r.steps?.length > 0 ? (
                        <div className="flex items-center gap-1.5 text-[12px]">
                          {r.steps.map((s: any, i: number) => (
                            <span key={s.id} className="flex items-center gap-1.5">
                              <span className={`px-2 py-0.5 rounded-md ${s.isRequired ? 'bg-red-50 text-red-600 font-semibold border border-red-100' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}>
                                {s.approver?.name}
                              </span>
                              {i < r.steps.length - 1 && (r.isSequential ? <ArrowRight className="w-3 h-3 text-slate-300" /> : <span className="text-slate-300">|</span>)}
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
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setShowModal(false)} />
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 w-full max-w-[680px] max-h-[90vh] overflow-y-auto relative z-10 animate-slide-up transform transition-all flex flex-col hide-scrollbar">
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h2 className="text-[18px] font-bold text-slate-800">Create Approval Rule</h2>
              <button type="button" onClick={() => setShowModal(false)} className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-7">
              {/* 1. Rule Name + Description */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-slate-600 mb-2">Rule Name <span className="text-red-500">*</span></label>
                  <input required value={form.ruleName} onChange={e => setForm({ ...form, ruleName: e.target.value })}
                    className="input-soft" placeholder="e.g. Travel Expense Policy" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-slate-600 mb-2">Description</label>
                  <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    className="input-soft" placeholder="Optional description..." />
                </div>
              </div>

              {/* 2. User Selection */}
              <div>
                <label className="block text-[13px] font-medium text-slate-600 mb-2">Target User <span className="text-red-500">*</span></label>
                <select required value={form.userId} onChange={e => setForm({ ...form, userId: e.target.value })}
                  className="input-soft">
                  <option value="">Select user this rule applies to...</option>
                  {users.filter(u => u.role !== "ADMIN").map(u => (
                    <option key={u.id} value={u.id}>{u.name} ({u.email})</option>
                  ))}
                </select>
                {selectedUser?.managerId && (
                  <p className="text-[12px] text-slate-400 mt-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" /> Default manager: <strong className="text-slate-600 font-medium">{users.find(u => u.id === selectedUser.managerId)?.name || "Unknown"}</strong>
                  </p>
                )}
              </div>

              {/* 3. Rule Settings */}
              <div className="bg-slate-50/50 rounded-2xl p-6 space-y-4 border border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rule Configuration</p>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={form.isManagerApprover} onChange={e => setForm({ ...form, isManagerApprover: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 transition-colors" />
                  <div>
                    <span className="text-[14px] font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">Manager approval required first</span>
                    <p className="text-[12px] text-slate-400 mt-0.5">If checked, the user's manager is automatically added as Step 0 (must approve before others).</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" checked={form.isSequential} onChange={e => setForm({ ...form, isSequential: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 transition-colors" />
                  <div>
                    <span className="text-[14px] font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">Sequential approval flow</span>
                    <p className="text-[12px] text-slate-400 mt-0.5">
                      {form.isSequential
                        ? "✓ Approvals happen one-by-one in order."
                        : "All approvers are notified simultaneously and can act in any order."}
                    </p>
                  </div>
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <label className="text-[14px] font-semibold text-slate-700 whitespace-nowrap">Min. Approval %</label>
                  <input type="number" min={1} max={100} value={form.minApprovalPercentage}
                    onChange={e => setForm({ ...form, minApprovalPercentage: parseInt(e.target.value) || 100 })}
                    className="input-soft w-24 text-center font-mono font-medium" />
                  <span className="text-[12px] text-slate-400">Required percentage of approvers to pass</span>
                </div>
              </div>

              {/* 4. Approvers Table */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <UsersIcon className="w-4 h-4 text-indigo-500" />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800">Approval Steps</span>
                  </div>
                  <button type="button" onClick={addStep}
                    className="text-[12px] bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg font-semibold hover:bg-indigo-100 transition-colors flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" /> Add Approver
                  </button>
                </div>

                {steps.length === 0 ? (
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center bg-slate-50/50">
                    <Info className="w-5 h-5 text-slate-300 mx-auto mb-2" />
                    <p className="text-[13px] text-slate-400">No approvers added yet. Click "Add Approver" above.</p>
                  </div>
                ) : (
                  <div className="border border-slate-100 rounded-xl overflow-hidden bg-white shadow-sm">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                          <th className="px-5 py-3 text-left text-[12px] font-semibold text-slate-500 uppercase tracking-wider w-12">#</th>
                          <th className="px-5 py-3 text-left text-[12px] font-semibold text-slate-500 uppercase tracking-wider">Approver</th>
                          <th className="px-5 py-3 text-center text-[12px] font-semibold text-slate-500 uppercase tracking-wider w-24">Required</th>
                          <th className="px-5 py-3 text-center text-[12px] font-semibold text-slate-500 uppercase tracking-wider w-16"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {steps.map((step, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-5 py-3">
                              <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[11px] font-bold text-slate-500">{idx + 1}</span>
                            </td>
                            <td className="px-5 py-3">
                              <select value={step.approverId} onChange={e => updateStep(idx, "approverId", e.target.value)}
                                className="w-full px-3 py-2 text-[13px] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white">
                                <option value="">Select approver...</option>
                                {approverCandidates.filter(u => u.id === step.approverId || !selectedApproverIds.includes(u.id)).map(u => (
                                  <option key={u.id} value={u.id}>{u.name} ({u.role})</option>
                                ))}
                              </select>
                            </td>
                            <td className="px-5 py-3 text-center">
                              <label className="flex items-center justify-center cursor-pointer" title="If checked, rejection instantly rejects the request">
                                <input type="checkbox" checked={step.isRequired} onChange={e => updateStep(idx, "isRequired", e.target.checked)}
                                  className="w-4 h-4 rounded border-slate-300 text-red-500 focus:ring-red-200 transition-colors" />
                              </label>
                            </td>
                            <td className="px-5 py-3 text-center">
                              <button type="button" onClick={() => removeStep(idx)} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {steps.some(s => s.isRequired) && (
                  <div className="mt-3 flex items-start gap-2 text-[12px] text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Required</strong> approvers can instantly reject requests. Use carefully.</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="pt-6 flex gap-3 border-t border-slate-100">
                <button type="button" onClick={() => setShowModal(false)}
                  className="flex-1 btn-secondary text-[14px]">Cancel</button>
                <button type="submit" disabled={isSubmitting}
                  className="flex-1 btn-primary text-[14px] flex items-center justify-center">
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
