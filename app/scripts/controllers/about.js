'use strict';

/**
 * @ngdoc function
 * @name burnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the burnApp
 */
angular.module('burnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
