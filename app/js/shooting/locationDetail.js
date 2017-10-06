
'use strict';

(function (app) {

    app.controller( 'shootingLocationDetail', ['$route','$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($route ,$routeParams, $timeout, $http,$scope,$rootScope,tips) {
        $rootScope.navMenu = '#'+ $route.current.originalPath;
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        });
    }]);

})(angular.module('shootingLocationDetail', []));
