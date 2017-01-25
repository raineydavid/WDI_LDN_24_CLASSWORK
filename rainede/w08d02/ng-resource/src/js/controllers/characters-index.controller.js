angular
  .module('lightsaberApp')
  .controller('CharactersIndexCtrl', CharactersIndexCtrl);

CharactersIndexCtrl.$inject = ['API', '$http', '$resource'];
function CharactersIndexCtrl(API, $http, $resource) {
  const vm  = this;

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

  vm.delete = charactersDelete;

  function charactersIndex(){
    vm.characters = Character.query();
  }

  function charactersDelete(character){
    Character({id: character._id})
    .$promise
    .then(()  => {
      vm.characters = Character.query();
      charactersIndex();
    });
  }

  //vm.characters  = data.character
  // vm.delete = charactersDelete;
  //
  // charactersIndex();
  //
  // function charactersIndex(){
  //   return $http
  //     .get(`${API}/characters`)
  //     .then(response => {
  //       vm.characters = response.data;
  //     }, onError);
  // }
  //
  // function charactersDelete(character){
  //   return $http
  //     .delete(`${API}/characters/${character._id}`)
  //     .then(charactersIndex, onError);
  // }
  //
  // function onError(err) {
  //   console.log(err);
  // }
}
