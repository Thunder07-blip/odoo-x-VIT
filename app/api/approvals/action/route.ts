import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { evaluateApproval } from "@/lib/approval-engine";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { expenseId, action, comment } = body;

    if (!expenseId || !["APPROVE", "REJECT"].includes(action)) {
       return NextResponse.json({ success: false, message: "Invalid action payload" }, { status: 400 });
    }

    const approvalRecord = await prisma.expenseApproval.findFirst({
      where: {
        expenseId,
        approverId: session.userId,
        status: "PENDING"
      }
    });

    if (!approvalRecord) {
      return NextResponse.json({ success: false, message: "No pending approval found for you on this expense" }, { status: 404 });
    }

    await prisma.expenseApproval.update({
      where: { id: approvalRecord.id },
      data: {
        status: action === "APPROVE" ? "APPROVED" : "REJECTED",
        comment: comment || null,
        actedAt: new Date()
      }
    });

    const newStatus = await evaluateApproval(expenseId);

    return NextResponse.json({ success: true, message: `Action recorded. Expense is now ${newStatus}` });
  } catch (error) {
    console.error("POST approval action error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
