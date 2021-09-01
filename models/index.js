import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(dailyRate, workingDay) {
  return dailyRate * workingDay;
}

export {createMonthlyPayment}

