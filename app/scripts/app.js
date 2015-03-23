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
  $urlRouterProvider.otherwise("/main");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "partials/main.html"
    })
    .state('main.list', {
      url: "/list",
      templateUrl: "partials/main.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items", 'asdf','sdfg','dfgh','fghj','ghjk','hjkl','qwer','qertw','trye'];
      }
    })
    .state('media', {
      url: "/media",
      templateUrl: "partials/media.html"
    })
    .state('media.list', {
      url: "/list",
      templateUrl: "partials/media.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});

app.controller('AppCtrl', ['$scope', function($scope){
}]);