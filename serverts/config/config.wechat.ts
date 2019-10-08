const appId = 'wxd1b0427e8aec2b64';
const appSecret = '364ea489214c097a7b2d01f23d4dfc2f';
const baseUrl = 'https://api.weixin.qq.com/';
const wechat = {
    token: 'houjunlei',
    api: {
        access_token: baseUrl + 'cgi-bin/token?grant_type=client_credential&appid=' + appId + '&secret=' + appSecret,
        uploadImage: baseUrl + 'cgi-bin/media/uploadimg',
    },
};
export default wechat;
