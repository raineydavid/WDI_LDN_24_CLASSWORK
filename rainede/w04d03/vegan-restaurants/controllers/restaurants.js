const Restaurant = require('../models/restaurant')


function restaurantsIndex(req,res){
  Restaurant.find({}, (err,restaurants) => {
    if (err) return console.log(return res.render(restautants/index,
       {restaurants});
       return res.render()
  });

}
function restaurantsNew(req,res){
  return res.render('restaurants/new');
}
function restaurantsShow(req,res){

}
function restaurantsCreate(req,res){
  const restaurant = req.body.restaurant;
  restaurant.save((err,restaurant)=>{
    if(err) return console.log('No restaurant found');
    return res.render('restaurants/edit', {restaurant});
  });
}
function restaurantsEdit(req,res){

}
function restaurantsUpdate(req,res){

}
function restaurantsDelete(req,res){

}

module.exports ={
  index: restuarantsIndex,
  new: restaurantsNew
}
