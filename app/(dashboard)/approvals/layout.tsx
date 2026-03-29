import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ApprovalsLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  
  if (!session) {
    redirect("/login");
  }

  // Double check directly with DB for high assurance
  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { role: true }
  });

  if (!user || user.role === "EMPLOYEE") {
    // If the persona is just an Employee, they definitively shouldn't access the exact /approvals overarching layout.
    // Kick them directly back to the Dashboard.
    redirect("/dashboard");
  }

  return <>{children}</>;
}
