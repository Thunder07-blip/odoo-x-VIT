import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const approvals = await prisma.expenseApproval.findMany({
      where: {
        approverId: session.userId,
      },
      include: {
        expense: {
          include: { employee: { select: { name: true, email: true } } }
        }
      },
      orderBy: { expense: { createdAt: "desc" } }
    });

    return NextResponse.json({ success: true, data: approvals });
  } catch (error) {
    console.error("GET approvals error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
