'use strict';
angular.module('app').controller('arrangementNotice', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});