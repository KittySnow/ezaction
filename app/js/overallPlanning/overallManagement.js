

'use strict';

(function (app) {

    app.controller( 'overallManagement', ['$route','$routeParams', '$timeout', '$http','$scope','$rootScope','tips', function ($route ,$routeParams, $timeout, $http,$scope,$rootScope,tips) {

        $rootScope.navMenu = '#'+ $route.current.originalPath;
    }]);

})(angular.module('overallManagement', []));
