angular.module("app",["ngRoute"]),angular.module("app",["ngRoute","toastr"]).controller("ApplicationCtrl",["$scope","$location","$window","UserSvc","toastr",function(e,t,n,o,r){if(e.$on("login",function(n,o){e.currentUser=o,t.path("/")}),e.logout=function(){delete e.currentUser,t.path("/"),window.sessionStorage.removeItem("token")},o.isLoggedIn()){o.getUser().then(function(t){e.currentUser=t})}}]),angular.module("app").controller("DashboardCtrl",["$scope","$location","toastr",function(e,t,n){}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(e,t){e.login=function(n,o){e.errorMsg="",t.login(n,o).then(function(t){e.$emit("login",t)},function(t){e.errorMsg="Incorrect username/password."})}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(n,o){t.register(n,o).then(function(t){e.$emit("login",t)})}}]),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"DashboardCtrl",templateUrl:"/templates/index.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"})}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users").then(function(e){return e.data})},t.login=function(n,o){return e.post("/api/sessions",{username:n,password:o}).then(function(n){return window.sessionStorage.token=n.data,e.defaults.headers.common["x-auth"]=n.data,t.getUser()})},t.register=function(n,o){return e.post("/api/users",{username:n,password:o}).then(function(){return t.login(n,o)})},t.isLoggedIn=function(){var t=!1;return window.sessionStorage.token&&(e.defaults.headers.common["x-auth"]=window.sessionStorage.token,t=!0),t}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJkYXNoYm9hcmQuY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkbG9jYXRpb24iLCIkd2luZG93IiwiVXNlclN2YyIsInRvYXN0ciIsIiRvbiIsIl8iLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwYXRoIiwibG9nb3V0Iiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaXNMb2dnZWRJbiIsImdldFVzZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvck1zZyIsIiRlbWl0IiwiZXJyb3IiLCJyZWdpc3RlciIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic2VydmljZSIsIiRodHRwIiwic3ZjIiwidGhpcyIsImdldCIsImRhdGEiLCJwb3N0IiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0UsWUNERkQsUUFBQUMsT0FBQSxPQUFBLFVBQUEsV0FDQUMsV0FBQSxtQkFBK0IsU0FBQSxZQUFBLFVBQUEsVUFBQSxTQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEdBWTdCLEdBWEFKLEVBQUFLLElBQUEsUUFBQSxTQUFBQyxFQUFBQyxHQUNFUCxFQUFBUSxZQUFBRCxFQUNBTixFQUFBUSxLQUFBLE9BR0ZULEVBQUFVLE9BQUEsaUJBQ0NWLEdBQUEsWUFDQ0MsRUFBQVEsS0FBQSxLQUNBRSxPQUFBQyxlQUFBQyxXQUFBLFVBR0ZWLEVBQUFXLGFBQ0UsQ0FBQVgsRUFBQVksVUFBQUMsS0FBQSxTQUFBQyxHQUNFakIsRUFBQVEsWUFBQVMsUUNmTnBCLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxpQkFBNkIsU0FBQSxZQUFBLFNBQUEsU0FBQUMsRUFBQUMsRUFBQUcsT0NEN0JQLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUF5QixTQUFBLFVBQUEsU0FBQUMsRUFBQUcsR0FDdkJILEVBQUFrQixNQUFBLFNBQUFDLEVBQUFDLEdBQ0NwQixFQUFBcUIsU0FBQSxHQUNDbEIsRUFBQWUsTUFBQUMsRUFBQUMsR0FDQUosS0FBQSxTQUFBVCxHQUNFUCxFQUFBc0IsTUFBQSxRQUFBZixJQUNGLFNBQUFnQixHQUNDdkIsRUFBQXFCLFNBQUEscUNDUkx4QixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsZ0JBQTRCLFNBQUEsVUFBQSxTQUFBQyxFQUFBRyxHQUMxQkgsRUFBQXdCLFNBQUEsU0FBQUwsRUFBQUMsR0FDRWpCLEVBQUFxQixTQUFBTCxFQUFBQyxHQUNBSixLQUFBLFNBQUFULEdBQ0VQLEVBQUFzQixNQUFBLFFBQUFmLFNDTE5WLFFBQUFDLE9BQUEsT0FDQTJCLFFBQVEsaUJBQUEsU0FBQUMsR0FDTkEsRUFDQUMsS0FBQSxLQUFBNUIsV0FBQSxnQkFBK0M2QixZQUFBLDBCQUMvQ0QsS0FBQSxhQUFBNUIsV0FBQSxlQUE4QzZCLFlBQUEsNkJBQzlDRCxLQUFBLFVBQUE1QixXQUFBLFlBQTJDNkIsWUFBQSw2QkNMN0MvQixRQUFBQyxPQUFBLE9BQ0ErQixRQUFBLFdBQW9CLFFBQUEsU0FBQUMsR0FDbEIsR0FBQUMsR0FBQUMsSUFDQUQsR0FBQWhCLFFBQUEsV0FDRSxNQUFBZSxHQUFBRyxJQUFBLGNBQ0FqQixLQUFBLFNBQUFDLEdBQ0UsTUFBQUEsR0FBQWlCLFFBR0pILEVBQUFiLE1BQUEsU0FBQUMsRUFBQUMsR0FDRSxNQUFBVSxHQUFBSyxLQUFBLGlCQUNFaEIsU0FBQUEsRUFBQUMsU0FBQUEsSUFDRkosS0FBQSxTQUFBQyxHQUdFLE1BRkFOLFFBQUFDLGVBQUF3QixNQUFBbkIsRUFBQWlCLEtBQ0FKLEVBQUFPLFNBQUFDLFFBQUFDLE9BQUEsVUFBQXRCLEVBQUFpQixLQUNBSCxFQUFBaEIsYUFHSmdCLEVBQUFQLFNBQUEsU0FBQUwsRUFBQUMsR0FDRSxNQUFBVSxHQUFBSyxLQUFBLGNBQ0VoQixTQUFBQSxFQUFBQyxTQUFBQSxJQUNGSixLQUFBLFdBQ0UsTUFBQWUsR0FBQWIsTUFBQUMsRUFBQUMsTUFHSlcsRUFBQWpCLFdBQUEsV0FDRSxHQUFBMEIsSUFBQSxDQUtBLE9BSkE3QixRQUFBQyxlQUFBd0IsUUFDRU4sRUFBQU8sU0FBQUMsUUFBQUMsT0FBQSxVQUFBNUIsT0FBQUMsZUFBQXdCLE1BQ0FJLEdBQUEsR0FFRkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgJ25nUm91dGUnXG5dKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnbmdSb3V0ZScsJ3RvYXN0ciddKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdywgVXNlclN2YywgdG9hc3RyKSB7XG4gICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKVxuICB9KVxuXG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpe1xuICBcdGRlbGV0ZSgkc2NvcGUuY3VycmVudFVzZXIpIFxuICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICB9XG5cbiAgaWYoVXNlclN2Yy5pc0xvZ2dlZEluKCkpe1xuXHQgIFx0dmFyIHVzZXIgPSBVc2VyU3ZjLmdldFVzZXIoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHQgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gcmVzcG9uc2U7XG5cdCAgXHR9KVxuIFx0fVxuXG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignRGFzaGJvYXJkQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgdG9hc3RyKSB7XG4gIFxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgJHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICBcdCRzY29wZS5lcnJvck1zZyA9ICcnO1xuICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcbiAgICB9LCBmdW5jdGlvbihlcnJvcil7XG4gICAgXHQkc2NvcGUuZXJyb3JNc2cgPSBcIkluY29ycmVjdCB1c2VybmFtZS9wYXNzd29yZC5cIjtcbiAgICB9KVxuICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUmVnaXN0ZXJDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgVXNlclN2Yykge1xuICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgVXNlclN2Yy5yZWdpc3Rlcih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCB1c2VyKVxuICAgIH0pXG4gIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICRyb3V0ZVByb3ZpZGVyXG4gIC53aGVuKCcvJywgICAgICAgICB7IGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDdHJsJywgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2luZGV4Lmh0bWwnIH0pXG4gIC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvcmVnaXN0ZXIuaHRtbCcgfSlcbiAgLndoZW4oJy9sb2dpbicsICAgIHsgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9sb2dpbi5odG1sJyB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcbiAgdmFyIHN2YyA9IHRoaXNcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VycycpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICAgIH0pXG4gIH1cbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YVxuICAgICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ3gtYXV0aCddID0gcmVzcG9uc2UuZGF0YVxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcbiAgICB9KVxuICB9XG4gIHN2Yy5yZWdpc3RlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICB9KVxuICB9XG4gIHN2Yy5pc0xvZ2dlZEluID0gZnVuY3Rpb24gKCl7XG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIGlmKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbil7XG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsneC1hdXRoJ10gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW5cbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=