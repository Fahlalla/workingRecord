import { individualInformationMap } from "./individualInformation.js";
import { monthlyPayment } from "./monthlyPayment.js";
import mongoose from "mongoose";
import { workingRecordSchema } from "./workingRecords.js";
import { workingRecordMap } from "../models/workingRecords.js"

const isValidEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const isValidPhoneNumber = /^\d{10}$/;

function validateIndividualInformation(individualInformation) {
  if (individualInformation == undefined) {
    return "";
  }

  if (!isValidEmail.test(individualInformation.email)) {
    return "invalid email";
  }

  if (!isValidPhoneNumber.test(individualInformation.phoneNumber)) {
    return "invalid phone number";
  }

  const isValidDailyRate = parseInt(individualInformation.dailyRate) > 0;
  if (!isValidDailyRate) {
    return "invalid daily rate";
  }
  return "complete";
}

function validateWorkingRecord(workingRecord) {
  if (!isValidEmail.test(workingRecord.email)) {
    return "invalid email";
  }
  const isValidWorkingDay = parseInt(workingRecord.workingDay) < 0;
  if (!isValidWorkingDay) {
    return "invalid working day";
  }
  return "complete";
}

function createMonthlyPayment(individualInformation, workingRecord) {
  return individualInformation.dailyRate * workingRecord.workingDay;
}

function transferAmount(email) {
  let individual = individualInformationMap.get(email);
  let working = workingRecordMap.get(email);
  const result = new monthlyPayment(
    individual.name,
    individual.surname,
    individual.nickName,
    individual.email,
    individual.accountNumber,
    individual.telephoneNumber,
    individual.dailyRate,
    working.workingDay,
    createMonthlyPayment(individual, working),
    working.submittedDate,
    working.remark,
  );
  return result;
}

async function connectDB() {
  if (process.env.NODE_ENV !== 'TEST') {
    return await mongoose.connect('mongodb://root:example@localhost:27017/working-record?authSource=admin');
  }
}

const getWorkingRecord = await connectDB().then((con) => {
  if (process.env.NODE_ENV !== 'TEST') {
    return con.model('workingRecords', workingRecordSchema);
  }
  return workingRecordMap;
});

export { validateIndividualInformation, createMonthlyPayment, transferAmount, getWorkingRecord};
