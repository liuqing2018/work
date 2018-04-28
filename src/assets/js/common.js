/**
 * Created by Administrator on 2018/04/23.
 */
// export const api = root;
export const api = 'http://192.168.54.151:8080';

// 出错提示框
export const toast = (msg, time) => {
    let box = document.createElement('div');
    box.className = 'toast';
    let span = document.createElement('span');
    let boxBg = document.createElement('div');
    boxBg.className = 'toast-bg';
    span.innerText = msg;
    box.appendChild(boxBg);
    box.appendChild(span);
    document.getElementById('app').appendChild(box);

    setTimeout(function () {
        span.style.display = 'block';
        boxBg.style.opacity = '0.6';
    }, 100);

    setTimeout(function () {
        boxBg.style.opacity = '0';
        setTimeout(function () {
            document.getElementById('app').removeChild(box);
        }, 1000);
    }, time || 3100);
};

// 拷贝对象
export const copyObj = obj => {
    return JSON.parse(JSON.stringify(obj));
};

// 图片转base64
export const upload = function (file, callback) {
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
