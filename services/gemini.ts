export interface OCRResult {
  amount: number;
  currency: string;
  date: string;
  vendor: string;
  category: string;
  description: string;
}

const FALLBACK_MOCK: OCRResult = {
  amount: 0,
  currency: "INR",
  date: "2026-01-01",
  vendor: "Unknown",
  category: "Other",
  description: "Manual entry required"
};

export async function extractReceiptData(imageBase64: string): Promise<OCRResult> {
  const keys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY
  ].filter(Boolean) as string[];

  if (keys.length === 0) {
    console.warn("No Gemini API keys found. Returning fallback mock.");
    return FALLBACK_MOCK;
  }

  const prompt = `Extract expense data from this receipt.

Return ONLY JSON:
{
  "amount": number,
  "currency": "string",
  "date": "YYYY-MM-DD",
  "vendor": "string",
  "category": "Travel | Food | Accommodation | Office | Other",
  "description": "string"
}`;

  for (const key of keys) {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: prompt },
              { inlineData: { mimeType: "image/jpeg", data: imageBase64 } }
            ]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });

      if (response.status === 429 || response.status === 403 || response.status >= 500) {
        console.warn(`Key failed with status ${response.status}. Trying next key...`);
        continue;
      }

      if (!response.ok) {
        console.warn(`Unexpected error: ${response.status} ${response.statusText}`);
        continue;
      }

      const data = await response.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!rawText) {
        continue;
      }

      const cleanJsonStr = rawText.replace(/```json|```/g, "").trim();
      const parsed: OCRResult = JSON.parse(cleanJsonStr);

      if (typeof parsed.amount === "number") {
        return parsed;
      }
    } catch (error) {
      console.error(`Gemini request parsing failed:`, error);
      // Wait or cycle dynamically if needed. We let it fail over to the next key.
    }
  }

  console.error("All Gemini keys failed or limits reached. Returning fallback JSON payload.");
  return FALLBACK_MOCK;
}
