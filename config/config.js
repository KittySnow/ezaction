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
        { path: '/index/resetPassword', view: 'index/resetPassword.html', viewUrl: 'index/resetPassword.html', styles: null, scripts: 'index/resetPassword', modules: 'resetPassword' }

    ];

}());
