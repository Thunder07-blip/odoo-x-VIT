import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import bcrypt from "bcrypt";

export async function GET(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const users = await prisma.user.findMany({
      where: { companyId: session.companyId },
      select: { id: true, name: true, email: true, role: true, managerId: true, createdAt: true },
    });

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error("GET users error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") {
      return NextResponse.json({ success: false, message: "Unauthorized: Admins only" }, { status: 403 });
    }

    const body = await req.json();
    const { name, email, password, role, managerId } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
        managerId: managerId || null,
        companyId: session.companyId,
      },
      select: { id: true, name: true, email: true, role: true, managerId: true },
    });

    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    console.error("POST user error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
