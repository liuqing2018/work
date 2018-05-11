/**
 * Created by Administrator on 2018/5/8.
 */
// 项目前缀
// export const API = 'http://192.168.54.151:8080';
// export const API = '/api';
export const API = '';
// export const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api';

export const getType = obj => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
