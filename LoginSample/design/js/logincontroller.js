
myApp.controller("Loginctrl",["$scope","$cookies","$state","$rootScope",function($scope,$cookies,$state,$rootScope){

    //$stae is another service defined by ui.router

$scope.myform=function(){
    var obj=$scope.x;
   // console.log(obj);
    
    if(obj.name=="sriniwas" &&  obj.pwd=="sriniwas")
    {
       console.log(obj) ;
         $cookies.put("loginobj",JSON.stringify(obj));
       $state.go("LoginSuccess");
       
       //$rootScope.loginobj=$scope.x;
     

    }
    else{
      console.log("fail");
    }
}


}]);