'use strict';
const xml2js = require('../utils/xml2js');

module.exports = () => {
    return async (ctx, next) => {
        if (ctx.method === 'POST' && ctx.is('text/xml')) {
            const promise = new Promise((resolve, reject) => {
                let data = '';
                ctx.req.on('data', chunk => {
                    data += chunk;
                });
                ctx.req.on('end', async () => {
                    console.log(data);
                    const result = await xml2js.parseXml(data);
                    console.log(result);
                    resolve(result);
                    if (!result) {
                        reject(result);
                    }
                });
            });
            await promise.then(result => {
                ctx.req.body = result;
            }).catch(() => {
                ctx.req.body = '';
            });
        }
        await next();
    };
};
