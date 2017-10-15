'use strict';
angular.module('app').controller('playApprovalDetail', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});