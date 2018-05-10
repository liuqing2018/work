// 引用axios
import axios from 'axios';
import { API } from './common';

// 自定义判断元素类型JS
const toType = obj => {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

const queryString = obj => {
    function toQueryPair (key, value) {
        if (typeof value === 'undefined') {
            return key;
        }
        return key + '=' + encodeURIComponent(value === null ? '' : String(value));
    }

    var ret = [];
    for (var key in obj) {
        key = encodeURIComponent(key);
        var values = obj[key];
        if (values && values.constructor === Array) { // 数组
            var queryValues = [];
            for (var i = 0, len = values.length, value; i < len; i++) {
                value = values[i];
                queryValues.push(toQueryPair(key, value));
            }
            ret = ret.concat(queryValues);
        } else { // 字符串
            ret.push(toQueryPair(key, values));
        }
    }
    return ret.join('&');
};

// 参数过滤函数
const filterNull = o => {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key];
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim();
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key]);
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key]);
        }
    }
    return o;
};

/*
 接口处理函数
 这个函数每个项目都是不一样的，我现在调整的是适用于
 https://cnodejs.org/api/v1 的接口，如果是其他接口
 需要根据接口的参数进行调整。参考说明文档地址：
 https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
 主要是，不同的接口的成功标识和失败提示是不一致的。
 另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
 */
const apiAxios = (method, url, params, success, failure) => {
    if (!params) {
        params = {
            data: null,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        };
    } else {
        params.data = params.data ? params.data : null;
        params.headers = params.headers ? params.headers : {'Content-type': 'application/x-www-form-urlencoded'};
    }

    params.data = params.headers['Content-type'] === 'application/x-www-form-urlencoded' ? queryString(params.data) : params.data;

    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params.data : null,
        params: method === 'GET' || method === 'DELETE' ? params.data : null,
        baseURL: API,
        headers: params.headers,
        withCredentials: false
    }).then(res => {
        if (res.data) {
            if (parseInt(res.data.status) === 0 && success) {
                success(res.data.result);
            } else {
                failure(res.data.message, null);
            }
        } else {
            if (failure) {
                failure('失败！', null);
            } else {
                window.alert('error: ' + JSON.stringify(res.data));
            }
        }
    }).catch(err => {
        if (err) {
            failure && failure('失败！', err);
        }
    });
};

// 返回在vue模板中的调用接口
const http = {
    get: function (config) {
        return apiAxios('GET', config.url, config.params, config.success, config.error);
    },
    post: function (config) {
        return apiAxios('POST', config.url, config.params, config.success, config.error);
    },
    put: function (config) {
        return apiAxios('PUT', config.url, config.params, config.success, config.error);
    },
    delete: function (config) {
        return apiAxios('DELETE', config.url, config.params, config.success, config.error);
    },
    native: function (params, success, err) {
        params.baseURL = params.baseURL || API;
        axios(params).then(success).catch(err);
    }
};

export default http;
