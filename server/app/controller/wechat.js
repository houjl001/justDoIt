'use strict';

const Controller = require('egg').Controller;

class WechatController extends Controller {
    async index () {
        const { ctx } = this;
        // console.log(ctx.req);
        // // const result = await ctx.curl('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx79d36f5f890489b0&secret=2110ec7db319d82ff42ee734f14834f6', {
        // //     dataType: 'json',
        // // });
        // await ctx.service.authToken.auth();
        const message = ctx.req.body;
        if (message) {
            const MsgType = message.MsgType;
            let reply;
            console.log(MsgType);
            if (MsgType === 'event') {
                reply = await ctx.service.home.handleEvent(message);
            } else {
                reply = await ctx.service.home.handleMsg(message);
            }
            if (reply) {
                const result = await ctx.service.home.replyMsg(message, reply);
                console.log(result);
                ctx.body = result;
                return true;
            }
        }
        // ctx.body = 'success';
        // ctx.body = await ctx.service.authToken.auth();
    }
}

module.exports = WechatController;
