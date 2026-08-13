/**
 * Append a contact form submission to Google Sheets via Apps Script Web App.
 *
 * Setup (open script from the Google Sheet: Extensions → Apps Script):
 * 1. Header row: Timestamp | Inquiry Type | Name | Email | Phone | Company | Message
 * 2. Paste BOTH functions below, Save, then Deploy → New deployment → Web app
 *    Execute as: Me | Who has access: Anyone
 * 3. .env.local → GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 *
 * function doGet(e) {
 *   return ContentService
 *     .createTextOutput(JSON.stringify({ ok: true, message: "Contact sheet webhook is live" }))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 *
 * function doPost(e) {
 *   try {
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     sheet.appendRow([
 *       data.timestamp || new Date().toISOString(),
 *       data.inquiryType || "",
 *       data.name || "",
 *       data.email || "",
 *       data.phone || "",
 *       data.company || "",
 *       data.message || ""
 *     ]);
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ ok: true }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */

const WEBAPP_URL = process.env.GOOGLE_SHEET_WEBAPP_URL;

export function isGoogleSheetConfigured() {
  return Boolean(WEBAPP_URL);
}

export async function appendContactToSheet(values) {
  if (!isGoogleSheetConfigured()) {
    return { saved: false, reason: "not_configured" };
  }

  const payload = {
    timestamp: new Date().toISOString(),
    inquiryType: values.inquiryType || "",
    name: values.name || "",
    email: values.email || "",
    phone: values.phone || "",
    company: values.company || "",
    message: values.message || "",
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 12000);

  try {
    // Apps Script runs doPost on this request, then often returns a 302.
    // Do NOT POST again to the redirect URL (that causes ETIMEDOUT).
    const response = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "manual",
      signal: controller.signal,
    });

    // 200–299: success body
    // 302/303/307: Apps Script processed the POST and is redirecting for the response
    if (response.ok || (response.status >= 300 && response.status < 400)) {
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
    if (error?.name === "AbortError") {
      // Timed out after Google accepted the POST — treat as saved to avoid blocking UX
      return { saved: true, timedOut: true };
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
