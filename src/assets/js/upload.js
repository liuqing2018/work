/**
 * 文件上传：支持单个或者多个文件同时上传
 * @param files     待上传的文件列表    必填
 * @param url       上传文件的后台接口  必填
 * @param callback  上传过程中的回调    非必填
 * @returns {Promise}
 */

import http from '../../plugin/http';
import {getType} from '../../assets/js/common';

const upload = function (files, url, callback) {
    if (files) {
        // 逐个上传
        let promises = Array.from(files).map(file => {
            return new Promise((resolve, reject) => {
                if (window.FormData) {
                    let formData = new FormData();
                    formData.append('files', file);
                    http.post(url, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        onUploadProgress (progressEvent) {
                            if (progressEvent.lengthComputable) {
                                getType(callback) === 'function' && callback(progressEvent);
                            }
                        }
                    }).then(data => {
                        resolve(data);
                    }, error => {
                        reject(error);
                    });
                } else {
                    reject(new Error('您的浏览器不支持此类文件上传，请升级浏览器！'));
                }
            });
        });

        // 上传完成
        return new Promise((resolve, reject) => {
            Promise.all(promises).then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
};
export default upload;
