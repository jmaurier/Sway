angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, toastr) {

	$scope.error=false;
	$scope.errormsg="";

	$scope.register = function (H_number, password, name, emailaddr) {
		UserSvc.register(H_number, password, name, emailaddr)
			.then(function (user) {
			  $scope.$emit('login', user)
			}, function(error){
				console.log(error);
			  if (error.status == 401){
			  	$scope.error = true;
				toastr.error('This H-Number is already in use, faggot.', 'Error');
			  }
			})
	}
})
