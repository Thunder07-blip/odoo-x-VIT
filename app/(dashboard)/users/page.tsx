"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, ShieldAlert } from "lucide-react";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => {
        if (json.success) setUsers(json.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Workspace Users</h1>
        <button className="bg-primary text-white px-4 py-2.5 rounded-md shadow-sm font-medium text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>
      <p className="text-sm text-slate-500 mb-6">Manage roles and permissions mapping exclusively for your company environment.</p>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
           <div className="p-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>
        ) : users.length === 0 ? (
           <div className="p-12 text-center text-slate-500">No users found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Member Since</th>
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
                      <td className="px-6 py-4 text-slate-500">{new Date(u.createdAt).toLocaleDateString()}</td>
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
