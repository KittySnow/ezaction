'use strict';
angular.module('app').controller('editorChange', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});