angular
  .module('angularAuthentication')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope'];
function MainCtrl($rootScope) {
  $rootScope.$on('loggedIn', () => {
    console.log('Yo i\'ve logged in');
  });
//  console.log('Main has loaded');
}
