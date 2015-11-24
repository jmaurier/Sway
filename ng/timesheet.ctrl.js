angular.module('app')
.controller('TimesheetCtrl', function ($scope,$routeParams, $location, UserSvc, TimesheetSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}

	$scope.clockin = function(){
		
	}

	$scope.clockout = function(){
		
	}

	TimesheetSvc.fetchById($routeParams.timesheet_id).then(function(response){
		$scope.timesheet = response.data;
		console.log($scope.timesheet);
    })

    $scope.deleteTimesheet = function() {
    	var timeSheetId = $routeParams.timesheet_id;
    	TimesheetSvc.deleteById(timeSheetId).then(function(response){
    		toastr.success(response.data.message);
    		$location.path('/');
    	});
    }
	
})
