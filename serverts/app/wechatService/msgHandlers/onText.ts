import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户发送文本消息
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: '你发送的“' + message.Content + '”，后台已收到，正在处理中，不会有结果的'
    };
    return reply;
}