import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized: Admins only" }, { status: 403 });
    }

    const { id } = await params;
    const body = await req.json();
    const { role, managerId } = body;

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user || user.companyId !== session.companyId) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const updated = await prisma.user.update({
      where: { id },
      data: {
        role: role !== undefined ? role : undefined,
        managerId: managerId !== undefined ? managerId : undefined,
      },
      select: { id: true, name: true, email: true, role: true, managerId: true },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("PUT user error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized: Admins only" }, { status: 403 });
    }

    const { id } = await params;
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user || user.companyId !== session.companyId) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({ where: { id } });

    return NextResponse.json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("DELETE user error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
