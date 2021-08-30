import express from "express";
import IndividualInformation from "./modules/individualInformation.js";
import WorkingRecord from "./modules/workingRecords.js";

const app = express();
const PORT = 3000;

const individualInformation = new IndividualInformation();
const workingRecord = new WorkingRecord();

app.get("/individual-information/:email", (req, res) => {
  res.json(req.params.email);
});

app.get("/working-record/:email", (req, res) => {
  res.json(req.params.email);
});

app.get("/payment/:email", (req, res) => {
  res.json(req.params.email);
});

app.listen(PORT, () => {
  console.log("Server is now running on port ", PORT);
});
