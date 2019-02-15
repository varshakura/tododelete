angular.module('todoApp').controller('TasksController', ['$scope', 
function ($scope) {
  
  $scope.vm = {};

  $scope.vm.taskName = null;

  $scope.vm.tasks = [];

  $scope.vm.addTask = function addTask() {
    if($scope.vm.taskName) {
      $scope.vm.tasks.push($scope.vm.taskName);
      $scope.vm.taskName = null;
    }
  };
  // $scope.vm.removeTask=function removeTask(taskName){
  //   if(taskName) {
  //     $scope.vm.tasks.splice(tasks.indexOf(taskName), 1);
  //   }
  // }
  $scope.remove = function(taskName) { 
    var index = $scope.vm.tasks.indexOf(taskName);
    $scope.vm.tasks.splice(index, 1);     
  }
}]);