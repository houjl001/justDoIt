// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportWechatService from '../../../app/service/WechatService';

declare module 'egg' {
  interface IService {
    wechatService: ExportWechatService;
  }
}