'use strict';
angular.module('app').controller('playIndex1', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});