/**
 * Created by Administrator on 2018/4/23.
 */

/*
*  什么时候使用vuex
*  - 公共数据，即相同的数据多个组件里都要使用
*  - 父子组件或兄弟组件通讯时
* */
import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main'; // 首页
import user from './modules/user'; // 用户信息
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    namespace: true,
    strict: debug,
    modules: {
        main,
        user
    }
});
