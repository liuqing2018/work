/**
 * Created by Administrator on 2018/5/8.
 */
console.log('===========');
console.log(process.env);
// 生产环境和开发环境的接口地址
export const baseURL = process.env.API_ROOT;
// export const baseURL = 'http://192.168.54.151:8080';

// 上传文件默认限制的大小: 2M
export const maxSize = 1024 * 2;

/**
 * 获取对象类型
 * @param obj
 * @returns {string}
 */
export const getType = obj => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
export const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
