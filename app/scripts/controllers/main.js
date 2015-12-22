'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ahkApp
 */
    angular.module('ahkApp')
        .controller('MainCtrl', function ($scope, $rootScope, $location, urlExtractorService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var location = urlExtractorService.count(7),
            isItShowing = $location.path().lastIndexOf('view') === 1,
            vm = this;

    // It controls when to show the prev / next arrows accross the screens
    //    console.log("last index is " + $location.path().lastIndexOf('view') + "from main controller");
        $rootScope.$broadcast('pager.location', location);
        $rootScope.$broadcast('pager.pagination.visible', {visibility: isItShowing});
        $scope.$on('MainCtrl.progress', function (event, args) {
            vm.progress = args;
        });
    });
