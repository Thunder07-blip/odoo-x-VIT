"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud, Bot, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ExpenseFormValues {
  amount: number;
  currency: string;
  date: string;
  category: string;
  description: string;
  vendor?: string;
}

export function ExpenseForm() {
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ExpenseFormValues>({
    defaultValues: {
      currency: "USD",
      category: "Other"
    }
  });

  const [isScanning, setIsScanning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiFilled, setAiFilled] = useState<Record<string, boolean>>({});

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsScanning(true);
    const reader = new FileReader();

    reader.onloadend = async () => {
      try {
        const base64 = (reader.result as string).split(",")[1];
        
        const res = await fetch("/api/ocr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64 })
        });
        
        const json = await res.json();
        
        if (!res.ok) throw new Error(json.message || "Failed to scan receipt");

        const data = json.data.extractedJson;
        
        if (data.amount) {
          setValue("amount", data.amount);
          setAiFilled(prev => ({ ...prev, amount: true }));
        }
        if (data.category) {
          setValue("category", data.category);
          setAiFilled(prev => ({ ...prev, category: true }));
        }
        if (data.description || data.vendor) {
          setValue("description", data.description || `Expense at ${data.vendor}`);
          setAiFilled(prev => ({ ...prev, description: true }));
        }
        if (data.date) {
          setValue("date", data.date);
          setAiFilled(prev => ({ ...prev, date: true }));
        }

        toast.success("AI extraction complete!");
      } catch (err: any) {
        toast.error("AI failed, please enter manually");
      } finally {
        setIsScanning(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: ExpenseFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to create expense");
      
      toast.success("Expense submitted successfully!");
      router.push("/expenses");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Expense Details</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Amount {aiFilled.amount && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-2">AI Filled</span>}
              </label>
              <input 
                type="number" step="0.01" 
                {...register("amount", { required: true, valueAsNumber: true })} 
                className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.amount ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Currency</label>
              <select {...register("currency")} className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date {aiFilled.date && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-2">AI Filled</span>}
            </label>
            <input 
              type="date"
              {...register("date", { required: true })} 
              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.date ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category {aiFilled.category && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-2">AI Filled</span>}
            </label>
            <select {...register("category", { required: true })} className={`w-full text-sm px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.category ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`}>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Office">Office Supplies</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description {aiFilled.description && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-2">AI Filled</span>}
            </label>
            <textarea 
              {...register("description", { required: true })} 
              rows={3}
              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.description ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} 
            />
          </div>
          
          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={() => router.back()} className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium transition-colors text-sm">
              Cancel
            </button>
            <button disabled={isSubmitting} type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 font-medium transition-colors flex items-center text-sm disabled:opacity-70">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Submit Expense
            </button>
          </div>
        </div>
      </form>

      <div className="w-full md:w-[320px] shrink-0 space-y-4">
        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 shadow-sm text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-3 shadow-sm border border-indigo-50">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800 mb-1">Smart Scan</h3>
          <p className="text-sm text-slate-500 mb-4 text-balance">Upload a receipt and Gemini AI will auto-fill the form instantly.</p>
          
          <div className="relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
              disabled={isScanning}
            />
            <button 
              disabled={isScanning}
              className="w-full flex items-center justify-center gap-2 bg-white border border-indigo-200 text-indigo-700 py-2.5 text-sm rounded-md hover:bg-indigo-50 font-medium transition-colors disabled:opacity-70"
            >
              {isScanning ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Scanning...</>
              ) : (
                <><UploadCloud className="w-4 h-4" /> Upload Receipt</>
              )}
            </button>
          </div>
          
          {Object.keys(aiFilled).length > 0 && !isScanning && (
             <div className="mt-4 pt-4 border-t border-indigo-100 flex items-center gap-2 text-sm text-success font-medium justify-center">
                <CheckCircle2 className="w-4 h-4" /> Form fields auto-filled
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
