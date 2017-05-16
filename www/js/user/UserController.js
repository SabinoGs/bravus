angular.module('todo')

// controller para usuarios



.controller('ResourceController',['$scope','Entry', function($scope,Entry) {

  // var entry = Entry.success(function(data){
  //   console.log(entry);
  // })//retorna a API/alunos
  Entry.success(function(data){
    $scope.users = data
  })

}])

.controller('RegisterAluno',['$scope',"$rootScope",'Register', function($scope,$rootScope, Register,user){
    $scope.register = function(){
      console.log("user",$scope.user);
      Register.save($scope.user)
  }
}])

.controller('ListaTodos',['$scope','Register',function($scope, Register,users){
  // $scope.listaTodos = function(){
    return Register.query(function(users){
      // console.log(users);
      $scope.alunos = users
    })
  // }
}])

.controller('Login',["$scope","Register",function($scope,Register){
  $scope.register = function(){
    var user = {username:"sabinogs",password:"12345"};
    Register.save(user)
  }
}])
