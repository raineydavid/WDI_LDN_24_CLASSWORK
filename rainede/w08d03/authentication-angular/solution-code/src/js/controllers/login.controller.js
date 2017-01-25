angular
  .module('angularAuthentication')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;

  vm.login = () =>{
    User
      .login(vm.user).$promise
      .then(data =>{
        console.log(data);
      //  TokenService.setToken(data.token);
      }, err =>{
        console.log(err);
      });
  };
}
