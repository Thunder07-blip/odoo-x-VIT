"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud, Bot, Loader2, CheckCircle2, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ExpenseFormValues {
  amount: number;
  currency: string;
  date: string;
  category: string;
  description: string;
}

export function ExpenseForm() {
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ExpenseFormValues>({
    defaultValues: { currency: "USD", category: "Other" }
  });

  const [isScanning, setIsScanning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiFilled, setAiFilled] = useState<Record<string, boolean>>({});
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [enableOcr, setEnableOcr] = useState(false);

  // Upload only stores the file — does NOT auto-run OCR
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setReceiptFile(file);
    setReceiptPreview(URL.createObjectURL(file));
  };

  // Separate OCR function — only triggered manually
  const runOcr = async () => {
    if (!receiptFile) { toast.error("Upload a receipt first."); return; }
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
        if (data.amount) { setValue("amount", data.amount); setAiFilled(p => ({ ...p, amount: true })); }
        if (data.category) { setValue("category", data.category); setAiFilled(p => ({ ...p, category: true })); }
        if (data.description || data.vendor) { setValue("description", data.description || `Expense at ${data.vendor}`); setAiFilled(p => ({ ...p, description: true })); }
        if (data.date) { setValue("date", data.date); setAiFilled(p => ({ ...p, date: true })); }
        toast.success("AI extraction complete!");
      } catch {
        toast.error("AI scan failed — please fill in manually.");
      } finally {
        setIsScanning(false);
      }
    };
    reader.readAsDataURL(receiptFile);
  };

  const onSubmit = async (data: ExpenseFormValues) => {
    if (!receiptFile) {
      toast.error("Receipt photo is required. Please upload one.");
      return;
    }

    setIsSubmitting(true);
    try {
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(receiptFile);
      });
      const receiptBase64 = await base64Promise;

      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, receiptBase64 })
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
    <div className="flex flex-col md:flex-row gap-8 animate-fade-in stagger">
      <form onSubmit={handleSubmit(onSubmit)} className="card flex-1 p-8">
        <h2 className="text-[18px] font-bold text-slate-800 mb-6">Expense Details</h2>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">
                Amount {aiFilled.amount && <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md ml-2 border border-indigo-100 font-bold">AI Filled</span>}
              </label>
              <input type="number" step="0.01" {...register("amount", { required: true, valueAsNumber: true })}
                className={`input-soft ${aiFilled.amount ? 'bg-indigo-50/50 border-indigo-200' : ''}`} />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-slate-600 mb-2">Currency</label>
              <select {...register("currency")} className="input-soft">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-slate-600 mb-2">
              Date {aiFilled.date && <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md ml-2 border border-indigo-100 font-bold">AI Filled</span>}
            </label>
            <input type="date" {...register("date", { required: true })}
              className={`input-soft ${aiFilled.date ? 'bg-indigo-50/50 border-indigo-200' : ''}`} />
          </div>

          <div>
            <label className="block text-[13px] font-medium text-slate-600 mb-2">
              Category {aiFilled.category && <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md ml-2 border border-indigo-100 font-bold">AI Filled</span>}
            </label>
            <select {...register("category", { required: true })} className={`input-soft ${aiFilled.category ? 'bg-indigo-50/50 border-indigo-200' : ''}`}>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Office">Office Supplies</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-slate-600 mb-2">
              Description {aiFilled.description && <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md ml-2 border border-indigo-100 font-bold">AI Filled</span>}
            </label>
            <textarea {...register("description", { required: true })} rows={3}
              className={`input-soft resize-none ${aiFilled.description ? 'bg-indigo-50/50 border-indigo-200' : ''}`} />
          </div>

          <div className="pt-6 flex justify-end gap-3 border-t border-slate-100 mt-6">
            <button type="button" onClick={() => router.back()} className="btn-secondary text-[14px]">Cancel</button>
            <button disabled={isSubmitting} type="submit" className="btn-primary text-[14px] flex items-center">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null} Submit Expense
            </button>
          </div>
        </div>
      </form>

      <div className="w-full md:w-[340px] shrink-0 space-y-5">
        {/* Receipt Upload */}
        <div className={`card p-6 text-center transition-colors ${receiptFile ? 'bg-emerald-50/30 border-emerald-100' : 'bg-white'}`}>
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm ${receiptFile ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-50 text-indigo-500'}`}>
            {receiptFile ? <CheckCircle2 className="w-6 h-6" /> : <UploadCloud className="w-6 h-6" />}
          </div>
          <h3 className="font-bold text-[16px] text-slate-800 mb-1.5">
            {receiptFile ? "Receipt Uploaded ✓" : "Receipt Photo"} <span className="text-red-500 text-[13px]">*</span>
          </h3>
          <p className="text-[13px] text-slate-500 mb-5">
            {receiptFile ? receiptFile.name : "Upload a receipt photo (required)."}
          </p>

          {receiptPreview && (
            <img src={receiptPreview} alt="Preview" className="w-full h-36 object-cover rounded-xl mb-4 shadow-sm bg-black" />
          )}

          <div className="relative">
            <input type="file" accept="image/*" onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <button type="button"
              className={`w-full flex items-center justify-center gap-2 py-3 text-[13px] rounded-xl font-bold transition-all border ${receiptFile ? 'bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'}`}>
              {receiptFile ? <><ImageIcon className="w-4 h-4" /> Replace Receipt</> : <><UploadCloud className="w-4 h-4" /> Upload File</>}
            </button>
          </div>
        </div>

        {!receiptFile && (
          <div className="flex items-start gap-2.5 p-4 bg-amber-50 border border-amber-200 rounded-xl text-[13px] text-amber-800 shadow-sm">
            <span className="text-[16px]">💡</span>
            <span className="pt-0.5 leading-snug">A receipt photo is <strong>mandatory</strong> to submit this expense claim.</span>
          </div>
        )}

        {/* AI Smart Scan */}
        <div className={`card p-5 transition-colors ${enableOcr ? 'bg-indigo-50/50 border-indigo-100' : 'bg-white'}`}>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" checked={enableOcr} onChange={e => setEnableOcr(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200 transition-colors" />
            <div>
              <span className="text-[14px] font-bold text-slate-800 flex items-center gap-1.5 group-hover:text-indigo-600 transition-colors">
                <Bot className={`w-4 h-4 ${enableOcr ? 'text-indigo-600' : 'text-slate-400'}`} /> Enable AI Smart Scan
              </span>
              <p className="text-[12px] text-slate-500 mt-1">Let Gemini AI automatically read your receipt and fill out the details.</p>
            </div>
          </label>

          {enableOcr && receiptFile && (
            <button type="button" onClick={runOcr} disabled={isScanning}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 text-[13px] rounded-xl font-bold transition-all btn-primary disabled:opacity-70">
              {isScanning ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing Receipt...</> : <><Bot className="w-4 h-4" /> Run Smart Scan</>}
            </button>
          )}

          {enableOcr && !receiptFile && (
            <p className="mt-3 text-[12px] font-medium text-amber-600 bg-amber-50 p-2.5 rounded-lg border border-amber-100 text-center">
              Upload a receipt above first.
            </p>
          )}

          {Object.keys(aiFilled).length > 0 && !isScanning && (
            <div className="mt-4 pt-4 border-t border-indigo-100 flex items-center gap-2 text-[13px] text-emerald-600 font-bold justify-center bg-emerald-50 rounded-lg p-2">
              <CheckCircle2 className="w-4 h-4" /> Form fields auto-filled!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
