import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function validateIndividualInformation(individualInformation) {
  // validate email
  const isValidEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(individualInformation.email)
  if (!isValidEmail) {
    return 'invalid email'
  }

  // validate number equals 10
  const isValidPhoneNumber = /^\d{10}$/.test(individualInformation.phoneNumber)
  if (!isValidPhoneNumber) {
    return 'invalid phone number'
  }

  // validate dailyRate more than 0
  const isValidDailyRate = parseInt(individualInformation.dailyRate) > 0
  if (!isValidDailyRate) {
    return 'invalid daily rate'
  }

  return 'complete'
}

function validateWorkingRecord(workingRecord) {
  // validate email
  const isValidEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(workingRecord.email)
  if (!isValidEmail) {
    return 'invalid email'
  }

  // validate dailyRate more than 0
  const isValidDailyRate = parseInt(workingRecord.workingDay) < 0 
  if (!isValidDailyRate) {
    return 'invalid working day'
  }
  return 'complete'
}

console.log(validateIndividualInformation(individualInformationMap.get('glock@odds.team')))

function createMonthlyPayment(email) {
  let individualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);

  var individualInfoValidated = validateIndividualInformation(individualInformation);
  var workingRecordValidated = validateWorkingRecord(workingRecord);

  if (individualInfoValidated == null) {
    return "individual information is null";
  }

  if (workingRecordValidated == null) {
    return "working record information is null";
  }

  if (parseInt(workingRecord.workingDay) > 31) {
    return "วันทำงานเกิน";
  }

  if (workingRecord.workingDay == null) {
    return "working = null";
  }
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
    createMonthlyPayment(email)
  );
  return result;
}

export { createMonthlyPayment, transferAmount };
