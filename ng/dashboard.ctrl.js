angular.module('app')
.controller('DashboardCtrl', function ($scope, $location, UserSvc, TimesheetSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}

	$scope.createNewTimeSheet = function(title, week_one_ending, week_two_ending){
	  TimesheetSvc.create({
        title: title,
        week_one_ending: week_one_ending,
        week_two_ending: week_two_ending
      })
      .success(function (time_sheet) {
      	$scope.timesheets.unshift(time_sheet)
        $location.path('/');
      })
	}

	TimesheetSvc.fetch().success(function (timesheets) {
		$scope.timesheets = timesheets;
	})
	
})
