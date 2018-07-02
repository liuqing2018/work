import Vue from 'vue';
import Router from 'vue-router';
import demoRouter from './demo';
Vue.use(Router);

let routerConfig = {
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
};

// 合并demo路由
let temp = routerConfig.routes[0].children.concat(demoRouter);
routerConfig.routes[0].children = temp;
console.log(routerConfig);
// let allRouterConfig = routerConfig.routes[0].children.concat(demoRouter);

const router = new Router(routerConfig);

router.beforeEach((to, from, next) => {
    // if (!to.query.r && to.path !== '/') {
    //     next({
    //         path: to.fullPath,
    //         query: {
    //             r: Math.random()
    //         }
    //     });
    // } else {
    //     next();
    // }
    next();
});

export default router;
