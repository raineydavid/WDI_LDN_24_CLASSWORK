angular
  .module('angularAuthentication')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject =['TokenService', 'User', '$rootScope'];
// rootScope send out a signal that can be listened to by all controllers ie like sockets
function CurrentUserService(TokenService, User,$rootScope){
  let decoded = TokenService.decodeToken();
console.log(decoded);

User
  .get({id: decoded.id}).$promise
  .then(data =>{
    console.log(data);
    $rootScope.$broadcast('loggedIn');
  }, err => {
    console.log(err);
  })
}
