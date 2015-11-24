angular.module('app')
.controller('DashboardCtrl', function ($scope, $location, UserSvc, TimesheetSvc, toastr) {

	if(!UserSvc.isLoggedIn()){
		$location.path('/login')
	}

	$scope.createNewTimeSheet = function(title, week_beginning){
		console.log(new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate()));
	  TimesheetSvc.create({
        title: title,
        week_beginning: week_beginning,
        week_one:{
        	sunday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate()) },
	        monday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 1)},
	        tuesday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 2)},
	        wednesday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 3)},
	        thursday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 4)},
	        friday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 5)},
        	saturday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 6)}
        },
        week_two:{
        	sunday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 7)},
	        monday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 8)},
	        tuesday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 9)},
	        wednesday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 10)},
	        thursday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 11)},
	        friday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 12)},
        	saturday:{date:new Date(week_beginning.getFullYear(), week_beginning.getMonth(), week_beginning.getDate() + 13)}
        }
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
