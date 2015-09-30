angular.module('app')
.controller('DashboardCtrl', function ($scope, $location, UserSvc, TimesheetSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}

	$scope.has_current_timesheet = false;

	$scope.createNewTimeSheet = function(title, week_beginning, department){
		var tempDate = new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 1)
		if(tempDate === week_beginning)
	  		console.log(tempDate);

	  TimesheetSvc.create({
        title: title,
        week_beginning: week_beginning,
        department: department
      })
      .success(function (time_sheet) {
      	$scope.timesheets.unshift(time_sheet)
        $location.path('/');
      })
	}

	TimesheetSvc.fetch().success(function (timesheets) {
		console.log(timesheets);
		$scope.timesheets = timesheets;
	})
	
})