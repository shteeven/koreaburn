'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnApp');

app.controller('MainCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
