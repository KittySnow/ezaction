'use strict';
angular.module('app').controller('overallPlanningConfirm', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});