angular
  .module('angularAuthentication')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', '$rootScope'];
function LoginCtrl(User, $rootScope) {
  const vm = this;

  vm.login = () =>{
    User
      .login(vm.user).$promise
      .then(data =>{
        console.log('Successfully logged in');
        $rootScope.$broadcast('loggedIn');
      }, err =>{
        console.log(err);
      });
  };
}
