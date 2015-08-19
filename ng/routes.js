angular.module('app')
.config(function ($routeProvider) {
	$routeProvider
	.when('/',         { controller: 'DashboardCtrl', templateUrl: '/templates/dashboard.html' })
	.when('/register', { controller: 'RegisterCtrl', templateUrl: '/templates/register.html' })
	.when('/login',    { controller: 'LoginCtrl', templateUrl: '/templates/login.html' })
	.when('/timesheet',{ controller: 'TimesheetCtrl', templateUrl: '/templates/timesheet.html' })
})

