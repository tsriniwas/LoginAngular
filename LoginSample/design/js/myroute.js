
var myApp=angular.module('myapp',['ui.router','ngCookies']);
myApp.config(function($stateProvider,$urlRouterProvider){
//$urlRouteProvider.when("","/page1");
$stateProvider
   //.state ("Index",{
    //   url:"/index",
       //templateUrl:"Login.html"
    
  // })
    .state("Login",{
        url:"/Login",
        templateUrl:"Login.html",
        controller:"Loginctrl"
    })
    .state("LoginSuccess",{
        url:"/p",
        templateUrl:"LoginSuccess.html",
        controller:"loginsucessctrl"
    })
    .state("LogOut",{
        url:"/LogOut",
        templateUrl:"LogOut.html",
        controller:"logoutctrl"
    });
    //.otherwise('/page1')  ;
    $urlRouterProvider.otherwise('/Login');
  
});

//templateurl is nothing but target page
//url is part of Url to be opened