import axios from 'axios';
import qs from 'qs';
import { baseURL } from '../assets/js/common';
import toast from './toast';
// console.log('baseURL::: ' + baseURL);
// - 通用配置项
const Axios = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    responseType: 'json',
    withCredentials: true,
    postJson: true, // Post提交数据 true为json对象，false序列化字符串
    retry: 5, // 请求次数
    retryDelay: 3000, // 请求间隔
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        // 'token': token
    }
});

// 统一处理请求
Axios.interceptors.request.use(
    config => {
        // post提交的时候判断后端需要的数据类型: form data || json
        if ((config.method === 'post' || config.method === 'put' || config.method === 'delete') && config.postJson) {
            config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        } else {
            config.data = qs.stringify(config.data);
        }

        // 若是有做鉴权token , 就给头部带上token
        // if (localStorage.token) {
        //     config.headers.Authorization = localStorage.token;
        // }
        return config;
    },
    error => {
        toast(error);
        return Promise.reject(error);
    }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        // 处理响应数据
        if (res.status && res.status === 200 && res.data && res.data.status === 1) {
            toast(res.data.message);
            return Promise.reject(res.data.message);
        }
        return res.data;
    },
    error => {
        if (error && error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            let config = error.config;
            toast('请求路径：' + error.config.baseURL + error.config.url + ' 超时！系统将在' + (config.retryDelay / 1000) + '秒后重新请求');
            // 如果没有读取到配置
            if (!config || !config.retry) {
                return Promise.reject(error);
            }
            // 获取请求次数
            config.__retryCount = config.__retryCount || 0;
            if (config.__retryCount >= config.retry) {
                return Promise.reject(error);
            }
            // 累计请求次数
            config.__retryCount += 1;
            let backoff = new Promise(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, config.retryDelay || 1);
            });

            return backoff.then(function () {
                return Axios(config);
            });
        } else {
            let msg = '';
            if (error && error.response) {
                if (error.response.status === 504 || error.response.status === 404) {
                    msg = '服务器去火星了！';
                } else if (error.response.status === 403) {
                    msg = '没有权限!';
                } else {
                    msg = '未知错误! ' + error.response.statusText;
                }
            }
            toast(msg || error);
            return Promise.reject(error);
        }
    }
);

const apiAxios = (method, url, data, params) => {
    return new Promise((resolve, reject) => {
        if (method === 'GET') {
            params = data;
            data = {};
        }
        let options = {
            method,
            url,
            data
        };
        if (params) {
            Object.assign(options, params);
        }
        Axios(options).then(res => {
            resolve(res);
        }, err => {
            reject(err);
        });
    });
};

// 返回在vue模板中的调用接口
const http = {
    get: function (url, data) {
        return apiAxios('GET', ...arguments);
    },
    post: function (url, data, params) {
        return apiAxios('POST', ...arguments);
    },
    put: function (url, data, params) {
        return apiAxios('PUT', ...arguments);
    },
    delete: function (url, data, headers) {
        return apiAxios('DELETE', ...arguments);
    },
    native: function (params) {
        return axios(params);
    }
};
export default http;
