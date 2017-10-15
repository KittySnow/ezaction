'use strict';
angular.module('app').controller('overallPlanningConfirmProgress', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});