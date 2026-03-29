"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, ShieldAlert, X, Mail } from "lucide-react";
import { toast } from "sonner";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sendingEmailId, setSendingEmailId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "EMPLOYEE",
    managerId: ""
  });

  const fetchUsers = () => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        if (json.success) setUsers(json.data);
        setLoading(false);
      });
  };

  useEffect(() => { fetchUsers(); }, []);

  const getManagerName = (managerId: string) => {
    if (!managerId) return "—";
    const manager = users.find(u => u.id === managerId);
    return manager ? manager.name : "Unknown";
  };

  const potentialManagers = users.filter(u => u.role === "MANAGER" || u.role === "ADMIN");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.password || !formData.role) {
       toast.error("Please fill out all primary fields.");
       setIsSubmitting(false);
       return;
    }
    if (formData.role !== "ADMIN" && !formData.managerId) {
       toast.error("Manager Assignment is strictly required for Employees and Managers.");
       setIsSubmitting(false);
       return;
    }

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           ...formData,
           managerId: formData.role === "ADMIN" ? null : formData.managerId
        })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to create user");
      
      toast.success("User successfully added to workspace.");
      setShowModal(false);
      setFormData({ name: "", email: "", password: "", role: "EMPLOYEE", managerId: "" });
      fetchUsers();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendPassword = async (userId: string, email: string) => {
    setSendingEmailId(userId);
    try {
      const res = await fetch("/api/users/send-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, email })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      
      toast.success(`Password credentials securely dispatched to ${email}!`);
    } catch (err: any) {
      toast.error(err.message || "Failed to send email");
    } finally {
      setSendingEmailId(null);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Workspace Users</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-primary text-white px-4 py-2.5 rounded-md shadow-sm font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
             <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        ) : users.length === 0 ? (
             <div className="p-12 text-center text-slate-500">No users configured.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Manager Linked</th>
                  <th className="px-6 py-3 font-medium">Member Since</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                 {users.map(u => (
                   <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{u.name}</td>
                      <td className="px-6 py-4 text-slate-500">{u.email}</td>
                      <td className="px-6 py-4">
                        {u.role === "ADMIN" ? (
                           <span className="px-2 py-1 bg-purple-100 text-purple-700 text-[11px] font-bold rounded flex w-fit uppercase items-center gap-1"><ShieldAlert className="w-3 h-3" /> Admin</span>
                        ) : u.role === "MANAGER" ? (
                           <span className="px-2 py-1 bg-blue-100 text-blue-700 text-[11px] font-bold rounded flex w-fit uppercase">Manager</span>
                        ) : (
                           <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded flex w-fit uppercase">Employee</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-slate-500 font-medium">{getManagerName(u.managerId)}</td>
                      <td className="px-6 py-4 text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-right">
                         {u.role !== "ADMIN" && (
                           <button 
                             disabled={sendingEmailId === u.id}
                             onClick={() => handleSendPassword(u.id, u.email)}
                             className="text-xs bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded flex items-center gap-1.5 ml-auto font-medium transition-colors disabled:opacity-50"
                           >
                             {sendingEmailId === u.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Mail className="w-3 h-3" />}
                             Send Password
                           </button>
                         )}
                      </td>
                   </tr>
                 ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md overflow-hidden relative z-10 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">Provision New User</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 transition-colors bg-white hover:bg-slate-100 p-1 rounded-md border border-slate-200">
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <form onSubmit={handleCreateUser} className="p-6 space-y-4">
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Alex Chen" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Work Email</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="alex@company.com" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Temporary Default Password</label>
                  <input type="text" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Generates default value..." />
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Security Role</label>
                    <select required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value, managerId: e.target.value === "ADMIN" ? "" : formData.managerId})} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="EMPLOYEE">Employee</option>
                      <option value="MANAGER">Manager</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                 </div>
                 
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Assigned Manager</label>
                    <select 
                      required={formData.role !== "ADMIN"} 
                      disabled={formData.role === "ADMIN"}
                      value={formData.managerId} 
                      onChange={e => setFormData({...formData, managerId: e.target.value})} 
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50 disabled:text-slate-400"
                    >
                      <option value="">{formData.role === "ADMIN" ? "N/A" : "Select Approver..."}</option>
                      {potentialManagers.map(m => (
                        <option key={m.id} value={m.id}>{m.name}</option>
                      ))}
                    </select>
                 </div>
               </div>

               <div className="pt-6 flex gap-3">
                 <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium transition-colors text-sm">Cancel</button>
                 <button type="submit" disabled={isSubmitting} className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 shadow-sm font-medium transition-colors flex items-center justify-center text-sm disabled:opacity-70">
                   {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Provision User"}
                 </button>
               </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
