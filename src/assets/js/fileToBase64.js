/**
 * 文件转Base64格式: 支持单个或者多个文件同时上传
 * @param files 待转换的文件列表 必填
 * @returns {Promise}
 */
const fileToBase64 = function (files) {
    if (files) {
        // 逐个转换
        let promises = Array.from(files).map(file => {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    resolve(this.result);
                };
            });
        });

        // 全部转换完成返回
        return new Promise((resolve, reject) => {
            Promise.all(promises).then(data => {
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
};
export default fileToBase64;
