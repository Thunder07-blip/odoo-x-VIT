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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Store file for form submission
    setReceiptFile(file);
    setReceiptPreview(URL.createObjectURL(file));

    // Also run OCR scan
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
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: ExpenseFormValues) => {
    if (!receiptFile) {
      toast.error("Receipt photo is required. Please upload one.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Convert receipt to base64 to send along with the expense
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
    <div className="flex flex-col md:flex-row gap-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Expense Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Amount {aiFilled.amount && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-2">AI Filled</span>}
              </label>
              <input type="number" step="0.01" {...register("amount", { required: true, valueAsNumber: true })}
                className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.amount ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} />
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
            <input type="date" {...register("date", { required: true })}
              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.date ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} />
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
            <textarea {...register("description", { required: true })} rows={3}
              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${aiFilled.description ? 'bg-primary/5 border-primary/30' : 'border-slate-300'}`} />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={() => router.back()} className="px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 font-medium transition-colors text-sm">Cancel</button>
            <button disabled={isSubmitting} type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 font-medium transition-colors flex items-center text-sm disabled:opacity-70">
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              Submit Expense
            </button>
          </div>
        </div>
      </form>

      <div className="w-full md:w-[320px] shrink-0 space-y-4">
        {/* Receipt Upload — REQUIRED */}
        <div className={`p-6 rounded-xl border shadow-sm text-center transition-colors ${receiptFile ? 'bg-green-50 border-green-200' : 'bg-gradient-to-br from-indigo-50 to-white border-indigo-100'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border ${receiptFile ? 'bg-green-100 text-green-600 border-green-200' : 'bg-white text-indigo-600 border-indigo-50'}`}>
            {receiptFile ? <CheckCircle2 className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          </div>
          <h3 className="font-bold text-slate-800 mb-1">
            {receiptFile ? "Receipt Uploaded ✓" : "Smart Scan"} <span className="text-danger text-sm">*</span>
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            {receiptFile ? receiptFile.name : "Upload a receipt photo (required). AI will auto-fill the form."}
          </p>

          {receiptPreview && (
            <img src={receiptPreview} alt="Receipt preview" className="w-full h-32 object-cover rounded-lg mb-3 border border-slate-200" />
          )}

          <div className="relative">
            <input type="file" accept="image/*" onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed" disabled={isScanning} />
            <button disabled={isScanning}
              className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm rounded-md font-medium transition-colors disabled:opacity-70 border ${receiptFile ? 'bg-white border-green-300 text-green-700 hover:bg-green-50' : 'bg-white border-indigo-200 text-indigo-700 hover:bg-indigo-50'}`}>
              {isScanning ? <><Loader2 className="w-4 h-4 animate-spin" /> Scanning...</> :
               receiptFile ? <><ImageIcon className="w-4 h-4" /> Replace Receipt</> :
               <><UploadCloud className="w-4 h-4" /> Upload Receipt</>}
            </button>
          </div>

          {Object.keys(aiFilled).length > 0 && !isScanning && (
            <div className="mt-4 pt-4 border-t border-indigo-100 flex items-center gap-2 text-sm text-success font-medium justify-center">
              <CheckCircle2 className="w-4 h-4" /> Form fields auto-filled
            </div>
          )}
        </div>

        {!receiptFile && (
          <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-700">
            <span className="font-bold mt-0.5">⚠</span>
            <span>A receipt photo is <strong>mandatory</strong> to submit this expense claim.</span>
          </div>
        )}
      </div>
    </div>
  );
}
