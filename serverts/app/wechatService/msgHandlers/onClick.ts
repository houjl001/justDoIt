import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户点击事件
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: 'EventKey:' + message.EventKey
    };
    return reply;
}