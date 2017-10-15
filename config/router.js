'use strict';
angular.module('app').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('');
    $stateProvider.state('index', {
        url: '',
        templateUrl: 'app/views/index.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/index.js'
                ]);
            }
        }
    }).state('resetPassword', {
        url: '/index/resetPassword',
        templateUrl: 'app/views/index/resetPassword.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/index/resetPassword.js'
                ]);
            }
        }
    }).state('announcementAudit', {
        url: '/overallPlanning/announcementAudit',
        templateUrl: 'app/views/overallPlanning/announcementAudit.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/announcementAudit.js'
                ]);
            }
        }
    }).state('arrangementNotice', {
        url: '/overallPlanning/arrangementNotice',
        templateUrl: 'app/views/overallPlanning/arrangementNotice.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/arrangementNotice.js'
                ]);
            }
        }
    }).state('confirm', {
        url: '/overallPlanning/confirm',
        templateUrl: 'app/views/overallPlanning/confirm.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/confirm.js'
                ]);
            }
        }
    }).state('confirmProgress', {
        url: '/overallPlanning/confirmProgress',
        templateUrl: 'app/views/overallPlanning/confirmProgress.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/confirmProgress.js'
                ]);
            }
        }
    }).state('scheduleComparison', {
        url: '/overallPlanning/scheduleComparison',
        templateUrl: 'app/views/overallPlanning/scheduleComparison.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/scheduleComparison.js'
                ]);
            }
        }
    }).state('progressAdmin', {
        url: '/overallPlanning/progressAdmin',
        templateUrl: 'app/views/overallPlanning/progressAdmin.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/progressAdmin.js'
                ]);
            }
        }
    }).state('progressHistory', {
        url: '/overallPlanning/progressHistory',
        templateUrl: 'app/views/overallPlanning/progressHistory.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/progressHistory.js'
                ]);
            }
        }
    }).state('overallManagement', {
        url: '/overallPlanning/overallManagement',
        templateUrl: 'app/views/overallPlanning/overallManagement.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/overallPlanning/overallManagement.js'
                ]);
            }
        }
    }).state('playIndex', {
        url: '/play/index',
        templateUrl: 'app/views/play/index.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/index.js'
                ]);
            }
        }
    }).state('playApproval', {
        url: '/play/playApproval',
        templateUrl: 'app/views/play/playApproval.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/playApproval.js'
                ]);
            }
        }
    }).state('playApprovalDetail', {
        url: '/play/playApprovalDetail',
        templateUrl: 'app/views/play/playApprovalDetail.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/playApprovalDetail.js'
                ]);
            }
        }
    }).state('playIndex1', {
        url: '/play/index1',
        templateUrl: 'app/views/play/index1.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/index1.js'
                ]);
            }
        }
    }).state('playUploadIndex', {
        url: '/play/uploadIndex',
        templateUrl: 'app/views/play/uploadIndex.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/uploadIndex.js'
                ]);
            }
        }
    }).state('playUploadAdd', {
        url: '/play/uploadAdd',
        templateUrl: 'app/views/play/uploadAdd.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/uploadAdd.js'
                ]);
            }
        }
    }).state('playDefine', {
        url: '/play/playDefine',
        templateUrl: 'app/views/play/playDefine.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/playDefine.js'
                ]);
            }
        }
    }).state('playSearch', {
        url: '/play/playSearch',
        templateUrl: 'app/views/play/playSearch.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/playSearch.js'
                ]);
            }
        }
    }).state('playEditor', {
        url: '/play/playEditor',
        templateUrl: 'app/views/play/playEditor.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/playEditor.js'
                ]);
            }
        }
    }).state('editorChange', {
        url: '/play/editorChange',
        templateUrl: 'app/views/play/editorChange.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/editorChange.js'
                ]);
            }
        }
    }).state('editorAdd', {
        url: '/play/editorAdd',
        templateUrl: 'app/views/play/editorAdd.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/play/editorAdd.js'
                ]);
            }
        }
    }).state('shootingLocation', {
        url: '/shooting/location',
        templateUrl: 'app/views/shooting/location.html',
        resolve: {
            deps: function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    'app/js/shooting/location.js'
                ]);
            }
        }
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
});