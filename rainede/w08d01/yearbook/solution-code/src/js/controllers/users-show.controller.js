angular
  .module('wdiYearbook')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject =['$http', '$state'];

function UsersShowCtrl($http,$state){
  const vm = this;

  vm.show =()=>{
    return $http
      .post('http://localhost:3000/api/users', vm.user)
      .then(response => {
        $state.go('usersIndex');
        //console.log(response);
      });
    //alert('Hi');
  //  console.log(vm.user);
  }
}
