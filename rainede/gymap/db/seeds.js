const mongoose = require('mongoose');

const databaseURL = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/gymap';

mongoose.connect(databaseURL);

const Gym = require('../model')
const gyms = [
  {
  name:''
  image:''
  lat:
  long
},
{
name:
image:
lat:
long
},
]

gyms.forEach(gym)=>{
  Gym.create((err,gym) => {
    if(err) return console.log(err);
    return console.log(`${gym.name} was saved`)
  }
}
