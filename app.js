import express from "express";
import mongoose from "mongoose";
import { individualInformationMap } from "./models/individualInformation.js";
import { workingRecordMap, workingRecordSchema } from "./models/workingRecords.js";
import { createMonthlyPayment, transferAmount, connectDB } from "./models/index.js";


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

let conn;
const server = connectDB().then((dbConn) => {
  conn = dbConn;
}).then(() => {
  app.listen(port,  () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })  
})

app.get("/individual-information/:email", (req, res) => {
  const email = req.params.email
  let individualInformation = individualInformationMap.get(req.params.email);
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

export {app, server}
