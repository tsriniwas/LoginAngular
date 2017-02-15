
myApp.controller("loginsucessctrl",["$scope","$state","$rootScope","$cookies","$log","$document",function($scope,$state,$rootScope,$cookies,$log,$document){

var user=$cookies.get("loginobj");
  if(user!=undefined)
  {

 $log.log("login done");
 // Use $ object in place of console. $ object represent angular for console (javascript object)
 //$rootScope is globale object for entire angular app which helps use to pass data from controlle to controller and service to service.... more.. It is for temporary storage.. once u refresh ur page it will wash out.

var user=$rootScope.loginobj;
//var currDate= new Date(2017,1,13);
//currDate=currDate-1;
 //currDate=currDate;

  console.dir($document);

//$log.log(expireDate);  //CurrentDate | date:'dd/MM/yyyy'
var user=$cookies.get("loginobj");


 $log.log("Welcome",JSON.parse(user).name);

 $scope.UserName=JSON.parse(user).name;

$scope.LogOut=function()
{
   var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() - 1);
  // Setting a cookie
  $cookies.put('loginobj', "", {'expires': expireDate});
  $state.go("LogOut");
}

  }
  else{
    $state.go("Login");
  }
}]);