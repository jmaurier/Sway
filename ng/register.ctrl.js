angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc) {
  $scope.register = function (H_number, password, name) {
    UserSvc.register(H_number, password, name)
    .then(function (user) {
      $scope.$emit('login', user)
    })
  }
})

.directive("compareTo", function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
 