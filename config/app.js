'use strict';
angular.module('app', [
    'ngSanitize',
    'ui.router',
    'oc.lazyLoad'
]).controller('app.controller', function () {});
angular.element(document).ready(function () {
    angular.element(document.body).attr('ng-controller', 'app.controller');
    angular.bootstrap(document, ['app']);
});