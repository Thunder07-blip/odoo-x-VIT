import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import bcrypt from "bcrypt";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });

    const { id } = await params;
    const { name, email, role, managerId, password } = await req.json();

    // Ensure user belongs to this company
    const existing = await prisma.user.findFirst({ where: { id, companyId: session.companyId } });
    if (!existing) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    const updateData: any = {};
    if (name) updateData.name = name;
    if (role) updateData.role = role;
    if (managerId !== undefined) updateData.managerId = role === "ADMIN" ? null : (managerId || null);
    if (password) updateData.passwordHash = await bcrypt.hash(password, 10);

    if (email && email !== existing.email) {
      const conflict = await prisma.user.findFirst({ where: { email, NOT: { id } } });
      if (conflict) return NextResponse.json({ success: false, message: "Email already in use" }, { status: 400 });
      updateData.email = email;
    }

    const updated = await prisma.user.update({
      where: { id },
      data: updateData,
      select: { id: true, name: true, email: true, role: true, managerId: true, createdAt: true },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error("PATCH user error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
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
