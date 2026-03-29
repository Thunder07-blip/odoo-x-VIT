import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    
    const expense = await prisma.expense.findUnique({
      where: { id },
      include: {
        employee: { select: { name: true, email: true } },
        approvals: { include: { approver: { select: { name: true, role: true } } }, orderBy: { stepOrder: "asc" } },
        ocrData: true
      }
    });

    if (!expense || expense.companyId !== session.companyId) {
      return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    }

    if (session.role === "EMPLOYEE" && expense.employeeId !== session.userId) {
       // Typically, you might want to allow approvers to view it too, but let's assume
       // an employee can only see their own. Managers and Admins can see all.
       const isApprover = expense.approvals.some(a => a.approverId === session.userId);
       if (!isApprover) {
          return NextResponse.json({ success: false, message: "Unauthorized: Not your expense" }, { status: 403 });
       }
    }

    return NextResponse.json({ success: true, data: expense });
  } catch (error) {
    console.error("GET expense ID error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
