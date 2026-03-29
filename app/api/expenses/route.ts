import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { generateApprovalChain } from "@/lib/approval-engine";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { amount, currency, category, description, remarks, date, receiptUrl } = body;

    if (!amount || !currency || !category || !description || !date) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Basic currency conversion mock (e.g. converting everything to USD internally or using company rate)
    // Production would call an external API or DB cached rates.
    const company = await prisma.company.findUnique({ where: { id: session.companyId } });
    if (!company) return NextResponse.json({ success: false, message: "Company error" }, { status: 400 });

    const rate = currency === company.currencyCode ? 1.0 : 1.2; // Dummy conversion
    const amountConverted = amount * rate;

    // Create Expense
    const expense = await prisma.expense.create({
      data: {
        companyId: session.companyId,
        employeeId: session.userId,
        amountOriginal: amount,
        currencyOriginal: currency,
        amountConverted,
        category,
        description,
        remarks: remarks || "",
        date: new Date(date),
        receiptUrl: receiptUrl || null,
        status: "SUBMITTED"
      }
    });

    // Trigger Approval Engine
    await generateApprovalChain(expense.id, session.companyId, session.userId);

    // Refetch the updated expense with approvals
    const updatedExpense = await prisma.expense.findUnique({
      where: { id: expense.id },
      include: { approvals: true }
    });

    return NextResponse.json({ success: true, data: updatedExpense }, { status: 201 });
  } catch (error) {
    console.error("POST expense error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const filterStatus = searchParams.get("status");

    const whereClause: any = { companyId: session.companyId };

    // Employees only see their own expenses unless they are ADMIN or fetching approvals (handled elsewhere)
    if (session.role === "EMPLOYEE") {
      whereClause.employeeId = session.userId;
    }
    
    if (filterStatus) {
      whereClause.status = filterStatus;
    }

    const expenses = await prisma.expense.findMany({
      where: whereClause,
      include: { approvals: true, employee: { select: { name: true, email: true } } },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json({ success: true, data: expenses });
  } catch (error) {
    console.error("GET expenses error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
