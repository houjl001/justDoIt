import { WechatMsg, WechatReplyMsg, WechatSubMsgVideo } from 'egg';
/**
 * 发送视频消息
 */
export default async (message: WechatMsg, video: WechatSubMsgVideo): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'video',
        Video: {
            MediaId: video.MediaId,
            Title: video.Title,
            Description: video.Description
        }
    };
    return reply;
}