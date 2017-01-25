angular
  .module('angularAuthentication')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User){
  const vm = this;

  vm.register = () =>{
    //console.log('USER', vm.user);
    User
    .register(vm.user).$promise
    .then(data => {
      console.log(data);

    },err =>{
      console.log(err);
    });
  };
  // console.log('Register');
}
