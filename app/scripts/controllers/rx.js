'use strict';

/**
 * @ngdoc function
 * @name symbolViewerAppApp.controller:RxCtrl
 * @description
 * # RxCtrl
 * Controller of the symbolViewerAppApp
 */
angular.module('symbolViewerAppApp')
  .controller('RxCtrl', function ($scope) {

       $scope.rxTotalSymbols= 60;
       $scope.rxTotalLHs= 1;
 
       localStorage.setItem("rxTotalSymbols", $scope.rxTotalSymbols);
       localStorage.setItem("rxTotalLHs", $scope.rxTotalLHs);

  });
