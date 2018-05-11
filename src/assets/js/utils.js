/**
 * Created by Administrator on 2018/5/8.
 */
import copyObj from './copyObj'; // 复制对象
import dateFmt from './date'; // 格式化日期
// import http from './http'; // 封装axios
import http from './ajax'; // 封装axios
import toast from './toast'; // 提示框
import upload from './upload'; // 文件转base64

const Utils = {};
Utils.install = (Vue, options) => {
    // 绑定实例方法
    Vue.prototype.$copyObj = copyObj;
    Vue.prototype.$dateFmt = dateFmt;
    Vue.prototype.$http = http;
    Vue.prototype.$toast = toast;
    Vue.prototype.$upload = upload;
};
export default Utils;
