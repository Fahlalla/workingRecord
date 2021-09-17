import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

const isValidEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const isValidPhoneNumber = /^\d{10}$/;

function validateIndividualInformation(individualInformation) {
  if (individualInformation == undefined) {
    return "";
  }

  // validate email
  if (!isValidEmail.test(individualInformation.email)) {
    return "invalid email";
  }

  // validate number equals 10
  if (!isValidPhoneNumber.test(individualInformation.phoneNumber)) {
    return "invalid phone number";
  }

  // validate dailyRate more than 0
  const isValidDailyRate = parseInt(individualInformation.dailyRate) > 0;
  if (!isValidDailyRate) {
    return "invalid daily rate";
  }

  return "complete";
}

function validateWorkingRecord(workingRecord) {
  // validate email
  if (!isValidEmail.test(workingRecord.email)) {
    return "invalid email";
  }

  // validate workingDay more than 0
  const isValidWorkingDay = parseInt(workingRecord.workingDay) < 0;
  if (!isValidWorkingDay) {
    return "invalid working day";
  }

  // if (parseInt(workingRecord.workingDay) > 31) {
  //   return "วันทำงานเกิน";
  // }

  // if (workingRecord.workingDay == null) {
  //   return "working = null";
  // }
  
  return "complete";
}

console.log(
  validateIndividualInformation(individualInformationMap.get("glock@odds.team"))
);

function createMonthlyPayment(individualInformation, workingRecord) {

  // var individualInfoValidated = validateIndividualInformation(
  //   individualInformation
  // );
  // var workingRecordValidated = validateWorkingRecord(workingRecord);

  // if (individualInfoValidated == null) {
  //   return "individual information is null";
  // }

  // if (workingRecordValidated == null) {
  //   return "working record information is null";
  // }

  // if (parseInt(workingRecord.workingDay) > 31) {
  //   return "วันทำงานเกิน";
  // }

  // if (workingRecord.workingDay == null) {
  //   return "working = null";
  // }
  return individualInformation.dailyRate * workingRecord.workingDay;
}

function transferAmount(email) {
  let individual = individualInformationMap.get(email);
  let working = workingRecordMap.get(email);

  const result = new monthlyPayment(
    individual.name,
    individual.surname,
    individual.nickName,
    individual.accountNumber,
    individual.telephoneNumber,
    individual.dailyRate,
    working.workingDay,
    working.submittedDate,
    working.remark,
    createMonthlyPayment(individual, working)
  );
  return result;
}

export { validateIndividualInformation, createMonthlyPayment, transferAmount };
