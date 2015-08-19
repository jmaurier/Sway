angular.module('app')
.service('TimesheetSvc', function ($http) {
  
  this.fetch = function () {
    return $http.get('/api/timesheets')
  }

  this.fetchById = function (id) {
    return $http.get('/api/timesheets/' + id)
  }

  this.create = function(timesheet){
    return $http.post('/api/timesheets', timesheet);
  }
  
})