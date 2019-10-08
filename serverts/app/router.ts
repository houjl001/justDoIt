import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;
    router.get('/', controller.home.index);
    router.get('/test', controller.wechat.test);
    router.get('/wechat', controller.wechat.preAuthWechatConfigToken);
    router.post('/wechat', controller.wechat.wechatMsg);
};
