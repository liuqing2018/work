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
                    path: 'base',
                    name: 'base',
                    component: resolve => require(['@/views/demo/layout/Base.vue'], resolve),
                    meta: {
                        title: '基础布局'
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
