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

.controller('lumbarAssessmentController', ['$scope', '$http', '$ionicScrollDelegate', 
  function($scope, $http, $ionicScrollDelegate) {

  $scope.activeSection = 0;
  $scope.activeCycle = 1;
  $scope.choice = {
      mechChoice: "",
      sympChoice: ""
    };
  $scope.centValues = [0,0,0,0,0,0];
  $scope.postCentValues = [0,0,0,0,0,0];
  $scope.preCentSum = 0;
  $scope.postCentSum = 0;
  $scope.isChecked = {
       valueOne : false,
       valueTwo: false
     };


  $scope.uncheckAll = function() {
    $scope.centValues = [];
    $scope.centValues = [0,0,0,0,0,0];

  };

  $scope.uncheckNone = function() {
    $scope.isChecked.valueOne = false;

  };

  $scope.preCentralization = function() {
    
    if ($scope.preCentSum > 0) {
      $scope.preCentSum = 0;
    }
   
    for (var i = $scope.centValues.length - 1; i >= 0; i--) {
      $scope.preCentSum += $scope.centValues[i];
    }
    // alert($scope.sum);
    return $scope.preCentSum; 

    };

  $scope.uncheckAllTwo = function() {
    $scope.postCentValues = [];
    $scope.postCentValues = [0,0,0,0,0,0];

  };

  $scope.uncheckNoneTwo = function() {
    $scope.isChecked.valueTwo = false;

  };

  $scope.postCentralization = function() {
    
    if ($scope.postCentSum > 0) {
      $scope.postCentSum = 0;
    }
   
    for (var i = $scope.postCentValues.length - 1; i >= 0; i--) {
      $scope.postCentSum += $scope.postCentValues[i];
    }
    // alert($scope.sum);
    return $scope.postCentSum; 

    };

    $scope.nextView = function() {
      return $scope.activeSection += 1;
    }

     $scope.scrollTop = function() { 
      $ionicScrollDelegate.scrollTop();
    };

    
  
}]) //End Lumbar Assessment Controller

































