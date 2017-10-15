'use strict';
angular.module('app').controller('playUploadAdd', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});