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

    $scope.ie = getIEVersion(); 

    function getIEVersion() {
      var sAgent = window.navigator.userAgent;
      var Idx = sAgent.indexOf("MSIE");

      // If IE, return version number.
      if (Idx > 0) 
        return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

      // If IE 11 then look for Updated user agent string.
      else if (!!navigator.userAgent.match(/Trident\/7\./)) 
        return 11;

      else
        return 0; //It is not IE
    }
    
  });
