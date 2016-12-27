const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost/family-tree';

mongoose.connect(databaseUrl);

const User = require('./models/user');

const person = new User({
  firstName: 'Alex',
  meta: {
    age: 28
  },
  email: 'alex@alex.com'
});

// person.save((err,user) => {
//   if (err) return console.log(err);
//   return console.log(`User was created! ${user}`);
// });

person.save((err,user) => {
  if (err) return console.log(err);
  user.sayHello();
});

// console.log(person);

//INDEX
//find query always returns an array
// User.find({}, (err, users) => {
//   return console.log(users);
// });

//SHOW
// User.findById('585a9f6239040b127deef568', (err, user) => {
//   if(err) return console.log(err);
//   if(!user) return console.log('No user found');
//   return console.log(user);
// });

//Alternative SHOW
// User.findOne({firstName: 'Alex'}, (err,user) => {
//   if(err) return console.log(err);
//   if(!user) return console.log('No user found');
//   return console.log(user);
// });

//EDIT
// User.findByIdAndUpdate('585a9e8d1e387f11fac4192d',{
//   meta: {age: 31}
// }, {new: true}, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

// User.findByIdAndRemove('585a9e8d1e387f11fac4192d', (err, user) => {
//   if (err) return console.log(err);
//   return console.log('Deleted');
// });

User.findOne((err, user) =>{
  if(err) return console.log(err);
});
