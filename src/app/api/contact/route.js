import { NextResponse } from "next/server";
import { appendContactToSheet, isGoogleSheetConfigured } from "@/lib/googleSheets";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const inquiryType = String(body.inquiryType || "").trim();

    if (!name || !email || !message || !inquiryType) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isGoogleSheetConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          error: "Google Sheet is not configured. Add GOOGLE_SHEET_WEBAPP_URL to .env.local.",
        },
        { status: 503 },
      );
    }

    await appendContactToSheet({
      inquiryType,
      name,
      email,
      phone: String(body.phone || "").trim(),
      company: String(body.company || "").trim(),
      message,
    });

    return NextResponse.json({ ok: true, saved: true });
  } catch (error) {
    console.error("Contact sheet API error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to save submission" },
      { status: 500 },
    );
  }
}
