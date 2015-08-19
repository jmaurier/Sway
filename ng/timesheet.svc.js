angular.module('app')
.service('TimesheetSvc', function ($http) {
  
  this.fetch = function () {
    return $http.get('/api/timesheets')
  }

  this.create = function(timesheet){
    return $http.post('/api/timesheets', timesheet);
  }
  
})