import jwt from "jsonwebtoken";
import { Role } from "../prisma/generated/prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "default_hackathon_secret_123";

export interface TokenPayload {
  userId: string;
  companyId: string;
  role: Role;
}

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
