'use strict';

/**
 * @ngdoc function
 * @name symbolViewerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the symbolViewerAppApp
 */
angular.module('symbolViewerAppApp')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  });
