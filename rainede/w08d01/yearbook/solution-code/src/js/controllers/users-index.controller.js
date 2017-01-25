angular
  .module('wdiYearbook')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject =['$http'];

function UsersIndexCtrl($http){
  const vm = this;
//  vm.users = 'Hello';
  $http //Ajax XML http request
    .get('http://localhost:3000/api/users')
    .then(response => {
      vm.users = response.data;
    })
}
