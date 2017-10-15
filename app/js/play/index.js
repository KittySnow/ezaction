'use strict';
angular.module('app').controller('playIndex', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});