import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 发送文本消息
 */
export default async (message: WechatMsg, text: string): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: text
    };
    return reply;
}