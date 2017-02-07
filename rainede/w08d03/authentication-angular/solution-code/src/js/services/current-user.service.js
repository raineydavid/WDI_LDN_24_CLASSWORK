angular
  .module('angularAuthentication')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject =['TokenService', 'User'];
// rootScope send out a signal that can be listened to by all controllers ie like sockets
function CurrentUserService(TokenService, User){
  const self = this;

  self.getUser =() =>{
    const decoded = TokenService.decodeToken();
    if(!decoded) return;

    return User.get({id: decoded.id}).$promise;
  };

}
