'use strict';
angular.module('app').controller('resetPassword', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});