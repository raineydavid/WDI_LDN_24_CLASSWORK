angular
  .module('angularAuthentication')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User){
  const vm = this;
  //query comes from the factory
  vm.users = User.query();
}
