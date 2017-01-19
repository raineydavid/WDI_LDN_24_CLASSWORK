angular
  .module('leapFrog', [])
  .controller('HomeCtrl', HomeCtrl);

 //Name of fn, $ inject, string of function in an array

HomeCtrl.$inject =['$scope'];
function HomeCtrl($scope){
  console.log('Hi');
}
