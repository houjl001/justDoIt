import { Controller } from 'egg';
// import * as fs from 'fs';
// import * as path from 'path';
export default class WechatController extends Controller {
    async preAuthWechatConfigToken() {
        const { ctx } = this;
        ctx.body = await ctx.service.wechatService.wechatConfigAuthToken(ctx.query, 'bind');
    }
    async wechatMsg() {
        const { ctx } = this;
        if (await ctx.service.wechatService.wechatConfigAuthToken(ctx.query, 'auth')) {
            ctx.body = await ctx.service.wechatService.replyMsg(ctx);
        } else {
            ctx.body = 'success';
        }
    }
    async test() {
        console.log('test');
        let img = await this.ctx.curl('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1192358014,3828266317&fm=173&app=49&f=JPEG?w=218&h=146&s=1C9619DE08A38B7E188BEBAE0300500E');
        // const img = fs.readFileSync(path.resolve(__dirname, '../../../testImgs/img.jpg'));
        // console.log(img.data);
        let data = await this.ctx.service.wechatService.uploadImageBuffer(img, 'houjunlei');
        this.ctx.body = data;
    }
}