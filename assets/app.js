angular.module("app",["ngRoute"]),angular.module("app",["ngRoute","toastr"]).controller("ApplicationCtrl",["$scope","$location","$window","UserSvc","toastr",function(e,t,n,o,r){if(e.$on("login",function(n,o){e.currentUser=o,t.path("/")}),e.logout=function(){delete e.currentUser,t.path("/login"),window.sessionStorage.removeItem("token")},o.isLoggedIn()){o.getUser().then(function(t){e.currentUser=t})}else t.path("/login")}]),angular.module("app").controller("DashboardCtrl",["$scope","$location","UserSvc","TimesheetSvc","toastr",function(e,t,n,o,r){n.isLoggedIn()||t.path("/login"),e.createNewTimeSheet=function(n){o.create({title:n}).success(function(n){e.timesheets.unshift(n),t.path("/")})},o.fetch().success(function(t){e.timesheets=t})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","toastr",function(e,t,n){e.login=function(n,o){e.errorMsg="",t.login(n,o).then(function(t){e.$emit("login",t)},function(t){e.errorMsg="Incorrect H Number/Password."})}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(n,o,r){t.register(n,o,r).then(function(t){e.$emit("login",t)})}}]).directive("compareTo",function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,t,n,o){o.$validators.compareTo=function(t){return t==e.otherModelValue},e.$watch("otherModelValue",function(){o.$validate()})}}}),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"DashboardCtrl",templateUrl:"/templates/dashboard.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"}).when("/timesheet",{controller:"TimesheetCtrl",templateUrl:"/templates/timesheet.html"})}]),angular.module("app").service("TimesheetSvc",["$http",function(e){this.fetch=function(){return e.get("/api/timesheets")},this.create=function(t){return e.post("/api/timesheets",t)}}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users").then(function(e){return e.data})},t.login=function(n,o){return e.post("/api/sessions",{H_number:n,password:o}).then(function(n){return window.sessionStorage.token=n.data,e.defaults.headers.common["x-auth"]=n.data,t.getUser()})},t.register=function(n,o,r){return e.post("/api/users",{H_number:n,password:o,name:r}).then(function(){return t.login(n,o,r)})},t.isLoggedIn=function(){var t=!1;return window.sessionStorage.token&&(e.defaults.headers.common["x-auth"]=window.sessionStorage.token,t=!0),t}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJkYXNoYm9hcmQuY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidGltZXNoZWV0LnN2Yy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiJHdpbmRvdyIsIlVzZXJTdmMiLCJ0b2FzdHIiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwicGF0aCIsImxvZ291dCIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJnZXRVc2VyIiwidGhlbiIsInJlc3BvbnNlIiwiVGltZXNoZWV0U3ZjIiwiY3JlYXRlTmV3VGltZVNoZWV0IiwidGl0bGUiLCJjcmVhdGUiLCJzdWNjZXNzIiwidGltZV9zaGVldCIsInRpbWVzaGVldHMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJsb2dpbiIsIkhfbnVtYmVyIiwicGFzc3dvcmQiLCJlcnJvck1zZyIsIiRlbWl0IiwiZXJyb3IiLCJyZWdpc3RlciIsIm5hbWUiLCJkaXJlY3RpdmUiLCJyZXF1aXJlIiwic2NvcGUiLCJvdGhlck1vZGVsVmFsdWUiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZ01vZGVsIiwiJHZhbGlkYXRvcnMiLCJjb21wYXJlVG8iLCJtb2RlbFZhbHVlIiwiJHdhdGNoIiwiJHZhbGlkYXRlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwidGltZXNoZWV0IiwicG9zdCIsInN2YyIsImRhdGEiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDRSxZ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QU4sRUFBQVEsU0FBQUMsUUFBQUMsT0FBQSxVQUFBOUMsRUFBQTBDLEtBQ0FELEVBQUEzQyxhQUdKMkMsRUFBQXpCLFNBQUEsU0FBQUwsRUFBQUMsRUFBQUssR0FDRSxNQUFBbUIsR0FBQUksS0FBQSxjQUNFN0IsU0FBQUEsRUFBQUMsU0FBQUEsRUFBQUssS0FBQUEsSUFDRmxCLEtBQUEsV0FDRSxNQUFBMEMsR0FBQS9CLE1BQUFDLEVBQUFDLEVBQUFLLE1BR0p3QixFQUFBNUMsV0FBQSxXQUNFLEdBQUFrRCxJQUFBLENBS0EsT0FKQXJELFFBQUFDLGVBQUFnRCxRQUNFUCxFQUFBUSxTQUFBQyxRQUFBQyxPQUFBLFVBQUFwRCxPQUFBQyxlQUFBZ0QsTUFDQUksR0FBQSxHQUVGQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAnbmdSb3V0ZSdcbl0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJywgWyduZ1JvdXRlJywndG9hc3RyJ10pXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCAkd2luZG93LCBVc2VyU3ZjLCB0b2FzdHIpIHtcbiAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbiAoXywgdXNlcikge1xuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gIH0pXG5cbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uKCl7XG4gIFx0ZGVsZXRlKCRzY29wZS5jdXJyZW50VXNlcikgXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpXG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgfVxuXG4gIGlmKFVzZXJTdmMuaXNMb2dnZWRJbigpKXtcblx0ICBcdHZhciB1c2VyID0gVXNlclN2Yy5nZXRVc2VyKCkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG5cdFx0ICAgICRzY29wZS5jdXJyZW50VXNlciA9IHJlc3BvbnNlO1xuXHQgIFx0fSlcbiBcdH1lbHNlIHtcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xvZ2luJylcbiAgfVxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignRGFzaGJvYXJkQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2YywgVGltZXNoZWV0U3ZjLCB0b2FzdHIpIHtcblxuXHRpZighVXNlclN2Yy5pc0xvZ2dlZEluKCkpe1xuXHRcdCRsb2NhdGlvbi5wYXRoKCcvbG9naW4nKVxuXHR9XG5cblx0JHNjb3BlLmNyZWF0ZU5ld1RpbWVTaGVldCA9IGZ1bmN0aW9uKHRpdGxlKXtcblx0ICBUaW1lc2hlZXRTdmMuY3JlYXRlKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICB9KVxuICAgICAgLnN1Y2Nlc3MoZnVuY3Rpb24gKHRpbWVfc2hlZXQpIHtcbiAgICAgIFx0JHNjb3BlLnRpbWVzaGVldHMudW5zaGlmdCh0aW1lX3NoZWV0KVxuICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xuICAgICAgfSlcblx0fVxuXG5cdFRpbWVzaGVldFN2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHRpbWVzaGVldHMpIHtcblx0XHQkc2NvcGUudGltZXNoZWV0cyA9IHRpbWVzaGVldHM7XG5cdH0pXG5cdFxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMsIHRvYXN0cikge1xuICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoSF9udW1iZXIsIHBhc3N3b3JkKSB7XG4gIFx0JHNjb3BlLmVycm9yTXNnID0gJyc7XG4gICAgVXNlclN2Yy5sb2dpbihIX251bWJlciwgcGFzc3dvcmQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCB1c2VyKVxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcbiAgICBcdCRzY29wZS5lcnJvck1zZyA9IFwiSW5jb3JyZWN0IEggTnVtYmVyL1Bhc3N3b3JkLlwiO1xuICAgIH0pXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XG4gICRzY29wZS5yZWdpc3RlciA9IGZ1bmN0aW9uIChIX251bWJlciwgcGFzc3dvcmQsIG5hbWUpIHtcbiAgICBVc2VyU3ZjLnJlZ2lzdGVyKEhfbnVtYmVyLCBwYXNzd29yZCwgbmFtZSlcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHVzZXIpXG4gICAgfSlcbiAgfVxufSlcblxuLmRpcmVjdGl2ZShcImNvbXBhcmVUb1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXF1aXJlOiBcIm5nTW9kZWxcIixcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIG90aGVyTW9kZWxWYWx1ZTogXCI9Y29tcGFyZVRvXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIG5nTW9kZWwuJHZhbGlkYXRvcnMuY29tcGFyZVRvID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbFZhbHVlID09IHNjb3BlLm90aGVyTW9kZWxWYWx1ZTtcbiAgICAgICAgICAgIH07XG4gXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJvdGhlck1vZGVsVmFsdWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbmdNb2RlbC4kdmFsaWRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn0pO1xuICIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCAgICAgICAgIHsgY29udHJvbGxlcjogJ0Rhc2hib2FyZEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvZGFzaGJvYXJkLmh0bWwnIH0pXG5cdC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcmVnaXN0ZXIuaHRtbCcgfSlcblx0LndoZW4oJy9sb2dpbicsICAgIHsgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9sb2dpbi5odG1sJyB9KVxuXHQud2hlbignL3RpbWVzaGVldCcseyBjb250cm9sbGVyOiAnVGltZXNoZWV0Q3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy90aW1lc2hlZXQuaHRtbCcgfSlcbn0pXG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1RpbWVzaGVldFN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICBcbiAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3RpbWVzaGVldHMnKVxuICB9XG5cbiAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbih0aW1lc2hlZXQpe1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3RpbWVzaGVldHMnLCB0aW1lc2hlZXQpO1xuICB9XG4gIFxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gIHZhciBzdmMgPSB0aGlzXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgICB9KVxuICB9XG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uIChIX251bWJlciwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgIEhfbnVtYmVyOiBIX251bWJlciwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpXG4gICAgfSlcbiAgfVxuICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoSF9udW1iZXIsIHBhc3N3b3JkLCBuYW1lKSB7XG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMnLCB7XG4gICAgICBIX251bWJlcjogSF9udW1iZXIsIHBhc3N3b3JkOiBwYXNzd29yZCwgbmFtZTogbmFtZVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHN2Yy5sb2dpbihIX251bWJlciwgcGFzc3dvcmQsIG5hbWUpXG4gICAgfSlcbiAgfVxuICBzdmMuaXNMb2dnZWRJbiA9IGZ1bmN0aW9uICgpe1xuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4pe1xuICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ3gtYXV0aCddID0gd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuXG4gICAgICByZXN1bHQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9