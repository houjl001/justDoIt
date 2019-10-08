import { WechatMsg, WechatReplyMsg, WechatSubMsgArticles } from 'egg';
/**
 * 发送图文消息
 */
export default async (message: WechatMsg, imgAndText: WechatSubMsgArticles): Promise<WechatReplyMsg> => {
    let reply: WechatReplyMsg = {
        ToUserName: message.FromUserName,
        FromUserName: message.ToUserName,
        CreateTime: new Date().getTime(),
        MsgType: 'video',
        ArticleCount: imgAndText.Articles.length,
        Articles: imgAndText
    };
    return reply;
}