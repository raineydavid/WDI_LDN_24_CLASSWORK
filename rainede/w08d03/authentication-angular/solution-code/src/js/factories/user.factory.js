angular
  .module('angularAuthentication')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'},{
    //allows us to call .register
    register: { method: 'POST', url: `${API}/register`},
    login: { method: 'POST', url: `${API}/login`}
  });

}
