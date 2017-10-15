'use strict';
angular.module('app').controller('playSearch', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});