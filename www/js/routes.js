angular.module('app.routes', [])

.config(function($ionicConfigProvider, $urlRouterProvider, $stateProvider) {
    $ionicConfigProvider.tabs.position('bottom');//pushes toolbar on andriod to bottom of screen
    $stateProvider
      .state('tabs', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      }) //tabs


      .state('tabs.moduleDescription',{
        url: '/moduleDescription',
        views: {
          'moduleDescription-tab' : {
            templateUrl: 'templates/moduleDescription.html',
            controller: 'moduleSelectionController'
          }
        }
      })

      .state('tabs.home',{
        url: '/home',
        views: {
          'home-tab' : {
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('tabs.detail',{
        url: '/moduleDescription/:aId',
        views: {
          'moduleDescription-tab' : {
            templateUrl: 'templates/detail.html',
            controller: 'moduleSelectionController'
          }
        }
      })

      .state('lumbar',{
        url: '/lumbar',
        templateUrl: 'templates/lumbar.html',
        controller: 'lumbarController'
          })

      .state('lumbarassessment',{
        url: '/lumbarassessment',
        templateUrl: 'templates/lumbarAssessment.html',
        controller: 'lumbarAssessmentController'
          })
        
  
      $urlRouterProvider.otherwise('/tab/home');
}) 