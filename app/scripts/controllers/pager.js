'use strict';

/**
 * @ngdoc function
 * @name ahkApp.controller:PagerCtrl
 * @description
 * # PagerCtrl
 * Controller of the ahkApp
 */
angular.module('ahkApp')
  .controller('PagerCtrl', function ($scope, $location, $rootScope) {
    var counter,
        position,
        pageMax = 19,
        progress = 100 / pageMax,
        progressbar,
        vm = this;

    // it is better isItShowing to have
    // value equal to false immediately
    vm.isItShowing = false;

    vm.page = {
        labelPrev: "Предишна",
        labelNext: "Следваща"
    };

    /* It monitors for direct re-load  */
    $scope.$on('pager.location', function(event, args) {
        counter = args;
    });

    $scope.$on('pager.pagination.visible', function(event, args) {
        vm.isItShowing = args.visibility;
    });

    vm.movePage = function movePage (direction) {
      position = direction === 'next' ? counter++ : counter--;
      vm.back = counter < 2;
      vm.next = (counter === pageMax);
      position = Math.round(counter) > 0 ? $location.url("/views/" + counter) : counter = 1;
      progressbar = progress * counter;
      $rootScope.$broadcast('MainCtrl.progress', progressbar);
    };
  });
