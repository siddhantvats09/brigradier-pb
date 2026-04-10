import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, mobile, entry, center } = body;

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            name,
            mobile,
            entry,
            center,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}