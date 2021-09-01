import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(email) {
  let invidualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);
  return invidualInformation.dailyRate * workingRecord.workingDay;
}


export {createMonthlyPayment}

