angular.module('app')
.config(function ($routeProvider) {
  $routeProvider
  .when('/',         { controller: 'DashboardCtrl', templateUrl: '/templates/index.html' })
  .when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
  .when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
})
