/**
 * Created by Administrator on 2018/5/8.
 */

// export const API = 'http://192.168.54.151:8080';
// 生产环境和开发环境的接口地址
export const API = process.env.API_ROOT;

/**
 * 获取对象类型
 * @param obj
 * @returns {string}
 */
export const getType = obj => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
