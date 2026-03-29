import { ExpenseForm } from "@/components/expense/expense-form";

export default function NewExpensePage() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Submit New Expense</h1>
        <p className="text-sm text-slate-500 mt-1">Fill out the details below or upload a receipt for Auto-fill.</p>
      </div>
      <ExpenseForm />
    </div>
  );
}
