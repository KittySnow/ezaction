'use strict';
var daBai ={};

(function () {

    var hash = location.hash || '';
    if (hash = hash.match(/^(.*)(\#wechat_redirect|\%23wechat_redirect)/)) { location.hash = hash[1] }

    daBai.Config = {
        /*timestamp: '2015072404',
        automask: true,
        autotips: true,
        app: {
            code: 'M',
            dir: 'modules/',
            schoolmanager: 'school.admin,school.master,school.vice_master'
        },
        service: {},
        map: [],
        emojis: {}*/
    };
    
    

    daBai.Config.map = [
        { path: '/', view: 'index.html', viewUrl: 'index.html', styles: null, scripts: 'appindex', modules: 'appindex' },
        { path: '/index/resetPassword', view: 'index/resetPassword.html', viewUrl: 'index/resetPassword.html', styles: null, scripts: 'index/resetPassword', modules: 'resetPassword' },
        { path: '/overallPlanning/announcementAudit', view: 'overallPlanning/announcementAudit.html', viewUrl: 'overallPlanning/announcementAudit.html', styles: null, scripts: 'overallPlanning/announcementAudit', modules: 'announcementAudit' },
        { path: '/overallPlanning/arrangementNotice', view: 'overallPlanning/arrangementNotice.html', viewUrl: 'overallPlanning/arrangementNotice.html', styles: null, scripts: 'overallPlanning/arrangementNotice', modules: 'arrangementNotice' },
        { path: '/overallPlanning/confirm', view: 'overallPlanning/confirm.html', viewUrl: 'overallPlanning/confirm.html', styles: null, scripts: 'overallPlanning/confirm', modules: 'overallPlanningConfirm' },
        { path: '/overallPlanning/confirmProgress', view: 'overallPlanning/confirmProgress.html', viewUrl: 'overallPlanning/confirmProgress.html', styles: null, scripts: 'overallPlanning/confirmProgress', modules: 'overallPlanningConfirmProgress' },
        { path: '/overallPlanning/scheduleComparison', view: 'overallPlanning/scheduleComparison.html', viewUrl: 'overallPlanning/scheduleComparison.html', styles: null, scripts: 'overallPlanning/scheduleComparison', modules: 'scheduleComparison' },
        { path: '/overallPlanning/progressAdmin', view: 'overallPlanning/progressAdmin.html', viewUrl: 'overallPlanning/progressAdmin.html', styles: null, scripts: 'overallPlanning/progressAdmin', modules: 'progressAdmin' },
        { path: '/overallPlanning/progressHistory', view: 'overallPlanning/progressHistory.html', viewUrl: 'overallPlanning/progressHistory.html', styles: null, scripts: 'overallPlanning/progressHistory', modules: 'progressHistory' },
        { path: '/overallPlanning/overallManagement', view: 'overallPlanning/overallManagement.html', viewUrl: 'overallPlanning/overallManagement.html', styles: null, scripts: 'overallPlanning/overallManagement', modules: 'overallManagement' },
        { path: '/play/index', view: 'play/index.html', viewUrl: 'play/index.html', styles: null, scripts: 'play/index', modules: 'playIndex' },
        { path: '/play/playApproval', view: 'play/playApproval.html', viewUrl: 'play/playApproval.html', styles: null, scripts: 'play/playApproval', modules: 'playApproval' },
        { path: '/play/playApprovalDetail', view: 'play/playApprovalDetail.html', viewUrl: 'play/playApprovalDetail.html', styles: null, scripts: 'play/playApprovalDetail', modules: 'playApprovalDetail' },
        { path: '/play/index1', view: 'play/index1.html', viewUrl: 'play/index1.html', styles: null, scripts: 'play/index1', modules: 'playIndex1' },
        { path: '/play/uploadIndex', view: 'play/uploadIndex.html', viewUrl: 'play/uploadIndex.html', styles: null, scripts: 'play/uploadIndex', modules: 'playUploadIndex' },
        { path: '/play/uploadAdd', view: 'play/uploadAdd.html', viewUrl: 'play/uploadAdd.html', styles: null, scripts: 'play/uploadAdd', modules: 'playUploadAdd' },
        { path: '/play/playDefine', view: 'play/playDefine.html', viewUrl: 'play/playDefine.html', styles: null, scripts: 'play/playDefine', modules: 'playDefine' },
        { path: '/play/playSearch', view: 'play/playSearch.html', viewUrl: 'play/playSearch.html', styles: null, scripts: 'play/playSearch', modules: 'playSearch' },
        { path: '/play/playEditor', view: 'play/playEditor.html', viewUrl: 'play/playEditor.html', styles: null, scripts: 'play/playEditor', modules: 'playEditor' },
        { path: '/play/editorChange', view: 'play/editorChange.html', viewUrl: 'play/editorChange.html', styles: null, scripts: 'play/editorChange', modules: 'editorChange' },
        { path: '/play/editorAdd', view: 'play/editorAdd.html', viewUrl: 'play/editorAdd.html', styles: null, scripts: 'play/editorAdd', modules: 'editorAdd' },
        { path: '/shooting/location', view: 'shooting/location.html', viewUrl: 'shooting/location.html', styles: null, scripts: 'shooting/location', modules: 'shootingLocation' },
        { path: '/shooting/locationDetail', view: 'shooting/locationDetail.html', viewUrl: 'shooting/locationDetail.html', styles: null, scripts: 'shooting/locationDetail', modules: 'shootingLocationDetail' }



    ];

}());
