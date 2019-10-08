import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户发送位置事件
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: 'Latitude:' + message.Latitude + ', Longitude:' + message.Longitude + ', Precision:' + message.Precision
    };
    return reply;
}