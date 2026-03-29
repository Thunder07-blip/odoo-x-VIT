import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const whereClause = session.role === "EMPLOYEE" ? { employeeId: session.userId } : { companyId: session.companyId };

    const expenses = await prisma.expense.findMany({
      where: whereClause,
      select: { status: true, amountConverted: true, category: true }
    });

    let totalAmount = 0;
    let pendingCount = 0;
    let approvedCount = 0;
    let rejectedCount = 0;
    const categoryBreakdown: Record<string, number> = {};

    for (const exp of expenses) {
      totalAmount += exp.amountConverted;
      if (exp.status === "PENDING" || exp.status === "IN_REVIEW" || exp.status === "SUBMITTED") pendingCount++;
      if (exp.status === "APPROVED") approvedCount++;
      if (exp.status === "REJECTED") rejectedCount++;

      categoryBreakdown[exp.category] = (categoryBreakdown[exp.category] || 0) + exp.amountConverted;
    }

    return NextResponse.json({
      success: true,
      data: {
        totalExpenses: expenses.length,
        totalAmount,
        pendingCount,
        approvedCount,
        rejectedCount,
        categoryBreakdown
      }
    });

  } catch (error) {
    console.error("GET analytics error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
