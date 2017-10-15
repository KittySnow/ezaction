'use strict';
angular.module('app').controller('progressAdmin', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});