"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, ShieldAlert, X, Mail, Pencil, Users as UsersIcon } from "lucide-react";
import { toast } from "sonner";

const EMPTY_FORM = { name: "", email: "", password: "", role: "EMPLOYEE", managerId: "" };

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Create modal
  const [showCreate, setShowCreate] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ ...EMPTY_FORM });

  // Edit modal
  const [editUser, setEditUser] = useState<any>(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", role: "", managerId: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Send password
  const [sendingEmailId, setSendingEmailId] = useState<string | null>(null);

  const fetchUsers = () => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => { if (json.success) setUsers(json.data); setLoading(false); });
  };

  useEffect(() => { fetchUsers(); }, []);

  const getManagerName = (managerId: string) => {
    if (!managerId) return "—";
    const m = users.find(u => u.id === managerId);
    return m ? m.name : "Unknown";
  };

  const potentialManagers = users.filter(u => u.role === "MANAGER" || u.role === "ADMIN");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.role !== "ADMIN" && !formData.managerId) {
      toast.error("Please assign a manager for this role."); return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, managerId: formData.role === "ADMIN" ? null : formData.managerId })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("User added to workspace.");
      setShowCreate(false);
      setFormData({ ...EMPTY_FORM });
      fetchUsers();
    } catch (err: any) { toast.error(err.message); }
    finally { setIsSubmitting(false); }
  };

  const openEdit = (u: any) => {
    setEditUser(u);
    setEditForm({ name: u.name, email: u.email, role: u.role, managerId: u.managerId || "", password: "" });
  };

  const handleEditUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
    try {
      const res = await fetch(`/api/users/${editUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editForm.name,
          email: editForm.email,
          role: editForm.role,
          managerId: editForm.role === "ADMIN" ? null : editForm.managerId,
          password: editForm.password || undefined,
        })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success("User updated successfully.");
      setEditUser(null);
      fetchUsers();
    } catch (err: any) { toast.error(err.message); }
    finally { setIsEditing(false); }
  };

  const handleSendPassword = async (userId: string, email: string) => {
    setSendingEmailId(userId);
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$";
    const pwd = Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    try {
      const res = await fetch("/api/users/send-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, email, password: pwd })
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message);
      toast.success(`Auto-generated password sent to ${email}!`);
    } catch (err: any) { toast.error(err.message || "Failed to send email"); }
    finally { setSendingEmailId(null); }
  };

  const renderFormFields = (fd: any, setFd: any) => (
    <>
      <div>
        <label className="block text-[13px] font-medium text-slate-600 mb-2">Full Name</label>
        <input required value={fd.name} onChange={e => setFd({ ...fd, name: e.target.value })} className="input-soft" placeholder="Alex Chen" />
      </div>
      <div>
        <label className="block text-[13px] font-medium text-slate-600 mb-2">Work Email</label>
        <input type="email" required value={fd.email} onChange={e => setFd({ ...fd, email: e.target.value })} className="input-soft" placeholder="alex@company.com" />
      </div>
      <div>
        <label className="block text-[13px] font-medium text-slate-600 mb-2">Password {editUser && <span className="text-slate-400 font-normal ml-1">(leave blank to keep current)</span>}</label>
        <input type="text" required={!editUser} value={fd.password} onChange={e => setFd({ ...fd, password: e.target.value })} className="input-soft" placeholder={editUser ? "Enter new password to change..." : "Temporary password..."} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-slate-600 mb-2">Role</label>
          <select required value={fd.role} onChange={e => setFd({ ...fd, role: e.target.value, managerId: e.target.value === "ADMIN" ? "" : fd.managerId })} className="input-soft">
            <option value="EMPLOYEE">Employee</option>
            <option value="MANAGER">Manager</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-medium text-slate-600 mb-2">Manager</label>
          <select required={fd.role !== "ADMIN"} disabled={fd.role === "ADMIN"} value={fd.managerId} onChange={e => setFd({ ...fd, managerId: e.target.value })} className="input-soft disabled:opacity-60 disabled:bg-slate-100 disabled:cursor-not-allowed">
            <option value="">{fd.role === "ADMIN" ? "N/A" : "Select..."}</option>
            {potentialManagers.map((m: any) => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </div>
      </div>
    </>
  );

  return (
    <div className="space-y-6 animate-fade-in stagger relative">
      <div className="flex justify-between items-center">
        <div className="page-header">
          <h1>Workspace Users</h1>
          <p>Manage access, roles, and hierarchy across the workspace.</p>
        </div>
        <button onClick={() => setShowCreate(true)} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="card overflow-hidden">
        {loading ? <div className="p-16 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-primary opacity-50" /></div>
        : users.length === 0 ? (
          <div className="p-20 text-center flex flex-col items-center justify-center">
             <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-400">
               <UsersIcon className="w-8 h-8" />
             </div>
             <h3 className="text-[18px] font-bold text-slate-800 mb-1">No users found</h3>
          </div>
        )
        : (
          <div className="overflow-x-auto">
            <table className="table-premium">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Manager</th>
                  <th>Since</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td>
                      <div className="font-semibold text-slate-800">{u.name}</div>
                    </td>
                    <td>
                      <span className="text-slate-500">{u.email}</span>
                    </td>
                    <td>
                      {u.role === "ADMIN" ? <span className="badge badge-purple"><ShieldAlert className="w-3 h-3" /> Admin</span>
                      : u.role === "MANAGER" ? <span className="badge badge-blue">Manager</span>
                      : <span className="badge badge-slate">Employee</span>}
                    </td>
                    <td><span className="text-slate-500">{getManagerName(u.managerId)}</span></td>
                    <td><span className="text-slate-500">{new Date(u.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span></td>
                    <td>
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => openEdit(u)} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Edit user">
                          <Pencil className="w-4 h-4" />
                        </button>
                        {u.role !== "ADMIN" && (
                          <button disabled={sendingEmailId === u.id} onClick={() => handleSendPassword(u.id, u.email)}
                            className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium hover:bg-slate-100 transition-colors text-[12px] border border-slate-200 disabled:opacity-50">
                            {sendingEmailId === u.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Mail className="w-3.5 h-3.5" />}
                            Send Password
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CREATE MODAL */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setShowCreate(false)} />
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 w-full max-w-md relative z-10 animate-slide-up transform transition-all flex flex-col hide-scrollbar">
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h2 className="text-[18px] font-bold text-slate-800">Add New User</h2>
              <button type="button" onClick={() => setShowCreate(false)} className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={handleCreateUser} className="p-8 space-y-5">
              {renderFormFields(formData, setFormData)}
              <div className="pt-6 flex gap-3 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setShowCreate(false)} className="flex-1 btn-secondary text-[14px]">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="flex-1 btn-primary text-[14px] flex items-center justify-center disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => setEditUser(null)} />
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 w-full max-w-md relative z-10 animate-slide-up transform transition-all flex flex-col hide-scrollbar">
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 bg-white sticky top-0 z-10">
              <h2 className="text-[18px] font-bold text-slate-800">Edit User</h2>
              <button type="button" onClick={() => setEditUser(null)} className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"><X className="w-4 h-4" /></button>
            </div>
            <form onSubmit={handleEditUser} className="p-8 space-y-5">
              {renderFormFields(editForm, setEditForm)}
              <div className="pt-6 flex gap-3 border-t border-slate-100 mt-6">
                <button type="button" onClick={() => setEditUser(null)} className="flex-1 btn-secondary text-[14px]">Cancel</button>
                <button type="submit" disabled={isEditing} className="flex-1 btn-primary text-[14px] flex items-center justify-center disabled:opacity-70">
                  {isEditing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
