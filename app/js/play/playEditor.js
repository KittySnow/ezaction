'use strict';
angular.module('app').controller('playEditor', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});