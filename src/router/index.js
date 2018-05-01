import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: resolve => require(['@/views/main/index.vue'], resolve),
            meta: {
                title: '工作台'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['@/views/main/index.vue'], resolve),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/main',
            name: 'main',
            component: resolve => require(['@/views/main/index.vue'], resolve),
            children: [
                {
                    path: '/',
                    name: 'mian-index',
                    component: resolve => require(['@/views/auth/index.vue'], resolve),
                    meta: {
                        title: '工作台'
                    }
                },
                {
                    path: 'index',
                    name: 'mian-index',
                    component: resolve => require(['@/views/auth/index.vue'], resolve),
                    meta: {
                        title: '权限管理'
                    }
                },
                {
                    path: 'auth', // 权限管理-角色管理
                    name: 'auth',
                    component: resolve => require(['@/views/auth/index.vue'], resolve),
                    meta: {
                        title: '角色管理'
                    }
                },
                {
                    path: 'user', // 权限管理-用户管理
                    name: 'user',
                    component: resolve => require(['@/views/auth/user.vue'], resolve),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: 'my',
                    name: 'todo',
                    component: resolve => require(['@/views/my/todo.vue'], resolve),
                    meta: {
                        title: '代办事项'
                    }
                },
                {
                    path: '403',
                    name: 'page403',
                    component: resolve => require(['@/components/403.vue'], resolve)
                }
            ]
        }
        // {
        //     path: '/main/auth', // 权限管理-角色管理
        //     name: 'auth',
        //     component: resolve => require(['@/views/auth/index.vue'], resolve)
        // },
        // {
        //     path: '/main/user', // 权限管理-用户管理
        //     name: 'user',
        //     component: resolve => require(['@/views/auth/user.vue'], resolve)
        // },
        // {
        //     path: '403',
        //     name: 'page403',
        //     component: resolve => require(['@/components/403.vue'], resolve)
        // }
        // {
        //     path: '*',
        //     name: 'page404',
        //     component: resolve => require(['@/components/404.vue'], resolve)
        // }
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.path === '/') { // 登录页面
//         next();
//     } else {
//         if (window.sessionStorage.isLogin) { // 判断有没有登录的标识
//             next();
//         } else {
//             next('/'); // 跳转到登录
//         }
//     }
// });

export default router;
