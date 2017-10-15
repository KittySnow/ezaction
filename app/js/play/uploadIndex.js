'use strict';
angular.module('app').controller('playUploadIndex', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});