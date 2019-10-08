import { WechatMsg, WechatReplyMsg, WechatSubMsgImage } from 'egg';
/**
 * 发送图片消息
 */
export default async (message: WechatMsg, image: WechatSubMsgImage): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'image',
        Image: {
            MediaId: image.MediaId
        }
    };
    return reply;
}