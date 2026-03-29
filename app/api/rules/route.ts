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

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });

    const body = await req.json();
    const { userId, ruleName, description, isManagerApprover, isSequential, minApprovalPercentage, steps } = body;

    if (!userId || !ruleName) {
      return NextResponse.json({ success: false, message: "userId and ruleName are required" }, { status: 400 });
    }

    if (!steps || steps.length === 0) {
      return NextResponse.json({ success: false, message: "At least one approval step is required" }, { status: 400 });
    }

    // Validate user belongs to company
    const user = await prisma.user.findFirst({ where: { id: userId, companyId: session.companyId } });
    if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    const rule = await prisma.approvalRule.create({
      data: {
        companyId: session.companyId,
        userId,
        ruleName,
        description: description || null,
        isManagerApprover: isManagerApprover || false,
        isSequential: isSequential || false,
        minApprovalPercentage: minApprovalPercentage || 100,
        steps: {
          create: steps.map((s: any, i: number) => ({
            approverId: s.approverId,
            stepOrder: s.stepOrder ?? i + 1,
            isRequired: s.isRequired || false,
          }))
        }
      },
      include: {
        user: { select: { name: true, email: true } },
        steps: {
          include: { approver: { select: { name: true } } },
          orderBy: { stepOrder: 'asc' }
        }
      }
    });

    return NextResponse.json({ success: true, data: rule }, { status: 201 });
  } catch (error) {
    console.error("POST rules error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
