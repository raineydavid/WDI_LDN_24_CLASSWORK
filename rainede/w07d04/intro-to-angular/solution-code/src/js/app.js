angular
  .module('leapFrog', [])
  .controller('HomeCtrl', HomeCtrl);

 //Name of fn, $ inject, string of function in an array

HomeCtrl.$inject =[];
function HomeCtrl(){
  var vm =this;
  vm.awesome  ='This is awesome';
  vm.numbers =[1,2,3,4];
  vm.beds =[{
    name: 'comfy'
  },{
    name: 'FIRM'
  },{
    name:'squishy'
  }];

}
