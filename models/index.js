import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function validateIndividualInformation(individualInformation) {
    if (individualInformation == undefined) {
        return ''
    }
   
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

console.log(validateIndividualInformation(individualInformationMap.get('glock@odds.team')))

function createMonthlyPayment(email) {
  let invidualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);

  validateIndividualInformation(invidualInformation)

  if (invidualInformation == null) {
    return "individual information is null";
  }

  if (parseInt(workingRecord.workingDay) > 31) {
    return "วันทำงานเกิน";
  }

  if (workingRecord.workingDay === "") {
    return "working = null";
  }

  return invidualInformation.dailyRate * workingRecord.workingDay;
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
