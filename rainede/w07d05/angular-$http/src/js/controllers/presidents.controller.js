angular
.module('thePresidentsApp')
.controller('PresidentsCtrl', PresidentsCtrl);

PresidentsCtrl.$inject = ['$http'];
function PresidentsCtrl($http) {
  const vm = this;

  vm.all =[];
  vm.newPresident = {};
  vm.presidentsCreate =presidentsCreate;
  vm.presidentsDelete = presidentsDelete;


  presidentsIndex();

  function presidentsIndex(){
    $http
    .get('http://localhost:3000/api/presidents', vm.newPresident)
    .then(response =>{
      vm.all = [response.data];
    });
  }

  function presidentsCreate(newPresident){
    $http
    .post('http://localhost:3000/api/presidents/')
    .then(response =>{
      vm.all.push(response.data);
      vm.newPresident = {};
    });
  }

  function presidentsDelete(president){
    $http
    .delete(`http://localhost:3000/api/presidents/${president._id}`)
    .then(()) => {
      const index = vm.all.indexOf(president);
      vm.all.splice(index,1);
    });
  }

  // vm.all = [
  //   {name: 'George Washington', start: 1789, end: 1797 },
  //   {name: 'John Adams', start: 1797, end: 1801 },
  //   {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  //   {name: 'James Madison', start: 1809, end: 1817 }
  // ];
}
