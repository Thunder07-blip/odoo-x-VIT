import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const { imageBase64 } = body;

    if (!imageBase64) {
      return NextResponse.json({ success: false, message: "Missing imageBase64" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Mocked output for environments without the API Key
      return NextResponse.json({
        success: true,
        data: {
          rawText: "MOCK RECEIPT 100 USD",
          extractedJson: { amount: 100, currency: "USD", vendor: "Mock Vendor" },
          confidence: 0.95
        }
      });
    }

    // Process the base64 string
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: [
        {
          role: "user",
          parts: [
            { text: "Extract the receipt details into JSON format. Keys: amount (number), currency (string code), vendor (string), date (YYYY-MM-DD)." },
            {
              inlineData: {
                data: base64Data,
                mimeType: "image/jpeg"
              }
            }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
      }
    });

    try {
      const jsonText = response.text;
      const parsed = JSON.parse(jsonText || "{}");
      return NextResponse.json({
         success: true, 
         data: { 
            rawText: jsonText,
            extractedJson: parsed,
            confidence: 0.95
         }
      });
    } catch (parseError) {
      return NextResponse.json({ success: false, message: "Failed to parse Gemini response" }, { status: 500 });
    }
  } catch (error) {
    console.error("OCR API error:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
