angular
  .module('leapFrog', [])
  .controller('HomeCtrl', HomeCtrl);

 //Name of fn, $ inject, string of function in an array

HomeCtrl.$inject =[];
function HomeCtrl(){
  this.awesome  ='This is awesome';
  this.numbers =[1,2,3,4];

}
