"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2, Sparkles, UserCircle, ShieldCheck, Briefcase } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to login");
      toast.success("Welcome back!");
      router.push("/dashboard");
    } catch (err: any) { toast.error(err.message); }
    finally { setLoading(false); }
  };

  const loginAs = async (email: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: "123456" })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to login");
      toast.success(`Logged in as ${email.split('@')[0]}`);
      router.push("/dashboard");
    } catch (err: any) { toast.error(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #faf5ff 100%)' }}>
      <div className="w-full max-w-[420px] animate-fade-in">
        <div className="card p-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white shadow-lg"
              style={{ background: 'var(--gradient-primary)' }}>
              <Sparkles className="w-7 h-7" />
            </div>
            <h1 className="text-[24px] font-bold text-slate-800 tracking-tight">Welcome back</h1>
            <p className="text-slate-400 text-[14px] mt-1">Sign in to your ExpenseFlow workspace</p>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Email</label>
              <input name="email" type="email" required className="input-soft" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Password</label>
              <input name="password" type="password" required className="input-soft" placeholder="••••••••" />
            </div>
            
            <button disabled={loading} type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-2">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              Sign In
            </button>
          </form>

          {/* Demo logins */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full" style={{ borderTop: '1px solid #f1f5f9' }}></div></div>
              <div className="relative flex justify-center text-[12px]"><span className="px-3 bg-white text-slate-400 font-medium">Quick Demo Access</span></div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <button type="button" onClick={() => loginAs("employee@demo.com")} disabled={loading}
                className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-all text-[11px] font-medium disabled:opacity-50">
                <Briefcase className="w-4 h-4" />Employee
              </button>
              <button type="button" onClick={() => loginAs("manager@demo.com")} disabled={loading}
                className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 transition-all text-[11px] font-medium disabled:opacity-50">
                <UserCircle className="w-4 h-4" />Manager
              </button>
              <button type="button" onClick={() => loginAs("admin@demo.com")} disabled={loading}
                className="flex flex-col items-center gap-1.5 py-3 rounded-xl bg-slate-50 hover:bg-purple-50 hover:text-purple-600 text-slate-500 transition-all text-[11px] font-medium disabled:opacity-50">
                <ShieldCheck className="w-4 h-4" />Admin
              </button>
            </div>
          </div>
          
          <div className="mt-7 pt-6 text-center text-[13px] text-slate-400" style={{ borderTop: '1px solid #f8fafc' }}>
            Don't have an account? <Link href="/signup" className="text-indigo-500 hover:text-indigo-600 font-medium">Create workspace</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
