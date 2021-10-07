import fs from 'fs';
import mongoose from 'mongoose';
const { Schema } = mongoose;
import { workingRecordSchema } from '../models/workingRecordsModel.js';

const individualInformationSchema = new Schema({
  name: String,
  surname: String,
  nickName: String,
  phoneNumber: String,
  email: String,
  site: String,
  dailyRate: String,
  accountNumber: String
})

const individualInformationModel = mongoose.model('IndividualInformation', individualInformationSchema);
const workingRecordModel = mongoose.model('WorkingRecord', workingRecordSchema);

await mongoose.connect('mongodb://root:example@localhost:27017/working-record?authSource=admin');

const workingRecordData = JSON.parse(
  fs.readFileSync('./data/workingRecords.json', 'utf-8')
);

const individualInformationData = JSON.parse(
  fs.readFileSync('./data/individualInformations.json', 'utf-8')
)

await individualInformationModel.insertMany(individualInformationData);
await workingRecordModel.insertMany(workingRecordData);

process.exit(0)