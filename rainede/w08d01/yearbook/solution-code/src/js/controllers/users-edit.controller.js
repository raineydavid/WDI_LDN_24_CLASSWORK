angular
  .module('wdiYearbook')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject =['$http', '$state'];

function UsersEditCtrl($http,$state){
  const vm = this;

  vm.update =()=>{
    return $http
      .put('http://localhost:3000/api/users', vm.user)
      .then(response => {
        $state.go('usersShow');
        //console.log(response);
      });
    //alert('Hi');
  //  console.log(vm.user);
  }
}
