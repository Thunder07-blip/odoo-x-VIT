import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendCredentialsEmail } from "@/services/email";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session || session.role !== "ADMIN") return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 403 });

    const { userId, email, password } = await req.json();

    if (!userId || !email || !password) {
      return NextResponse.json({ success: false, message: "userId, email and password are required" }, { status: 400 });
    }

    // Fetch user + company for the email template
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { company: { select: { name: true } } },
    });

    if (!user) return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });

    await sendCredentialsEmail({
      to: email,
      name: user.name,
      password,
      companyName: user.company.name,
      role: user.role,
    });

    return NextResponse.json({ success: true, message: `Login credentials sent to ${email}` });
  } catch (error: any) {
    console.error("send-password error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to send email" }, { status: 500 });
  }
}
