import express from "express";
import { individualInformationMap } from "./models/individualInformation.js";
import { workingRecordMap } from "./models/workingRecords.js";
import { createMonthlyPayment, transferAmount } from "./models/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});


const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/individual-information/:email", (req, res) => {
  let individualInformation = individualInformationMap.get(req.params.email);
  res.json(individualInformation);
});

app.get("/working-records/:email", (req, res) => {
  let workingRecord = workingRecordMap.get(req.params.email);
  res.json(workingRecord);
});

app.get("/monthly-payment/:email", (req, res) => {
  let monthlyPayment = createMonthlyPayment(req.params.email);
  console.log('aaaaa', monthlyPayment)
  res.json(monthlyPayment);
});

export {app, server}
