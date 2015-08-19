angular.module("app",["ngRoute"]),angular.module("app",["ngRoute","toastr"]).controller("ApplicationCtrl",["$scope","$location","$window","UserSvc","toastr",function(e,t,o,n,r){if(e.$on("login",function(o,n){e.currentUser=n,t.path("/")}),e.logout=function(){delete e.currentUser,t.path("/"),window.sessionStorage.removeItem("token")},n.isLoggedIn()){n.getUser().then(function(t){e.currentUser=t})}else t.path("/login")}]),angular.module("app").controller("DashboardCtrl",["$scope","$location","UserSvc","toastr",function(e,t,o,n){o.isLoggedIn()||t.path("/login")}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","toastr",function(e,t,o){e.login=function(o,n){e.errorMsg="",t.login(o,n).then(function(t){e.$emit("login",t)},function(t){e.errorMsg="Incorrect H Number/Password."})}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(e,t){e.register=function(o,n,r){t.register(o,n,r).then(function(t){e.$emit("login",t)})}}]).directive("compareTo",function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,t,o,n){n.$validators.compareTo=function(t){return t==e.otherModelValue},e.$watch("otherModelValue",function(){n.$validate()})}}}),angular.module("app").config(["$routeProvider",function(e){e.when("/",{controller:"DashboardCtrl",templateUrl:"/templates/dashboard.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"/templates/register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"/templates/login.html"})}]),angular.module("app").service("UserSvc",["$http",function(e){var t=this;t.getUser=function(){return e.get("/api/users").then(function(e){return e.data})},t.login=function(o,n){return e.post("/api/sessions",{H_number:o,password:n}).then(function(o){return window.sessionStorage.token=o.data,e.defaults.headers.common["x-auth"]=o.data,t.getUser()})},t.register=function(o,n,r){return e.post("/api/users",{H_number:o,password:n,name:r}).then(function(){return t.login(o,n,r)})},t.isLoggedIn=function(){var t=!1;return window.sessionStorage.token&&(e.defaults.headers.common["x-auth"]=window.sessionStorage.token,t=!0),t}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJkYXNoYm9hcmQuY3RybC5qcyIsImxvZ2luLmN0cmwuanMiLCJyZWdpc3Rlci5jdHJsLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkbG9jYXRpb24iLCIkd2luZG93IiwiVXNlclN2YyIsInRvYXN0ciIsIiRvbiIsIl8iLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJwYXRoIiwibG9nb3V0Iiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaXNMb2dnZWRJbiIsImdldFVzZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2dpbiIsIkhfbnVtYmVyIiwicGFzc3dvcmQiLCJlcnJvck1zZyIsIiRlbWl0IiwiZXJyb3IiLCJyZWdpc3RlciIsIm5hbWUiLCJkaXJlY3RpdmUiLCJyZXF1aXJlIiwic2NvcGUiLCJvdGhlck1vZGVsVmFsdWUiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJpYnV0ZXMiLCJuZ01vZGVsIiwiJHZhbGlkYXRvcnMiLCJjb21wYXJlVG8iLCJtb2RlbFZhbHVlIiwiJHdhdGNoIiwiJHZhbGlkYXRlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzZXJ2aWNlIiwiJGh0dHAiLCJzdmMiLCJ0aGlzIiwiZ2V0IiwiZGF0YSIsInBvc3QiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDRSxZQ0RGRCxRQUFBQyxPQUFBLE9BQUEsVUFBQSxXQUNBQyxXQUFBLG1CQUErQixTQUFBLFlBQUEsVUFBQSxVQUFBLFNBQUEsU0FBQUMsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FZN0IsR0FYQUosRUFBQUssSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0VQLEVBQUFRLFlBQUFELEVBQ0FOLEVBQUFRLEtBQUEsT0FHRlQsRUFBQVUsT0FBQSxpQkFDQ1YsR0FBQSxZQUNDQyxFQUFBUSxLQUFBLEtBQ0FFLE9BQUFDLGVBQUFDLFdBQUEsVUFHRlYsRUFBQVcsYUFDRSxDQUFBWCxFQUFBWSxVQUFBQyxLQUFBLFNBQUFDLEdBQ0VqQixFQUFBUSxZQUFBUyxRQUdGaEIsR0FBQVEsS0FBQSxhQ2xCSlosUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGlCQUE2QixTQUFBLFlBQUEsVUFBQSxTQUFBLFNBQUFDLEVBQUFDLEVBQUFFLEVBQUFDLEdBRTVCRCxFQUFBVyxjQUNDYixFQUFBUSxLQUFBLGFDSkZaLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUF5QixTQUFBLFVBQUEsU0FBQSxTQUFBQyxFQUFBRyxFQUFBQyxHQUN2QkosRUFBQWtCLE1BQUEsU0FBQUMsRUFBQUMsR0FDQ3BCLEVBQUFxQixTQUFBLEdBQ0NsQixFQUFBZSxNQUFBQyxFQUFBQyxHQUNBSixLQUFBLFNBQUFULEdBQ0VQLEVBQUFzQixNQUFBLFFBQUFmLElBQ0YsU0FBQWdCLEdBQ0N2QixFQUFBcUIsU0FBQSxxQ0NSTHhCLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxnQkFBNEIsU0FBQSxVQUFBLFNBQUFDLEVBQUFHLEdBQzFCSCxFQUFBd0IsU0FBQSxTQUFBTCxFQUFBQyxFQUFBSyxHQUNFdEIsRUFBQXFCLFNBQUFMLEVBQUFDLEVBQUFLLEdBQ0FULEtBQUEsU0FBQVQsR0FDRVAsRUFBQXNCLE1BQUEsUUFBQWYsU0FLTm1CLFVBQUEsWUFBcUIsV0FDakIsT0FDSUMsUUFBQSxVQUNBQyxPQUNJQyxnQkFBQSxjQUVKQyxLQUFBLFNBQUFGLEVBQUFHLEVBQUFDLEVBQUFDLEdBRUlBLEVBQUFDLFlBQUFDLFVBQUEsU0FBQUMsR0FDSSxNQUFBQSxJQUFBUixFQUFBQyxpQkFHSkQsRUFBQVMsT0FBQSxrQkFBQSxXQUNJSixFQUFBSyxrQkN2QmhCekMsUUFBQUMsT0FBQSxPQUNBeUMsUUFBUSxpQkFBQSxTQUFBQyxHQUNQQSxFQUNBQyxLQUFBLEtBQUExQyxXQUFBLGdCQUErQzJDLFlBQUEsOEJBQy9DRCxLQUFBLGFBQUExQyxXQUFBLGVBQThDMkMsWUFBQSw2QkFDOUNELEtBQUEsVUFBQTFDLFdBQUEsWUFBMkMyQyxZQUFBLDZCQ0w1QzdDLFFBQUFDLE9BQUEsT0FDQTZDLFFBQUEsV0FBb0IsUUFBQSxTQUFBQyxHQUNsQixHQUFBQyxHQUFBQyxJQUNBRCxHQUFBOUIsUUFBQSxXQUNFLE1BQUE2QixHQUFBRyxJQUFBLGNBQ0EvQixLQUFBLFNBQUFDLEdBQ0UsTUFBQUEsR0FBQStCLFFBR0pILEVBQUEzQixNQUFBLFNBQUFDLEVBQUFDLEdBQ0UsTUFBQXdCLEdBQUFLLEtBQUEsaUJBQ0U5QixTQUFBQSxFQUFBQyxTQUFBQSxJQUNGSixLQUFBLFNBQUFDLEdBR0UsTUFGQU4sUUFBQUMsZUFBQXNDLE1BQUFqQyxFQUFBK0IsS0FDQUosRUFBQU8sU0FBQUMsUUFBQUMsT0FBQSxVQUFBcEMsRUFBQStCLEtBQ0FILEVBQUE5QixhQUdKOEIsRUFBQXJCLFNBQUEsU0FBQUwsRUFBQUMsRUFBQUssR0FDRSxNQUFBbUIsR0FBQUssS0FBQSxjQUNFOUIsU0FBQUEsRUFBQUMsU0FBQUEsRUFBQUssS0FBQUEsSUFDRlQsS0FBQSxXQUNFLE1BQUE2QixHQUFBM0IsTUFBQUMsRUFBQUMsRUFBQUssTUFHSm9CLEVBQUEvQixXQUFBLFdBQ0UsR0FBQXdDLElBQUEsQ0FLQSxPQUpBM0MsUUFBQUMsZUFBQXNDLFFBQ0VOLEVBQUFPLFNBQUFDLFFBQUFDLE9BQUEsVUFBQTFDLE9BQUFDLGVBQUFzQyxNQUNBSSxHQUFBLEdBRUZBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgJ25nUm91dGUnXHJcbl0pXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnLCd0b2FzdHInXSlcclxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgJHdpbmRvdywgVXNlclN2YywgdG9hc3RyKSB7XHJcbiAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlclxyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKVxyXG4gIH0pXHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbigpe1xyXG4gIFx0ZGVsZXRlKCRzY29wZS5jdXJyZW50VXNlcikgXHJcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpXHJcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gIH1cclxuXHJcbiAgaWYoVXNlclN2Yy5pc0xvZ2dlZEluKCkpe1xyXG5cdCAgXHR2YXIgdXNlciA9IFVzZXJTdmMuZ2V0VXNlcigpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0ICAgICRzY29wZS5jdXJyZW50VXNlciA9IHJlc3BvbnNlO1xyXG5cdCAgXHR9KVxyXG4gXHR9ZWxzZSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xvZ2luJylcclxuICB9XHJcblxyXG59KVxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0Rhc2hib2FyZEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMsIHRvYXN0cikge1xyXG5cclxuXHRpZighVXNlclN2Yy5pc0xvZ2dlZEluKCkpe1xyXG5cdFx0JGxvY2F0aW9uLnBhdGgoJy9sb2dpbicpXHJcblx0fVxyXG5cdFxyXG59KVxyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMsIHRvYXN0cikge1xyXG4gICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uIChIX251bWJlciwgcGFzc3dvcmQpIHtcclxuICBcdCRzY29wZS5lcnJvck1zZyA9ICcnO1xyXG4gICAgVXNlclN2Yy5sb2dpbihIX251bWJlciwgcGFzc3dvcmQpXHJcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcclxuICAgIFx0JHNjb3BlLmVycm9yTXNnID0gXCJJbmNvcnJlY3QgSCBOdW1iZXIvUGFzc3dvcmQuXCI7XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XHJcbiAgJHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKEhfbnVtYmVyLCBwYXNzd29yZCwgbmFtZSkge1xyXG4gICAgVXNlclN2Yy5yZWdpc3RlcihIX251bWJlciwgcGFzc3dvcmQsIG5hbWUpXHJcbiAgICAudGhlbihmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgdXNlcilcclxuICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxuLmRpcmVjdGl2ZShcImNvbXBhcmVUb1wiLCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXHJcbiAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgb3RoZXJNb2RlbFZhbHVlOiBcIj1jb21wYXJlVG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMsIG5nTW9kZWwpIHtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZ01vZGVsLiR2YWxpZGF0b3JzLmNvbXBhcmVUbyA9IGZ1bmN0aW9uKG1vZGVsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbFZhbHVlID09IHNjb3BlLm90aGVyTW9kZWxWYWx1ZTtcclxuICAgICAgICAgICAgfTtcclxuIFxyXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goXCJvdGhlck1vZGVsVmFsdWVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuZ01vZGVsLiR2YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuICIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG5cdCRyb3V0ZVByb3ZpZGVyXHJcblx0LndoZW4oJy8nLCAgICAgICAgIHsgY29udHJvbGxlcjogJ0Rhc2hib2FyZEN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvZGFzaGJvYXJkLmh0bWwnIH0pXHJcblx0LndoZW4oJy9yZWdpc3RlcicsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9yZWdpc3Rlci5odG1sJyB9KVxyXG5cdC53aGVuKCcvbG9naW4nLCAgICB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJy90ZW1wbGF0ZXMvbG9naW4uaHRtbCcgfSlcclxufSlcclxuXHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICB9XHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKEhfbnVtYmVyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvc2Vzc2lvbnMnLCB7XHJcbiAgICAgIEhfbnVtYmVyOiBIX251bWJlciwgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcclxuICAgIH0pXHJcbiAgfVxyXG4gIHN2Yy5yZWdpc3RlciA9IGZ1bmN0aW9uIChIX251bWJlciwgcGFzc3dvcmQsIG5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzJywge1xyXG4gICAgICBIX251bWJlcjogSF9udW1iZXIsIHBhc3N3b3JkOiBwYXNzd29yZCwgbmFtZTogbmFtZVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBzdmMubG9naW4oSF9udW1iZXIsIHBhc3N3b3JkLCBuYW1lKVxyXG4gICAgfSlcclxuICB9XHJcbiAgc3ZjLmlzTG9nZ2VkSW4gPSBmdW5jdGlvbiAoKXtcclxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcclxuICAgIGlmKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlbil7XHJcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWyd4LWF1dGgnXSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS50b2tlblxyXG4gICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==