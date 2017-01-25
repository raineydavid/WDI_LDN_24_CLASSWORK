angular
.module('wdiYearbook')
.config(Router);

Router.$inject =[
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'
];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('usersIndex', {
    url: '/users',
    templateUrl: 'js/views/users/index.html',
    controller: 'UsersIndexCtrl as usersIndex'
    // controller: 'UsersIndexCtrl',
    // controllerAs: 'users'
  })
  .state('usersNew', {
    url: '/users/new',
    templateUrl: '/js/views/users/new.html',
    controller: 'UsersNewCtrl as usersNew'
  })
  .state('usersEdit', {
    url: '/users/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl as usersEdit'
  })
  .state('usersShow', {
    url: '/users/show.html,
    templateUrl: '/js/views/users/:id',
    controller: 'UsersShowCtrl as usersShow'
  });
  $urlRouterProvider.otherwise('/users');
}
