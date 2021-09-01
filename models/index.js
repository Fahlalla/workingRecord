import { individualInformation } from "./individualInformation.js";
import { workingRecord } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(dailyRate, workingDay) {
  return dailyRate * workingDay;
}

export {createMonthlyPayment}

