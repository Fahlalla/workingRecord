import express from "express";
import { transferAmount } from "./models/index.js";
import { getWorkingRecordByEmail } from "./services/workingRecordService.js";
import { getIndividualInformationByEmail } from "./services/individualInformationService.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});

app.get("/individual-information/:email", (req, res) => {
  const email = req.params.email;
  const result = getIndividualInformationByEmail(email);

  if(result == undefined)
    return res.status(404).json('Individual Information not found');
  return res.status(200).json(result);
});

app.get("/working-records/:email", async (req, res) => {
  const email = req.params.email;
  const result = await getWorkingRecordByEmail(email);

  if(result == undefined)
    return res.status(404).json('Working Record not found');
  return res.status(200).json(result);
});

app.get("/monthly-payment/:email", (req, res) => {
  const email = req.params.email;
  let monthlyPayment = transferAmount(email);
  return res.json(monthlyPayment);
});

const server = app.listen(port, () => {
  return console.log(`Example app listening at http://localhost:${port}`);
});

export {app, server}
