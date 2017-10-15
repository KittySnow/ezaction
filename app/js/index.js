'use strict';
angular.module('app').controller('index', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});