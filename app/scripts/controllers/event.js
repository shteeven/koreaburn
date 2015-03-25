'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnApp');

app.controller('EventCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});