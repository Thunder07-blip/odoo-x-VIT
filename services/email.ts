import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendCredentialsEmail({
  to,
  name,
  password,
  companyName,
  role,
}: {
  to: string;
  name: string;
  password: string;
  companyName: string;
  role: string;
}) {
  const html = `
    <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
      <div style="background: #581131; padding: 32px 40px;">
        <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 800;">ExpenseFlow</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Workspace Access Credentials</p>
      </div>
      <div style="padding: 40px;">
        <p style="color: #334155; font-size: 16px; margin-bottom: 8px;">Hi <strong>${name}</strong>,</p>
        <p style="color: #64748b; font-size: 14px; line-height: 1.6;">You have been added to the <strong>${companyName}</strong> workspace on ExpenseFlow as a <strong>${role}</strong>. Here are your login credentials:</p>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Login Details</p>
          <p style="margin: 4px 0; font-size: 15px; color: #1e293b;"><strong>Email:</strong> ${to}</p>
          <p style="margin: 4px 0; font-size: 15px; color: #1e293b;"><strong>Password:</strong> <code style="background: #e2e8f0; padding: 2px 8px; border-radius: 4px; font-family: monospace;">${password}</code></p>
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/login" style="display: inline-block; background: #581131; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Login to ExpenseFlow →</a>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 32px;">Please change your password after first login. If you have trouble accessing your account, contact your admin.</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"ExpenseFlow" <${process.env.GMAIL_USER}>`,
    to,
    subject: `Your ExpenseFlow Workspace Credentials — ${companyName}`,
    html,
  });
}
