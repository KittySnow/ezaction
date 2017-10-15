'use strict';
angular.module('app').controller('playApproval', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});