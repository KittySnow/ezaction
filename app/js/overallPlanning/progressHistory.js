'use strict';
angular.module('app').controller('progressHistory', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});