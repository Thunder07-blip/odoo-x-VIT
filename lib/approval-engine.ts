import { prisma } from "./prisma";

/**
 * Generates the initial approval chain for a newly submitted expense.
 */
export async function generateApprovalChain(expenseId: string, companyId: string, employeeId: string) {
  const employee = await prisma.user.findUnique({
    where: { id: employeeId },
    include: { rules: { include: { steps: { orderBy: { stepOrder: 'asc' } } } } }
  });

  if (!employee) throw new Error("Employee not found");

  const rule = employee.rules[0];
  
  // If no detailed rule, we might just default to manager approval if no rule exists,
  // but let's strictly follow the rule if it exists or auto-approve if absolutely none.
  if (!rule) {
    // If there's no rule at all, auto-approve the expense as per edge cases.
    await prisma.expense.update({
      where: { id: expenseId },
      data: { status: "APPROVED" }
    });
    return;
  }

  const newApprovals = [];
  let currentStepIndex = 1;

  // 1. Manager Override
  if (rule.isManagerApprover && employee.managerId) {
    newApprovals.push({
      expenseId,
      approverId: employee.managerId,
      stepOrder: 0, // Manager is step 0
      status: "PENDING"
    });
  }

  // 2. Configured Steps
  const seenApprovers = new Set(newApprovals.map(a => a.approverId));

  for (const step of rule.steps) {
    if (!seenApprovers.has(step.approverId)) {
      newApprovals.push({
        expenseId,
        approverId: step.approverId,
        stepOrder: currentStepIndex++,
        status: "PENDING"
      });
      seenApprovers.add(step.approverId);
    }
  }

  if (newApprovals.length === 0) {
    // Auto approve if no valid approvers
    await prisma.expense.update({
      where: { id: expenseId },
      data: { status: "APPROVED" }
    });
    return;
  }

  // Insert all pending approvals
  await prisma.expenseApproval.createMany({
    data: newApprovals as any
  });

  // Set expense to IN_REVIEW
  await prisma.expense.update({
    where: { id: expenseId },
    data: { status: "IN_REVIEW" }
  });
}

/**
 * Evaluates the approval state after an approver takes an action.
 */
export async function evaluateApproval(expenseId: string) {
  const expense = await prisma.expense.findUnique({
    where: { id: expenseId },
    include: {
      approvals: { orderBy: { stepOrder: 'asc' } },
      employee: {
        include: { rules: { include: { steps: true } } }
      }
    }
  });

  if (!expense || expense.status === "APPROVED" || expense.status === "REJECTED") {
    return expense?.status; // Already finalized
  }

  const rule = expense.employee.rules[0];
  if (!rule) {
    await completeExpense(expenseId, "APPROVED");
    return "APPROVED";
  }

  const approvals = expense.approvals;
  const totalApprovers = approvals.length;
  
  if (totalApprovers === 0) {
    await completeExpense(expenseId, "APPROVED");
    return "APPROVED";
  }

  let approvedCount = 0;
  let isRejected = false;

  for (const approval of approvals) {
    // Check if this approval corresponds to a strictly required step
    const stepDef = rule.steps.find((s: any) => s.approverId === approval.approverId);
    const isRequired = stepDef ? stepDef.isRequired : false; // Manager step is not strictly required by default unless specified

    if (approval.status === "REJECTED") {
      isRejected = true;
      if (isRequired) {
        // Fast fail on required rejection
        await completeExpense(expenseId, "REJECTED");
        return "REJECTED";
      }
    }

    if (approval.status === "APPROVED") {
      approvedCount++;
    }
  }

  // Sequential Evaluation
  if (rule.isSequential) {
    // In sequential mode, any rejection kills the chain (or we wait for the required logic). 
    // Standard sequential logic means if the current pending step is blocked by a previous rejection, it fails.
    let sequentialFailed = false;
    let allProcessedTokens = true;

    for (let i = 0; i < approvals.length; i++) {
      if (approvals[i].status === "REJECTED") {
        sequentialFailed = true;
      }
      if (approvals[i].status === "PENDING") {
        allProcessedTokens = false;
        break; // Can't evaluate past pending in sequential
      }
    }

    if (sequentialFailed) {
      await completeExpense(expenseId, "REJECTED");
      return "REJECTED";
    }

    if (allProcessedTokens && approvedCount === totalApprovers) {
      await completeExpense(expenseId, "APPROVED");
      return "APPROVED";
    }
    
    return "IN_REVIEW";
  }

  // Parallel / Percentage Evaluation
  if (isRejected && approvedCount === 0 && approvals.every((a: any) => a.status !== "PENDING")) {
     // Everyone rejected
     await completeExpense(expenseId, "REJECTED");
     return "REJECTED";
  }

  const percentage = (approvedCount / totalApprovers) * 100;
  if (percentage >= rule.minApprovalPercentage) {
    await completeExpense(expenseId, "APPROVED");
    return "APPROVED";
  }

  // If all acted and threshold not met
  const allActed = approvals.every((a: any) => a.status !== "PENDING");
  if (allActed && percentage < rule.minApprovalPercentage) {
    await completeExpense(expenseId, "REJECTED");
    return "REJECTED";
  }

  return "IN_REVIEW";
}

async function completeExpense(expenseId: string, status: "APPROVED" | "REJECTED") {
  await prisma.expense.update({
    where: { id: expenseId },
    data: { status }
  });
}
