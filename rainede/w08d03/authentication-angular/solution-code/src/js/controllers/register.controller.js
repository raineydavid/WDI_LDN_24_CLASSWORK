angular
  .module('angularAuthentication')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$rootScope'];
function RegisterCtrl(User, $rootScope){
  const vm = this;

  vm.register = () =>{
    //console.log('USER', vm.user);
    User
    .register(vm.user).$promise
    .then(data => {
      $rootScope.$broadcast('loggedIn');
    },err =>{
      console.log(err);
    });
  };
  // console.log('Register');
}
