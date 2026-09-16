/**
 * Google Apps Script — Contact form webhook
 *
 * Spreadsheet:
 *   https://docs.google.com/spreadsheets/d/1N98aBUurnkUGEjpZt_Zjp-B01pFct3rc7l5Fqx0JKto
 *
 * Tabs:
 *   ozii       → Timestamp | Name | Phone | Email | Message
 *   infrapulse → Timestamp | Inquiry Type | Name | Email | Phone | Company | Message
 *
 * Setup:
 *   1. Open the spreadsheet → Extensions → Apps Script
 *   2. Paste this file, Save
 *   3. Deploy → New deployment → Web app
 *      Execute as: Me | Who has access: Anyone
 *   4. Copy the /exec URL into both projects as GOOGLE_SHEET_WEBAPP_URL
 */

var SPREADSHEET_ID = "1N98aBUurnkUGEjpZt_Zjp-B01pFct3rc7l5Fqx0JKto";

var SHEETS = {
  ozii: {
    name: "ozii",
    headers: ["Timestamp", "Name", "Phone", "Email", "Message"]
  },
  infrapulse: {
    name: "infrapulse",
    headers: [
      "Timestamp",
      "Inquiry Type",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Message"
    ]
  }
};

// ---------------------------------------------------------------------------
// Entry points
// ---------------------------------------------------------------------------

function doGet() {
  return json({
    ok: true,
    message: "Google Apps Script is working",
    spreadsheetId: SPREADSHEET_ID,
    sheets: Object.keys(SHEETS)
  });
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: "No POST data received" });
    }

    var data = JSON.parse(e.postData.contents);
    var sheetKey = String(data.sheet || "").trim();

    if (!sheetKey) {
      return json({ ok: false, error: "Sheet name is required" });
    }

    if (!SHEETS[sheetKey]) {
      return json({ ok: false, error: "Invalid sheet: " + sheetKey });
    }

    if (sheetKey === "ozii") {
      appendOzii(data);
    } else {
      appendInfrapulse(data);
    }

    return json({
      ok: true,
      sheet: sheetKey,
      message: sheetKey + " form submitted successfully"
    });
  } catch (error) {
    console.error(error);
    return json({ ok: false, error: error.message || String(error) });
  }
}

// ---------------------------------------------------------------------------
// Row builders
// ---------------------------------------------------------------------------

function appendOzii(data) {
  var config = SHEETS.ozii;
  var sheet = getOrCreateSheet(config.name);

  ensureHeaders(sheet, config.headers);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.phone || data.phone_no || "",
    data.email || "",
    data.message || ""
  ]);
}

function appendInfrapulse(data) {
  var config = SHEETS.infrapulse;
  var sheet = getOrCreateSheet(config.name);

  ensureHeaders(sheet, config.headers);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.inquiryType || data.inquiry_type || "",
    data.name || "",
    data.email || "",
    data.phone || data.phone_no || "",
    data.company || "",
    data.message || ""
  ]);
}

// ---------------------------------------------------------------------------
// Sheet helpers
// ---------------------------------------------------------------------------

function getSpreadsheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function getOrCreateSheet(name) {
  var spreadsheet = getSpreadsheet();
  var sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
  }

  return sheet;
}

/** Write header row if missing or incomplete. */
function ensureHeaders(sheet, headers) {
  var lastCol = Math.max(sheet.getLastColumn(), headers.length);
  var row1 = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  var needsHeaders = sheet.getLastRow() === 0;

  for (var i = 0; i < headers.length; i++) {
    var cell = row1[i];
    if (cell === null || cell === undefined || String(cell).trim() === "") {
      needsHeaders = true;
      break;
    }
    if (String(cell).trim() !== headers[i]) {
      needsHeaders = true;
      break;
    }
  }

  if (needsHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function json(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
