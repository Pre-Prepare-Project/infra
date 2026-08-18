import { NextResponse } from "next/server";
import { CONTACT_INQUIRY_TYPES } from "@/data/contact";
import {
  appendContactToSheet,
  isGoogleSheetConfigured,
} from "@/lib/googleSheets";

function getInquiryTypeLabel(value) {
  const match = CONTACT_INQUIRY_TYPES.find((item) => item.value === value);
  return match?.label || String(value || "").trim();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();
    const inquiryTypeValue = String(body.inquiryType || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const inquiryType = getInquiryTypeLabel(inquiryTypeValue);

    if (!name || !email || !message || !inquiryTypeValue) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isGoogleSheetConfigured()) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Google Sheet is not configured. Add GOOGLE_SHEET_WEBAPP_URL to .env.local.",
        },
        { status: 503 },
      );
    }

    await appendContactToSheet({
      inquiryType,
      name,
      email,
      phone,
      company,
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
