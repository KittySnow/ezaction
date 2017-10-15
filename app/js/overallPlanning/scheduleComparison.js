'use strict';
angular.module('app').controller('scheduleComparison', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});