'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:CultureCtrl
 * @description
 * # CultureCtrl
 * Controller of the burnApp
 */
var app = angular.module('burnApp');

app.controller('CultureCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});