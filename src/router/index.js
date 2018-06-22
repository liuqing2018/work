import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: resolve => require(['@/views/main/index.vue'], resolve),
            children: [
                {
                    path: '/',
                    name: 'mian-default',
                    component: resolve => require(['@/views/workbench/WorkContent.vue'], resolve),
                    meta: {
                        title: '工作台'
                    }
                },
                {
                    path: 'index',
                    name: 'mian-index',
                    redirect: {name: 'mian-default'},
                    meta: {
                        title: '工作台'
                    }
                },
                {
                    path: 'auth', // 权限管理-角色管理
                    name: 'auth',
                    component: resolve => require(['@/views/auth-management/index.vue'], resolve),
                    meta: {
                        title: '角色管理'
                    }
                },
                {
                    path: 'user', // 组织管理-用户管理
                    name: 'user',
                    component: resolve => require(['@/views/organization-management/user.vue'], resolve),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: 'todo',
                    name: 'todo',
                    component: resolve => require(['@/views/work-flow/todo.vue'], resolve),
                    meta: {
                        title: '待办事项'
                    }
                },
                {
                    path: 'done',
                    name: 'done',
                    component: resolve => require(['@/views/work-flow/done.vue'], resolve),
                    meta: {
                        title: '已办事项'
                    }
                },

                /*
                * demo 路由
                * */

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
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/login/index.vue'], resolve),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            name: 'page404',
            component: resolve => require(['@/views/error/404.vue'], resolve)
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});

router.beforeEach((to, from, next) => {
    if (!to.query.r && to.path !== '/') {
        next({
            path: to.fullPath,
            query: {
                r: Math.random()
            }
        });
    } else {
        next();
    }
});

export default router;
