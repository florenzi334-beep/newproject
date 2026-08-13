import { GoogleGenAI } from "@google/genai";

type AuditResult = {
  score: number;
  summary: string;
  issues: {
    severity: "Critical" | "High" | "Medium" | "Low";
    title: string;
    detail: string;
  }[];
  recommendations: {
    text: string;
    lift: string;
  }[];
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { url } = req.body ?? {};

    if (!url || typeof url !== "string") {
      return res.status(400).json({
        error: "A website URL is required.",
      });
    }

    let websiteUrl = url.trim();

    if (!/^https?:\/\//i.test(websiteUrl)) {
      websiteUrl = `https://${websiteUrl}`;
    }

    try {
      new URL(websiteUrl);
    } catch {
      return res.status(400).json({
        error: "Invalid website URL.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured.",
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const prompt = `
You are a professional mobile UX and ecommerce conversion auditor.

Analyze this website:

${websiteUrl}

Use the provided URL as the source of truth.

Evaluate the publicly accessible website specifically for MOBILE ecommerce UX.

Look for:

- mobile layout problems
- navigation problems
- CTA visibility
- product discovery
- checkout friction
- trust signals
- touch target problems
- readability
- confusing UI
- performance-related UX signals visible from the page
- conversion blockers
- accessibility problems
- missing ecommerce best practices

Do NOT invent problems that cannot be reasonably supported by the website.

Return ONLY valid JSON using exactly this structure:

{
  "score": 0,
  "summary": "short summary",
  "issues": [
    {
      "severity": "Critical",
      "title": "short issue title",
      "detail": "specific explanation"
    }
  ],
  "recommendations": [
    {
      "text": "specific recommendation",
      "lift": "+5%"
    }
  ]
}

Rules:

- score must be an integer from 0 to 100.
- issues must contain 3 to 6 of the most important issues.
- severity must be exactly one of: Critical, High, Medium, Low.
- recommendations must contain 3 to 6 practical recommendations.
- Do not claim an exact conversion increase unless there is evidence. If uncertain, use an approximate label such as "Potential".
- Keep the report concise.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [
          {
            urlContext: {},
          },
        ],
        responseMimeType: "application/json",
      },
    });

    const text = response.text ?? "";

    let result: AuditResult;

    try {
      result = JSON.parse(text);
    } catch {
      return res.status(502).json({
        error: "Gemini returned an invalid report.",
        raw: text,
      });
    }

    return res.status(200).json(result);
  } catch (error: any) {
    console.error("Gemini audit error:", error);

    return res.status(500).json({
      error:
        error?.message ||
        "Something went wrong while analyzing the website.",
    });
  }
}
