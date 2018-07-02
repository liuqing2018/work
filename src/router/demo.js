/**
 * Created by Administrator on 2018/7/2.
 */
let demoRouter = [
    {
        path: 'class',
        name: 'class',
        component: resolve => require(['@/views/demo/layout/Class.vue'], resolve),
        meta: {
            title: '公共类'
        }
    },
    {
        path: 'layout',
        name: 'layout',
        component: resolve => require(['@/views/demo/layout/layout.vue'], resolve),
        meta: {
            title: '常用布局'
        }
    },
    {
        path: 'function',
        name: 'function',
        component: resolve => require(['@/views/demo/function/index.vue'], resolve),
        meta: {
            title: '方法说明'
        }
    },
    {
        path: 'function/copy',
        name: 'function-copy',
        component: resolve => require(['@/views/demo/function/CopyObj.vue'], resolve),
        meta: {
            title: '对象拷贝'
        }
    },
    {
        path: 'function/http',
        name: 'function-http',
        component: resolve => require(['@/views/demo/function/Http.vue'], resolve),
        meta: {
            title: '数据交互'
        }
    },
    {
        path: 'function/localStorage',
        name: 'function-localStorage',
        component: resolve => require(['@/views/demo/function/LocalStorage.vue'], resolve),
        meta: {
            title: '本地存储'
        }
    },
    {
        path: 'function/toast',
        name: 'function-toast',
        component: resolve => require(['@/views/demo/function/Toast.vue'], resolve),
        meta: {
            title: '弹条提示'
        }
    },
    {
        path: 'function/unique',
        name: 'function-unique',
        component: resolve => require(['@/views/demo/function/UniqueArray.vue'], resolve),
        meta: {
            title: '数组去重'
        }
    },
    {
        path: 'function/upload',
        name: 'function-upload',
        component: resolve => require(['@/views/demo/function/Upload.vue'], resolve),
        meta: {
            title: '文件上传'
        }
    },
    {
        path: 'function/echart',
        name: 'function-echart',
        component: resolve => require(['@/views/demo/function/Echart.vue'], resolve),
        meta: {
            title: 'echart图表'
        }
    },
    {
        path: 'function/moment',
        name: 'function-moment',
        component: resolve => require(['@/views/demo/function/Moment.vue'], resolve),
        meta: {
            title: '格式化日期'
        }
    },

    {
        path: 'line',
        name: 'line',
        component: resolve => require(['@/views/demo/component/charts/line.vue'], resolve),
        meta: {
            title: '折线图'
        }
    },
    {
        path: '403',
        name: 'page403',
        component: resolve => require(['@/views/error/403.vue'], resolve),
        meta: {
            title: '拒绝访问'
        }
    },
    {
        path: '*',
        name: 'page404',
        component: resolve => require(['@/views/error/404.vue'], resolve),
        meta: {
            title: '页面不存在'
        }
    }
];
export default demoRouter;
