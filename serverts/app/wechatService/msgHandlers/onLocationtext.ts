import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户发送位置消息
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: message.Label
    };
    return reply;
}