import { WechatMsg, WechatReplyMsg, WechatSubMsgVoice } from 'egg';
/**
 * 发送语音消息
 */
export default async (message: WechatMsg, voice: WechatSubMsgVoice): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'voice',
        Voice: {
            MediaId: voice.MediaId
        }
    };
    return reply;
}