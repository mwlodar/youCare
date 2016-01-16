angular.module('app.controllers', [])

.controller('moduleSelectionController', ['$scope', '$http', '$state',
  function($scope, $http, $state) {
    $http.get('js/moduleDescription.json').success(function (data)
    {
      $scope.modules = data;
      $scope.whichmodule=$state.params.aId;
      $scope.data= { showDelete: false, showReorder: false};

      $scope.doRefresh = function () {
        $http.get('js/moduleDescription.json').success(function (data) {
            $scope.modules = data;
            $scope.$broadcast('scroll.refreshComplete');
        });
      }

      $scope.moveItem = function(item, fromIndex, toIndex) {
        $scope.modules.splice(fromIndex, 1);
        $scope.modules.splice(toIndex, 0, item);
      }

      $scope.onItemDelete = function(item) {
        $scope.modules.splice($scope.modules.indexOf(item), 1);
      }

      $scope.toggleStar = function(item) {
      item.star = !item.star;
    }

    });

    

}]) // end module Selection controller

.controller('lumbarController', ['$scope', '$http',
  function($scope, $http) {

    $scope.activeQuestion = -1;

    $scope.selections = {
      choice: ""
    };

    $http.get('js/questions.json').success(function (data){

      $scope.questions = data;
    });

    $scope.selectContinue = function() {
      return $scope.activeQuestion += 1;
    }

    




}])


