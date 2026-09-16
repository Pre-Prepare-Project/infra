/**
 * Append contact form submissions to Google Sheets via Apps Script Web App.
 *
 * Spreadsheet:
 *   https://docs.google.com/spreadsheets/d/1N98aBUurnkUGEjpZt_Zjp-B01pFct3rc7l5Fqx0JKto
 *
 * This app writes to the "infrapulse" tab:
 *   Timestamp | Inquiry Type | Name | Email | Phone | Company | Message
 *
 * Env:
 *   GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 */

const WEBAPP_URL = process.env.GOOGLE_SHEET_WEBAPP_URL;
const SHEET_NAME = "infrapulse";
const REQUEST_TIMEOUT_MS = 12000;

export function isGoogleSheetConfigured() {
  return Boolean(WEBAPP_URL);
}

/**
 * @param {{
 *   inquiryType?: string
 *   inquiry_type?: string
 *   name?: string
 *   email?: string
 *   phone?: string
 *   company?: string
 *   message?: string
 * }} values
 */
export async function appendContactToSheet(values) {
  if (!isGoogleSheetConfigured()) {
    return { saved: false, reason: "not_configured" };
  }

  const payload = {
    sheet: SHEET_NAME,
    timestamp: new Date().toISOString(),
    inquiryType: values.inquiryType || values.inquiry_type || "",
    name: values.name || "",
    email: values.email || "",
    phone: values.phone || "",
    company: values.company || "",
    message: values.message || "",
  };

  return postToWebApp(payload);
}

async function postToWebApp(payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    // Apps Script often responds with 302 after doPost.
    // Do not follow the redirect — that can hang or time out.
    const response = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "manual",
      signal: controller.signal,
    });

    if (isAccepted(response)) {
      return { saved: true };
    }

    const text = await response.text().catch(() => "");
    if (text.includes("Sign in")) {
      throw new Error(
        "Google Sheet Web App is private. Redeploy with Who has access = Anyone.",
      );
    }

    throw new Error(`Google Sheet request failed (${response.status})`);
  } catch (error) {
    // Google may accept the row before the response returns.
    if (error?.name === "AbortError") {
      return { saved: true, timedOut: true };
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

function isAccepted(response) {
  return response.ok || (response.status >= 300 && response.status < 400);
}
