'use strict';
angular.module('app').controller('announcementAudit', function ($rootScope, $route) {
    $rootScope.navMenu = '#' + $route.current.originalPath;
});