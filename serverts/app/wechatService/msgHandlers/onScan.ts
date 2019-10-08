import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户扫码
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let Content = '';
    if (message.Event === 'subscribe') {
        Content = '欢迎扫码关注生活小助手';
    } else {
        Content = '欢迎扫码';
    }
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content
    };
    return reply;
}