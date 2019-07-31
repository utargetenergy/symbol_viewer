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

    $scope.txTotalSymbols = localStorage.getItem("totalSymbols");
    $scope.txTotalLHs = localStorage.getItem("totalLHs");
    $scope.rxTotalSymbols = localStorage.getItem("rxTotalSymbols");
    $scope.rxTotalLHs = localStorage.getItem("rxTotalLHs");


    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

  });
