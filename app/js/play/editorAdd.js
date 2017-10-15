'use strict';
angular.module('app').controller('editorAdd', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});