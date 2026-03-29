import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { extractReceiptData } from "@/services/gemini";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { imageBase64 } = body;

    if (!imageBase64) {
      return NextResponse.json({ success: false, message: "Missing imageBase64 input payload" }, { status: 400 });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const extractedJson = await extractReceiptData(base64Data);

    return NextResponse.json({
        success: true, 
        data: { 
          rawText: JSON.stringify(extractedJson, null, 2),
          extractedJson,
          confidence: extractedJson.amount === 0 && extractedJson.vendor === "Unknown" ? 0.0 : 0.95
        }
    });

  } catch (error) {
    console.error("OCR API route error mapping execution:", error);
    return NextResponse.json({ success: false, message: "Server encountered a fatal OCR extraction error" }, { status: 500 });
  }
}
