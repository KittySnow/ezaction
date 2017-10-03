
'use strict';

(function (app) {

    app.controller( 'playIndex', ['$route','$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($route ,$routeParams, $timeout, $http,$scope,$rootScope,tips) {
        console.log($route);
        $rootScope.navMenu = '#'+ $route.current.originalPath;
    }]);

})(angular.module('playIndex', []));