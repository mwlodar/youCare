angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.home', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.aboutUs', {
      url: '/page3',
      views: {
        'tab2': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.getStarted', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/getStarted.html',
          controller: 'getStartedCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('lowBack/SciaticaModule', {
      url: '/page5',
      templateUrl: 'templates/lowBack/SciaticaModule.html',
      controller: 'lowBack/SciaticaModuleCtrl'
    })
        
      
    
      
        
    .state('neckModule', {
      url: '/page6',
      templateUrl: 'templates/neckModule.html',
      controller: 'neckModuleCtrl'
    })
        
      
    
      
        
    .state('kneeModule', {
      url: '/page7',
      templateUrl: 'templates/kneeModule.html',
      controller: 'kneeModuleCtrl'
    })
        
      
    
      
        
    .state('shoulderModule', {
      url: '/page8',
      templateUrl: 'templates/shoulderModule.html',
      controller: 'shoulderModuleCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page2');

});