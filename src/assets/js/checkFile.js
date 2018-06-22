/***
 * @param e 通过input的file选择的文件
 * @param fileType 允许上传文件的类型，默认不做限制
 * @param fileSize 上传文件最大限制，默认是2m大小
 * @returns {Promise}
 */

import {getType, maxSize} from './common';
// import toast from '../../plugin/toast';
/**
 * 检查文件是否符合上传要求
 * @param e             通过input的file选择的文件       必填
 * @param fileType      允许上传文件的类型，默认不做限制  非必填
 * @param fileSize      上传文件最大限制，默认是2m大小    非必填
 * @returns {status: number, data: Array}  status大于0 说明上传文件中有不符合要求的， 如果status==0，data里是符合要求的文件列表，否则是不符合文件的错误提示列表
 */
const checkFile = function (e, fileType = null, fileSize = maxSize) {
    let files = e.target.files || e.dataTransfer.files;
    if (getType(fileType) === 'object') {
        fileSize = fileType.size || maxSize;
        fileType = fileType.type;
    }

    if (files) {
        let fileList = []; // 验证通过的文件
        let errorList = []; // 错误信息
        let num = 0; // 验证失败的数量

        // 针对所选择的文件进行验证
        Array.from(files).forEach(file => {
            // console.log('您选择的文件的类型是：' + file.type);
            // 不是期望类型的文件
            if (fileType && fileType.indexOf(file.type) === -1) {
                errorList.push(new Error(`文件：[${file.name}] 与期望的 ${fileType} 的文件类型！`));
                // toast(new Error(`文件：[${file.name}] 与期望的 ${fileType} 的文件类型！`));
                num++;
            } else if ((file.size / 1024) > fileSize) { // 超过最大限制
                // console.log(file.size);
                errorList.push(new Error(`文件：[${file.name}] 超出了 ${fileSize / 1024} M 的限制！`));
                // toast(new Error(`文件：[${file.name}] 超出了 ${fileSize / 1024} M 的限制！`));
                num++;
            } else {
                fileList.push(file);
            }
        });

        let result = {
            status: num,
            data: num === 0 ? fileList : errorList.join(',')
        };
        return result;
    }
};
export default checkFile;
