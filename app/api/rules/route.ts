import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });

    const rules = await prisma.approvalRule.findMany({
      where: { user: { companyId: session.companyId } },
      include: {
        user: { select: { name: true, email: true } },
        steps: { 
          include: { approver: { select: { name: true } } },
          orderBy: { stepOrder: 'asc' }
        }
      }
    });

    return NextResponse.json({ success: true, data: rules });
  } catch (error) {
    console.error("GET rules API logic failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
