import { WechatMsg, WechatReplyMsg } from 'egg';
/**
 * 回复用户发送短视频消息
 */
export default async (message: WechatMsg): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'text',
        Content: message.MediaId
    };
    return reply;
}