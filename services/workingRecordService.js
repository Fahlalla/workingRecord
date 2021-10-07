import { getWorkingRecord } from "../models/workingRecordsModel.js";

const getWorkingRecordByEmail = (email) => {
  if (process.env.NODE_ENV !== "TEST") {
    return getWorkingRecord.findOne({ email: email });
  }
  return getWorkingRecord.get(email);
}

export {getWorkingRecordByEmail}