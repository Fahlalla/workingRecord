import { individualInformationMap } from "./individualInformation.js";
import { workingRecordMap } from "./workingRecords.js";
import { monthlyPayment } from "./monthlyPayment.js";

function createMonthlyPayment(email) {
  let invidualInformation = individualInformationMap.get(email);
  let workingRecord = workingRecordMap.get(email);

/*
เช็คว่าข้อมูลพนักงานมีอยู่จริง
*/
  if(invidualInformation === null){
    return "individual information is null"
  }
/* 
เช็คว่า วันทำงานต้องไม่เกิน 31 วัน
*/
  if(parseInt(workingRecord.workingDay) > 31) {
    return "วันทำงานเกิน"
  }

  if(workingRecord.workingDay === "") {
    return "working = null"
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
    createMonthlyPayment(email),
  );
  return result;
}

export {createMonthlyPayment, transferAmount};

