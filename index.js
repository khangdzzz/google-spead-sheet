import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { addFormDataToSheet } from './googleSheetsService.js'
dotenv.config();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
  express.urlencoded({ extended: true }),
  express.json(),
);

app.post('/', (req, res) => {
   const data = req.body
   addFormDataToSheet(data)
   res.status(200).send(data)
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const formData = {
//     name: "John Doe",
//     phone: "1234567890",
//     message: "please contact for me to introduce your project !",
//   };
  