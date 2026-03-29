"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

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
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
             <span className="font-bold text-xl">EF</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Sign in to ExpenseFlow</h1>
          <p className="text-slate-500 text-sm">Welcome back! Please enter your details.</p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              name="email"
              type="email" 
              required 
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              name="password"
              type="password" 
              required 
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70 mt-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have an account? <Link href="/signup" className="text-primary hover:underline font-medium">Create workspace</Link>
        </div>
      </div>
    </div>
  );
}
