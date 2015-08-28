angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (H_number, password, name, emailaddr) {
    UserSvc.register(H_number, password, name, emailaddr)
    .then(function (user) {
      $scope.$emit('login', user)
    })
  }
})