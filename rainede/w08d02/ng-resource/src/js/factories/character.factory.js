angular
  .module('lightsaberApp')
  .factory('Character', Character);

  Character.$inject =['API', '$resource'];
  function character(){
    return $resource(`${API}/characters/:id`,
    const Character =$resource(`${API}/characters/:id`,
      {id: '@_id'}
      // ,
      // // {
      // //   'get': {method: 'GET'},
      // //   'save': {method: 'POST'},
      // //   'remove': {method: 'DELETE'},
      // //   'delete': {method: 'DELETE'},
      // //   'query': {method: 'GET', isArray: true}
      // // }
    );
  }
