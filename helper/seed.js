import mongoose from 'mongoose';
// import WorkingRecord from '../models/workingRecords';
// import working from '../models/working.json';

await mongoose.connect('mongodb://localhost:27017/wut');

// Collections
// const User = mongoose.model('User',{
//   name: { type: String },
//   age: { type: Number }
// });

// var new_user = new User({
//   name: 'Manish',
//   age:34
// })

// new_user.save(function(err,result){
//   if (err){
//       console.log(err);
//   }
//   else{
//       console.log(result)
//   }
// })