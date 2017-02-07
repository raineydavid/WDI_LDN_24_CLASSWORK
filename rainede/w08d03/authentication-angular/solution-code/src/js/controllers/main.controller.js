angular
  .module('angularAuthentication')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    CurrentUserService.getUser()
    .then(data => {
      vm.user = data;
      $state.go('usersIndex');
    }, err =>{
      console.log(err);
    });
  //  console.log('Yo i\'ve logged in');
  });
//  console.log('Main has loaded');
}
