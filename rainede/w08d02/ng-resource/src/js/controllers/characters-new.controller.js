angular
  .module('lightsaberApp')
  .controller('CharactersNewCtrl', CharactersNewCtrl);

CharactersNewCtrl.$inject = ['API', '$http', '$state', '$resource'];
function CharactersNewCtrl(API, $http, $state, $resource) {
  const vm  = this;


  vm.create = charactersCreate;

  const Character =$resource(`${API}/characters/:id`,{id: '@_id'});

  function charactersCreate(){
    
  }
//   function charactersCreate(){
//     return $http
//       .post(`${API}/characters`, vm.character)
//       .then(() => {
//         $state.go('charactersIndex');
//       }, onError);
//   }
//
//   function onError(err) {
//     console.log(err);
//   }
// }
