

'use strict';

(function (app) {

    app.controller( 'playSearch', ['$route','$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($route ,$routeParams, $timeout, $http,$scope,$rootScope,tips) {
        console.log($route);
        $rootScope.navMenu = '#'+ $route.current.originalPath;
    }]);

})(angular.module('playSearch', []));