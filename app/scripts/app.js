'use strict';

/**
 * @ngdoc overview
 * @name burnApp
 * @description
 * # burnApp
 *
 * Main module of the application.
 */
var app = angular
  .module('burnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
  ]);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/main');
  //
  // Now set up the states
  $stateProvider
    // MainState: this is the landing page of the site //
    .state('main', {
      url: '/main',
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .state('main.list', {
      url: '/list',
      templateUrl: 'partials/main.list.html',
      controller: function($scope) {
        $scope.items = ['A', 'List', 'Of', 'Items', 'asdf','sdfg','dfgh','fghj','ghjk','hjkl','qwer','qertw','trye'];
      }
    })

    // EventState: this is the Event page and all sub-directories of it //
    .state('event', {
      url: '/event',
      templateUrl: 'partials/event/event.html',
      controller: 'EventCtrl'
    })
    .state('event.preparation', {
      url: '/preparation',
      templateUrl: 'partials/event/event.preparation.html'
    })
    .state('event.koreaburn2015', {
      url: '/koreaburn2015',
      templateUrl: 'partials/event/event.koreaburn2015.html'
    })
    .state('event.artsandperformances', {
      url: '/artsandperformances',
      templateUrl: 'partials/event/event.artsandperformances.html'
    })
    .state('event.themecamps', {
      url: '/themecamps',
      templateUrl: 'partials/event/event.themecamps.html'
    })
    // CultureState: this is the Culture page and all sub-directories of it //
    .state('culture', {
      url: '/culture',
      templateUrl: 'partials/culture/culture.html',
      controller: 'CultureCtrl'
    })
    .state('10principles', {
      url: '/10principles',
      templateUrl: 'partials/culture/culture.10principles.html'
    })
    .state('leavenotrace', {
      url: '/leavenotrace',
      templateUrl: 'partials/culture/culture.leavenotrace.html'
    })
    .state('participation', {
      url: '/participation',
      templateUrl: 'partials/culture/culture.participation.html'
    })
    // InfoState: this is the Information page and all sub-directories of it //
    .state('info', {
      url: '/info',
      templateUrl: 'partials/info/info.html',
      controller: 'InfoCtrl'
    })
    .state('tickets', {
      url: '/tickets',
      templateUrl: 'partials/info/info.tickets.html'
    })
    .state('gettingthere', {
      url: '/gettingthere',
      templateUrl: 'partials/info/info.gettingthere.html'
    })
    .state('rulesandregs', {
      url: '/rulesandregs',
      templateUrl: 'partials/info/info.rulesandregs.html'
    })
    .state('accommodations', {
      url: '/accommodations',
      templateUrl: 'partials/info/info.accommodations.html'
    })
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'partials/info/info.schedule.html'
    })
  ;
});

app.controller('AppCtrl', ['$scope', function($scope){
}]);