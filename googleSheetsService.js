import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  // Set your authentication credentials here
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

const sheets = google.sheets({ version: "v4", auth });

const date = new Date(); 
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);

export const addFormDataToSheet = async (formData) => {
  try {
    const spreadsheetId = "1uIf7mSrF-yXHWMJc_GMGZLqzV1lt3lyGt2iqwg_WEAI";
    const range = "Sheet1!A:F"; // Set the range where you want to add the new row

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      resource: {
        values: [
          [
            formData.name,
            formData.phone,
            formData.message,
            formattedDate
          ],
        ],
      },
    });
  } catch (err) {
    console.error(err);
  }
}

