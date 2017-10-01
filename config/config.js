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
        { path: '/user/userAppInfo', view: 'user/userAppInfo.html', viewUrl: 'user/userAppInfo.html', styles: null, scripts:'user/userAppInfo', modules:'userAppInfo'},
        { path: '/user/userInfo', view: 'user/userInfo.html', viewUrl: 'user/userInfo.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/mine', view: 'user/mine.html', viewUrl: 'user/mine.html', styles: null, scripts:'user/mine', modules:'mine'},
        { path: '/user/aboutus', view: 'user/aboutus.html', viewUrl: 'user/aboutus.html', styles: null, scripts:'user/userInfo', modules:'userInfo'},
        { path: '/user/userCenter', view: 'user/userCenter.html', viewUrl: 'user/userCenter.html', styles: null, scripts:'user/userCenter', modules:'userCenter'},
        { path: '/user/userCard', view: 'user/userCard.html', viewUrl: 'user/userCard.html', styles: null, scripts:'user/userCard', modules:'userCard'},
        { path: '/user/userSet', view: 'user/userSet.html', viewUrl: 'user/userSet.html', styles: null, scripts:'user/userSet', modules:'userSet'}
        
    ];

}());
