var tatcTemp = angular.module('tatcTemp', ['ngMessages', 'ngRoute', 'ngAnimate']);

tatcTemp.controller('contactController', ['$scope', function($scope) {
  $scope.openLink = function(url) {
    window.open(url);
  };

  $scope.messages = {
    name:"",
    message:"",
    email:""
  };
  $scope.messagesArray = [];
  $scope.addMessage = function(messages){
        console.log(messages);
       $scope.messagesArray.push(messages);
       console.log($scope.messagesArray);
       $scope.messages = {}; // empties form after submit
    };
}]);
