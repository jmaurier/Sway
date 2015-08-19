angular.module('app')
.controller('DashboardCtrl', function ($scope, $location, UserSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}
	
})
