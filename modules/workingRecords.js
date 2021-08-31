export default class WorkingRecord {
  constructor(email, workingDay, submittedDate, site, remark) {
    this.email = email;
    this.workingDay = workingDay;
    this.submittedDate = submittedDate;
    this.site = site;
    this.remark = remark;
  }

}
const ford = new WorkingRecord(
  "glock@odds.team",
  "21",
  "11/11/2021",
  "aaaaa",
  "100"
);

const workingRecordMap = new Map();

workingRecordMap.set("glock@odds.team", ford);

console.log(workingRecordMap.get("glock@odds.team"));

export {workingRecordMap};