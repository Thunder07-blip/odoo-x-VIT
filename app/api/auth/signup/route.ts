import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, companyName, country, currency } = body;

    // Validate
    if (!name || !email || !password || !companyName) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    // Check existing email
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 });
    }

    // Create Company
    const company = await prisma.company.create({
      data: {
        name: companyName,
        country: country || "US",
        currencyCode: currency || "USD",
      },
    });

    // Create Admin User
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "ADMIN",
        companyId: company.id,
      },
    });

    // Generate Token
    const token = signToken({
      userId: user.id,
      companyId: user.companyId,
      role: user.role,
    });

    // Set HTTP-only Cookie
    const res = NextResponse.json({ success: true, message: "Signup successful" }, { status: 201 });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
