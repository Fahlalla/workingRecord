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
  const email = req.params.email;
  let workingRecord = workingRecordMap.get(email);
  if(workingRecord == undefined)
    return res.status(404).json('Working record not found');
  return res.status(200).json(workingRecord);
});

app.get("/monthly-payment/:email", (req, res) => {
  let monthlyPayment = transferAmount(req.params.email);
  res.json(monthlyPayment);
});

export {app, server}
