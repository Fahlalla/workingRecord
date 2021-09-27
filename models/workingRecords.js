import mongoose from "mongoose";
const { Schema } = mongoose;

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

const fame = new WorkingRecord(
  "fameanunn@odds.team",
  "20",
  "11/11/2021",
  "Morchana",
  "2"
);

const smile = new WorkingRecord(
  "smile@odds.team",
  "22",
  "11/11/2021",
  "Morchana",
  "1"
);

const fah = new WorkingRecord(
  "tadsika@odds.team",
  "23",
  "11/11/2021",
  "saksiam",
  ""
);

const glock = new WorkingRecord(
  "glockza@odds.team",
  "22",
  "11/11/2021",
  "Morchana",
  ""
);

const workingRecordMap = new Map();

workingRecordMap.set("glock@odds.team", ford);
workingRecordMap.set("fameanunn@odds.team", fame);
workingRecordMap.set("smile@odds.team", smile);
workingRecordMap.set("tadsika@odds.team", fah);
workingRecordMap.set("glockza@odds.team", glock);

const workingRecordSchema = new Schema({
  email: String,
  workingDay: String,
  submittedDate: String,
  site: String,
  remark: String
})

export { workingRecordMap, workingRecordSchema};
