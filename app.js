import express from "express";
import { individualInformationMap } from "./models/individualInformation.js";
import { workingRecordMap, workingRecordSchema } from "./models/workingRecords.js";
import { createMonthlyPayment, transferAmount, connectDB } from "./models/index.js";



const app = express();
const port = 3000;

const conn = await connectDB().then((con) => {
  return con;
});

let workingRecordMapTemp;

const receiver = (value) => {
  individualInformationTemp = value;
};

const setWorkingRecordMap = (value) => {
  if (value === null) {
    const workingRecordsModel = conn.model('workingRecords', workingRecordSchema);
    return workingRecordMapTemp = workingRecordsModel;
  }
  return workingRecordMapTemp = value;
}

const getByEmail = (email) => {
  if (process.env.NODE_ENV === undefined) {
    return workingRecordMapTemp.findOne({ email: email });
  }
  return workingRecordMapTemp.get(email);
}

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

app.get("/individual-information/:email", (req, res) => {
  const email = req.params.email;
  let individualInformation = individualInformationMap.get(email);
  return res.json(individualInformation);
});

app.get("/working-records/:email", async (req, res) => {
  const email = req.params.email;
  const result = await getByEmail(email);

  if(result == undefined)
    return res.status(404).json('Working record not found');
  return res.status(200).json(result);
});

app.get("/monthly-payment/:email", (req, res) => {
  const email = req.params.email;
  let monthlyPayment = transferAmount(req.params.email);
  return res.json(monthlyPayment);
});

const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'TEST')
    setWorkingRecordMap(null);
  return console.log(`Example app listening at http://localhost:${port}`);
});

export {app, server, receiver, setWorkingRecordMap}
