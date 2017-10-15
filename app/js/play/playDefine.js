'use strict';
angular.module('app').controller('playDefine', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});