'use strict';
angular.module('app').controller('shootingLocationDetailAdd', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
});