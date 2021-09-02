import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(email) {
  let invidualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);
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
    monthlyPayment(individual.dailyRate, working.workingDay),
  )
}

export {createMonthlyPayment}

