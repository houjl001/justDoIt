'use strict';
const wechat = {
    appId: 'wxd1b0427e8aec2b64',
    appSecret: '364ea489214c097a7b2d01f23d4dfc2f',
    token: 'houjunlei',
    api: {
        access_token: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.appId + '&secret=' + this.appSecret,
    },
};
module.exports = wechat;
