'use strict';

/**
 * @ngdoc overview
 * @name ahkApp
 * @description
 * # ahkApp
 *
 * Main module of the application.
 */
angular
  .module('ahkApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'MainCtrl'
      })
      .when('/views/:view', {
        templateUrl: function routeParams (params) {
          return "/views/view"+params.view+".html";
        },
        controller: 'MainCtrl',
        controllerAs: 'MainCtrl'
      })
      .when('/about/', {
        templateUrl: '/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/#'
      });
      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });
  });
