'use strict';
angular.module('app').controller('overallManagement', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});