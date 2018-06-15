/**
 * Created by Administrator on 2018/5/8.
 */
import copyObj from './copyObj'; // 复制对象
import dateFmt from '../assets/js/date'; // 格式化日期
import http from './http'; // 封装axios
import toast from './toast'; // 提示框
import getItem from './getLocalItem'; // 获取本地存储的item
import setItem from './setLocalItem'; // 存储item
import unique from './uniqueArray'; // 数组去重

// 注册插件
const Plugin = {};
Plugin.install = (Vue, options) => {
    // 绑定实例方法
    Vue.prototype.$copyObj = copyObj;
    Vue.prototype.$dateFmt = dateFmt;
    Vue.prototype.$http = http;
    Vue.prototype.$toast = toast;
    Vue.prototype.$getItem = getItem;
    Vue.prototype.$setItem = setItem;
    Vue.prototype.$unique = unique;
};
export default Plugin;
