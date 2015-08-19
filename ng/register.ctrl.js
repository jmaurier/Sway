angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (H_number, password, name) {
    UserSvc.register(H_number, password, name)
    .then(function (user) {
      $scope.$emit('login', user)
    })
  }
})


 