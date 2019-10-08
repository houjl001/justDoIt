import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户关注
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: '欢迎您关注生活小助手'
    };
    return reply;
}