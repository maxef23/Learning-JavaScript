angular.module("myApp", [])
.controller("firstCtrl", function($scope){
    //Создаем тестовую переменную
    //Создаем массив, который будет хранить переменные
    //Создаем функцию, которая добавляет элементы
    //Создаем функцию, которая удаляет элементы

    $scope.Input = "тестовая переменная";

    $scope.Array = ['задание1', "задание2"];

    $scope.AddNew = function(){
      if ($scope.Input != ""){
        $scope.Array.push($scope.Input);
        $scope.Input = "";
      } else {console.log("Пусто"); }
    };

    $scope.Delete = function(item){
      var index = $scope.Array.indexOf(item);
      $scope.Array.splice(index, 1);
    };


});
