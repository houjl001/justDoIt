'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');
class AuthToken extends Service {
    async auth () {
        const { ctx } = this;
        const query = ctx.query;
        const signature = query.signature;
        const timestamp = query.timestamp;
        const nonce = query.nonce;
        const oriArray = new Array(3);
        oriArray[0] = nonce;
        oriArray[1] = timestamp;
        oriArray[2] = 'houjunlei';
        oriArray.sort();
        const original = oriArray.join('');
        const scyptoString = this.sha1(original);
        return signature === scyptoString ? query.echostr : false;
    }
    sha1 (str) {
        const md5sum = crypto.createHash('sha1');
        md5sum.update(str);
        str = md5sum.digest('hex');
        return str;
    }
}
module.exports = AuthToken;
