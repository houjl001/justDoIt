import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import wechat from './config.wechat';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_houjunlei';

    // add your egg config in here
    config.middleware = [];

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    config.wechat = wechat;
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
    };
    config.redis = {
        client: {
            port: 6379,          // Redis port
            host: '127.0.0.1',   // Redis host
            password: '',
            db: 0,
        },
    }

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
