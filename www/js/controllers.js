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

.controller('lumbarController', ['$scope', '$http', '$ionicScrollDelegate', 
  function($scope, $http, $ionicScrollDelegate) {

    $scope.activeQuestion = -1;


    $scope.selections = {
      choice: ""
    };

    $http.get('js/questions.json').success(function (data){
      $scope.questions = data;
      $scope.totalQuestions = $scope.questions.length;
    });

    $scope.selectContinue = function() {
      return $scope.activeQuestion += 1;
    }

    $scope.hideTransition = function () {
      if ($scope.totalQuestions === $scope.activeQuestion) {
        return false;
      } else {
        return true;
      }
    }
    
    $scope.scrollTop = function() { 
      $ionicScrollDelegate.scrollTop();
    };




}]) //End lumbarController section

.controller('lumbarAssessmentController', ['$scope', '$http', function($scope, $http) {

  $http.get('js/centCB.json').success(function (data){
      $scope.items = data;

    });

  $scope.centValues = [0,0,0,0,0,0];
  $scope.sum = 0;
  $scope.isChecked = {
       value : false
     };


  $scope.uncheckAll = function() {
    $scope.centValues = [];
  $scope.centValues = [0,0,0,0,0,0];

  };

  $scope.uncheckNone = function() {
    $scope.isChecked.value = false;

  };



  $scope.preCentralization = function() {
    
    if ($scope.sum > 0) {
      $scope.sum = 0;
    }
   
    for (var i = $scope.centValues.length - 1; i >= 0; i--) {
      $scope.sum += $scope.centValues[i];
    }
    // alert($scope.sum);
    return $scope.sum; 

    };

    
  
}]) //End Lumbar Assessment Controller

































