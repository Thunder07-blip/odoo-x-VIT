import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("123456", 10);

  const company = await prisma.company.create({
    data: {
      name: "DemoCorp",
      country: "India",
      currencyCode: "INR"
    }
  });

  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@demo.com",
      passwordHash: password,
      role: "ADMIN",
      companyId: company.id
    }
  });

  const manager = await prisma.user.create({
    data: {
      name: "Manager",
      email: "manager@demo.com",
      passwordHash: password,
      role: "MANAGER",
      companyId: company.id
    }
  });

  const employee = await prisma.user.create({
    data: {
      name: "Employee",
      email: "employee@demo.com",
      passwordHash: password,
      role: "EMPLOYEE",
      companyId: company.id,
      managerId: manager.id
    }
  });

  // Setup a sample approval rule for the employee
  const rule = await prisma.approvalRule.create({
    data: {
      companyId: company.id,
      userId: employee.id,
      ruleName: "Standard Expense Policy",
      description: "Manager first, then Admin",
      isManagerApprover: true,
      isSequential: true,
      minApprovalPercentage: 100
    }
  });

  // Since Manager is added automatically via `isManagerApprover` as step 0 dynamically by our logic,
  // we just need to add the Admin as the required step.
  await prisma.approvalStep.create({
    data: {
      ruleId: rule.id,
      approverId: admin.id,
      stepOrder: 1,
      isRequired: true
    }
  });

  console.log("Seed data created 🚀");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
