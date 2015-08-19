angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, toastr) {
  $scope.login = function (H_number, password) {
  	$scope.errorMsg = '';
    UserSvc.login(H_number, password)
    .then(function (user) {
      $scope.$emit('login', user)
    }, function(error){
    	$scope.errorMsg = "Incorrect H Number/Password.";
    })
  }
})
