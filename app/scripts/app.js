'use strict';

/**
 * @ngdoc overview
 * @name symbolViewerAppApp
 * @description
 * # symbolViewerAppApp
 *
 * Main module of the application.
 */
angular
  .module('symbolViewerAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/symbol_viewer/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
       .when('/symbol_viewer/tx', {
        templateUrl: 'views/tx.html',
        controller: 'TxCtrl',
        controllerAs: 'tx'
      })
      .when('/tx', {
        templateUrl: 'views/tx.html',
        controller: 'TxCtrl',
        controllerAs: 'tx'
      })

      .when('/symbol_viewer/rx', {
        templateUrl: 'views/rx.html',
        controller: 'RxCtrl',
        controllerAs: 'rx'
      })
      .when('/rx', {
        templateUrl: 'views/rx.html',
        controller: 'RxCtrl',
        controllerAs: 'rx'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);

  });
