/* eslint valid-jsdoc: "off" */

'use strict';

const wechat = require('./config.wechat');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};
    config.wechat = wechat;
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1569231129148_2262';

    // add your middleware config here
    config.middleware = ['xml2js'];
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
