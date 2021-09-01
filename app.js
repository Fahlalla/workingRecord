import express from "express";
import { individualInformationMap } from "./modules/individualInformation.js";
import { workingRecordMap } from "./modules/workingRecords.js";

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
