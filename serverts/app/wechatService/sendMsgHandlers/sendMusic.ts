import { WechatMsg, WechatReplyMsg, WechatSubMsgMusic } from 'egg';
/**
 * 发送音乐消息
 */
export default async (message: WechatMsg, music: WechatSubMsgMusic): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'video',
        Music: {
            MusicUrl: music.MusicUrl,
            Title: music.Title,
            Description: music.Description,
            HQMusicUrl: music.HQMusicUrl,
            ThumbMediaId: music.ThumbMediaId
        }
    };
    return reply;
}