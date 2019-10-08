import onimage from './msgHandlers/onImage';
import ononCLICK from './msgHandlers/onClick';
import onlink from './msgHandlers/onLink';
import onLOCATION from './msgHandlers/onLocation';
import onlocation from './msgHandlers/onLocationtext';
import onSCAN from './msgHandlers/onScan';
import onshortvideo from './msgHandlers/onShortvideo';
import onsubscribe from './msgHandlers/onSubscribe';
import ontext from './msgHandlers/onText';
import onvideo from './msgHandlers/onVideo';
import onVIEW from './msgHandlers/onView';
import onvoice from './msgHandlers/onVoice';

import imageUpload from './sourceMaterialManage/uploadImage';

export default {
    onimage,
    onsubscribe,
    ononCLICK,
    onlink,
    onLOCATION,
    onlocation,
    onSCAN,
    onshortvideo,
    ontext,
    onvideo,
    onVIEW,
    onvoice,
    uploadImageBuffer: imageUpload.uploadImageBuffer,
}