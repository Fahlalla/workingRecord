import express from "express";
import mongoose from "mongoose";
import { individualInformationMap } from "./models/individualInformation.js";
import { workingRecordMap, workingRecordSchema } from "./models/workingRecords.js";
import { createMonthlyPayment, transferAmount, connectDB } from "./models/index.js";

let individualInformationTemp = "wut";
let individualInformationMapTemp = individualInformationMap;

const receiver = (value) => {
  individualInformationTemp = value;
};

const setIndividualInformationMap = (value) => {
  individualInformationMapTemp = value;
}

const app = express();
const port = 3000;

const conn = await connectDB().then((con) => {
  return con;
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.get("/", (req, res) => {
  console.log(individualInformationTemp);
  res.status(200).send("Hello World!");
});

app.get("/individual-information/:email", (req, res) => {
  const email = req.params.email;
  let individualInformation = individualInformationMapTemp.get(email);
  console.log("------------------", individualInformation);
  res.json(individualInformation);
});

app.get("/working-records/:email", async (req, res) => {
  const email = req.params.email;
  const workingRecordsModel = conn.model('workingRecords', workingRecordSchema);
  const result = await workingRecordsModel.findOne({email: email});

  if(result == undefined)
    return res.status(404).json('Working record not found');
  return res.status(200).json(result);
});

app.get("/monthly-payment/:email", (req, res) => {
  const email = req.params.email;
  let monthlyPayment = transferAmount(req.params.email);
  res.json(monthlyPayment);
});

export {app, server, receiver, setIndividualInformationMap}
