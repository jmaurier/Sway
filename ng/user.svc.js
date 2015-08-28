angular.module('app')
.service('UserSvc', function ($http) {
  var svc = this
  svc.getUser = function () {
    return $http.get('/api/users')
    .then(function (response) {
      return response.data
    })
  }
  svc.login = function (H_number, password) {
    return $http.post('/api/sessions', {
      H_number: H_number, password: password
    }).then(function (response) {
      window.sessionStorage.token = response.data
      $http.defaults.headers.common['x-auth'] = response.data
      return svc.getUser()
    })
  }
  svc.register = function (H_number, password, name, emailaddr) {
    return $http.post('/api/users', {
      H_number: H_number, password: password, name: name, emailaddr: emailaddr
    }).then(function () {
      return svc.login(H_number, password)
    }, function(error){
      console.log(error);
    })
  }
  svc.isLoggedIn = function (){
    var result = false;
    if(window.sessionStorage.token){
      $http.defaults.headers.common['x-auth'] = window.sessionStorage.token
      result = true;
    }
    return result;
  }
})
