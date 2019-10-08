import { Service, Context, WechatMsg } from 'egg';
import wechatService from '../wechatService/index';
import WechatTools from '../utils/wechatTools';
const wechatTools = new WechatTools();
export default class WechatService extends Service {
    /**
     * 微信公众号配置时token验证
     * @param query 验证链接后带的参数
     */
    async wechatConfigAuthToken(query: { signature: string; timestamp: string; nonce: string; echostr: any; }, flag: string) {
        const signature: string = query.signature;
        const timestamp: string = query.timestamp;
        const nonce: string = query.nonce;
        const oriArray: Array<string> = new Array(3);
        oriArray[0] = nonce;
        oriArray[1] = timestamp;
        oriArray[2] = 'houjunlei';
        oriArray.sort();
        const original = oriArray.join('');
        const scyptoString = wechatTools.sha1(original);
        return signature === scyptoString ? (flag === 'bind' ? query.echostr : true) : false;
    }
    async getAccessToken() {
        let access_token: string | null = await this.app.redis.get('wechat_access_token');
        let result: string | null;
        if (access_token) {
            result = '?access_token=' + access_token;
        } else {
            let data = await this.ctx.curl(this.app.config.wechat.api.access_token, {
                dataType: 'json'
            });
            if (data.data.access_token) {
                this.app.redis.set('wechat_access_token', data.data.access_token, 'EX', data.data.expires_in);
                result = '?access_token=' + data.data.access_token;
            } else {
                result = null;
                console.log(data.data.errmsg);
            }
        }
        return result;
    }
    /**
     * 公众号消息自动回复
     * @param ctx 当前请求上下文
     */
    async replyMsg(ctx: Context) {
        let recivedMsg = await this.reciveMsg(ctx);
        const msgType = recivedMsg.MsgType;
        const name = msgType === 'event' ? recivedMsg.Event : recivedMsg.MsgType;
        let replyMessage: string | undefined;
        const funcName = 'on' + name;
        replyMessage = await wechatService[funcName](recivedMsg);
        console.log(await this.app.redis.get('houjunlei'));
        return wechatTools.createXml(replyMessage);
    }
    async uploadImageBuffer(image: Buffer, name: string) {
        const form = await wechatService.uploadImageBuffer(image, name);
        const access_token = await this.getAccessToken();
        const data = this.ctx.curl(this.app.config.wechat.api.uploadImage + access_token, {
            method: 'POST',
            dataType: 'json',
            headers: form.headers(),
            stream: form,
            timeout: 60000
        });
        return data
    }
    /**
     * 接受并解析post请求上下文
     * @param ctx 当前post请求上下文
     */
    async reciveMsg(ctx: Context): Promise<WechatMsg> {
        return new Promise((reslove, reject) => {
            let data = '';
            ctx.req.on('data', chunk => {
                data += chunk;
            });
            ctx.req.on('end', async () => {
                const result = await wechatTools.parseXml(data);
                if (result) {
                    reslove(result);
                } else {
                    reject(result);
                }
            });
        });
    }
}