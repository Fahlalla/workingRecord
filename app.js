import express from "express";
import { individualInformationMap } from "./models/individualInformation.js";
import { workingRecordMap } from "./models/workingRecords.js";
import { createMonthlyPayment } from "./models/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/individual-information/:email", (req, res) => {
  let email = req.params.email;
  let individualInformation = individualInformationMap.get(email);
  res.json(individualInformation);
});

app.get("/working-records/:email", (req, res) => {
  let email = req.params.email;
  let workingRecord = workingRecordMap.get(email);
  res.json(workingRecord);
});

app.get("/monthly-payment/:email", (req, res) => {
  let email = req.params.email;
  let monthlyPayment = createMonthlyPayment(email);
  res.json(monthlyPayment);
});
