import * as crypto from 'crypto';
import * as xml2js from 'xml2js';
import { WechatMsg } from 'egg';
class WechatTools {
    constructor() { }
    parseXml(str: string): Promise<WechatMsg> {
        return new Promise((resolve, reject) => {
            const parseString = xml2js.parseString;
            parseString(str, { explicitArray: false }, (err, json) => {
                if (json) {
                    resolve(json.xml);
                } else {
                    reject(err);
                }
            });
        });
    };
    createXml(obj: any) {
        const builder = new xml2js.Builder({
            rootName: 'xml',
            headless: true,
            cdata: true,
        });
        return builder.buildObject(obj);
    };
    sha1(str: string) {
        const md5sum = crypto.createHash('sha1');
        md5sum.update(str);
        str = md5sum.digest('hex');
        return str;
    }
}
export default WechatTools;
