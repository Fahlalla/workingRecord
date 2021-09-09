import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(email) {
  let invidualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);
  
  console.log(invidualInformation)
  if(invidualInformation == null){
    return "individual information is null"
  }

  if(parseInt(workingRecord.workingDay) > 31) {
    return "วันทำงานเกิน"
  }

  if(workingRecord.workingDay === "") {
    return "working = null"
  }

  return invidualInformation.dailyRate * workingRecord.workingDay;
}
createMonthlyPayment("glock@odd.team")

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
    createMonthlyPayment(email),
  );
  return result;
}

export {createMonthlyPayment, transferAmount};

