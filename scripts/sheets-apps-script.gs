/**
 * Google Apps Script — Contact2Hire contact form → Google Sheets
 *
 * The easiest way to receive form submissions in a spreadsheet: no Google
 * Cloud project, no API keys, no npm packages. Each submission becomes a row.
 *
 * One-time setup:
 *   1. Open the Google Sheet where you want submissions (or create one).
 *   2. Extensions → Apps Script → paste this whole file → save (Ctrl/Cmd+S).
 *   3. Deploy → New deployment → Web app:
 *        - Description: "Contact form to sheet"
 *        - Execute as: Me
 *        - Who has access: Anyone
 *        - Click Deploy and copy the /exec URL.
 *   4. In the project's .env, set:
 *        SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/<...>/exec
 *   5. Restart `npm run dev` / redeploy so the new env var is picked up.
 *
 * Rows are appended to the first sheet of the spreadsheet:
 *   Timestamp | Type | Name | Email | Phone | Company | Message
 *
 * Note: "Who has access: Anyone" only allows POSTing to this web app — it
 * does not expose your spreadsheet. The script runs as you (the owner).
 */

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    sheet.appendRow([
      new Date(),
      body.type === 'candidate' ? 'Candidate (job seeker)' : 'Employer (hiring)',
      body.name || '',
      body.email || '',
      body.phone || '',
      body.company || '',
      body.message || '',
    ])
    return jsonResponse({ ok: true })
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) })
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  )
}

/**
 * Optional — add a header row to the first sheet when it is empty.
 * Run this once from the Apps Script editor (Run → initSheet).
 */
function initSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Type', 'Name', 'Email', 'Phone', 'Company', 'Message'])
  }
}
