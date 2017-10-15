'use strict';
angular.module('app').controller('shootingLocation', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});