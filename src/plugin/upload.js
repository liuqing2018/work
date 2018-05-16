/**
 * Created by Administrator on 2018/5/8.
 */
// todo 1，同时支持上传文件和图片；2，支持多文件上传
const upload = function (file, callback) {
    // var file = e.target.files || e.dataTransfer.files;
    if (file) {
        // for (var i = 0; i < file.length; i++) {
        // 判断下类型如果不是图片就返回 去掉就可以上传任意文件
        if (!/image\/\w+/.test(file.type)) {
            alert('只能上传jpg、png、gif图片类型！');
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            callback(this.result);
        };
        // }
    }
};
export default upload;
