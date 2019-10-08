const formstream = require('formstream');
const uploadImageBuffer = async (image: Buffer, name: string): Promise<any> => {
    const form: any = formstream();
    form.buffer('media', image, name + '.png');
    return form;
}
export default { uploadImageBuffer };