'use strict';
angular.module('app', [
    'ngSanitize',
    'ui.router',
    'oc.lazyLoad'
]).config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('');
    $stateProvider.state('index', {
        url: '',
        templateUrl: 'app/views/index.html'
    }).state('resetPassword', {
        url: '/index/resetPassword',
        templateUrl: 'app/views/index/resetPassword.html'
    }).state('announcementAudit', {
        url: '/overallPlanning/announcementAudit',
        templateUrl: 'app/views/overallPlanning/announcementAudit.html'
    }).state('arrangementNotice', {
        url: '/overallPlanning/arrangementNotice',
        templateUrl: 'app/views/overallPlanning/arrangementNotice.html'
    }).state('confirm', {
        url: '/overallPlanning/confirm',
        templateUrl: 'app/views/overallPlanning/confirm.html'
    }).state('confirmProgress', {
        url: '/overallPlanning/confirmProgress',
        templateUrl: 'app/views/overallPlanning/confirmProgress.html'
    }).state('scheduleComparison', {
        url: '/overallPlanning/scheduleComparison',
        templateUrl: 'app/views/overallPlanning/scheduleComparison.html'
    }).state('progressAdmin', {
        url: '/overallPlanning/progressAdmin',
        templateUrl: 'app/views/overallPlanning/progressAdmin.html'
    }).state('progressHistory', {
        url: '/overallPlanning/progressHistory',
        templateUrl: 'app/views/overallPlanning/progressHistory.html'
    }).state('assignByDay', {
        url: '/overallPlanning/assignByDay',
        templateUrl: 'app/views/overallPlanning/assignByDay.html'
    }).state('overallManagement', {
        url: '/overallPlanning/overallManagement',
        templateUrl: 'app/views/overallPlanning/overallManagement.html'
    }).state('playIndex', {
        url: '/play/index',
        templateUrl: 'app/views/play/index.html'
    }).state('playApproval', {
        url: '/play/playApproval',
        templateUrl: 'app/views/play/playApproval.html'
    }).state('playApprovalDetail', {
        url: '/play/playApprovalDetail',
        templateUrl: 'app/views/play/playApprovalDetail.html'
    }).state('playIndex1', {
        url: '/play/index1',
        templateUrl: 'app/views/play/index1.html'
    }).state('playUploadIndex', {
        url: '/play/uploadIndex',
        templateUrl: 'app/views/play/uploadIndex.html'
    }).state('playUploadAdd', {
        url: '/play/uploadAdd',
        templateUrl: 'app/views/play/uploadAdd.html'
    }).state('playDefine', {
        url: '/play/playDefine',
        templateUrl: 'app/views/play/playDefine.html'
    }).state('playSearch', {
        url: '/play/playSearch',
        templateUrl: 'app/views/play/playSearch.html'
    }).state('playEditor', {
        url: '/play/playEditor',
        templateUrl: 'app/views/play/playEditor.html'
    }).state('editorChange', {
        url: '/play/editorChange',
        templateUrl: 'app/views/play/editorChange.html'
    }).state('editorAdd', {
        url: '/play/editorAdd',
        templateUrl: 'app/views/play/editorAdd.html'
    }).state('teamBuilding', {
        url: '/shooting/teamBuilding',
        templateUrl: 'app/views/shooting/teamBuilding.html'
    }).state('teamBuildingImport', {
        url: '/shooting/teamBuildingImport',
        templateUrl: 'app/views/shooting/teamBuildingImport.html'
    }).state('shootingLocation', {
        url: '/shooting/location',
        templateUrl: 'app/views/shooting/location.html'
    }).state('shootingLocationDetail', {
        url: '/shooting/locationDetail',
        templateUrl: 'app/views/shooting/locationDetail.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/shooting/locationDetail.js'
                ]);
            }
        }
    }).state('shootingLocationDetailAdd', {
        url: '/shooting/locationDetailAdd',
        templateUrl: 'app/views/shooting/locationDetailAdd.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/shooting/locationDetailAdd.js'
                ]);
            }
        }
    });
}).controller('app.controller', function () {

}).run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', function () {
        $rootScope.navMenu = '#' + $state.current.url;
    });
});
angular.element(document).ready(function () {
    angular.element(document.body).attr('ng-controller', 'app.controller');
    angular.bootstrap(document, ['app']);
});