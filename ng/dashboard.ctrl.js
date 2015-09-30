angular.module('app')
.controller('DashboardCtrl', function ($scope, $location, UserSvc, TimesheetSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}

	$scope.has_current_timesheet = false;

	$scope.createNewTimeSheet = function(title, week_beginning, department){
		var date = new Date(week_beginning);

		if(title != undefined && week_beginning != undefined && department != undefined){
			if(date.getDay() == 0){
				TimesheetSvc.create({
					title: title,
					week_beginning: week_beginning,
					department: department
				})
				.success(function (time_sheet) {
					$scope.timesheets.unshift(time_sheet)
					$location.path('/');
					toastr.success('Time sheet added successfully.', 'Success');
				})
			} else {
				toastr.error('Starting date must begin on a Sunday.', 'Error');
			}
		} else {
			toastr.error('Please enter a title, department and starting date', 'Error');
		}

	}

	TimesheetSvc.fetch().success(function (timesheets) {
		$scope.timesheets = timesheets;
	})
	
})