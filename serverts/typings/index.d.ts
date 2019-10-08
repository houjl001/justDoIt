import 'egg';

declare module 'egg' {
    interface WechatMsg {
        ToUserName: string,
        FromUserName: string,
        CreateTime: string,
        MsgType: string,
        MsgId?: string,
        Content?: string,
        MediaId?: string,
        PicUrl?: string,
        Format?: string,
        Recognition?: string,
        ThumbMediaId?: string,
        Location_X?: string,
        Location_Y?: string,
        Scale?: string,
        Label?: string,
        Title?: string,
        Description?: string,
        Url?: string,
        Event?: string,
        EventKey?: string,
        Ticket?: string,
        Latitude?: string,
        Longitude?: string,
        Precision?: string
    }
    interface WechatSubMsgImage {
        MediaId: string
    }
    interface WechatSubMsgVoice {
        MediaId: string
    }
    interface WechatSubMsgVideo {
        MediaId: string,
        Title: string,
        Description: string
    }
    interface WechatSubMsgMusic {
        MusicUrl: string,
        Title: string,
        Description: string,
        HQMusicUrl: string,
        ThumbMediaId: string
    }
    interface imgAndTextEl {
        Title: string,
        Description: string,
        PicUrl: string,
        Url: string
    }
    interface imgAndTextItem {
        item: imgAndTextEl
    }
    interface WechatSubMsgArticles {
        Articles: Array<imgAndTextItem>
    }
    interface WechatReplyMsg {
        ToUserName: string,
        FromUserName: string,
        CreateTime: number,
        MsgType: string,
        ArticleCount?: number,
        Articles?: WechatSubMsgArticles,
        Music?: WechatSubMsgMusic,
        Video?: WechatSubMsgVideo,
        Voice?: WechatSubMsgVoice,
        Image?: WechatSubMsgImage,
        Content?: string
    }
}