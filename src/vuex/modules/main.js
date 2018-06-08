/**
 * Created by liuqing on 2018/4/30.
 */
import http from '../../plugin/http';
export default {
    namespace: true,
    state: {
        menuList: [],
        // activeMenu: '/',
        activeMenu: '/done',
        tabList: [
            {
                title: '工作台',
                name: 'main',
                path: '/',
                content: 'main-index'
            }
        ],
        vm: {
            isMenuVisible: false // 左边菜单是否隐藏
        }
    },
    getters: {},
    mutations: {
        // 获取菜单
        getMenu: (state, menu) => {
            state.menuList = menu;
        },

        // 添加选项卡
        addTabMenu: (state, tab) => {
            state.tabList.push(tab);
        },

        // 设置选项卡焦点
        setActiveTab (state, tab) {
            state.activeMenu = tab;
        },

        // 删除选项卡
        removeTabMenu: (state, tabName) => {
            state.tabList = state.tabList.filter(item => {
                return item.path !== tabName;
            });
        },

        // 显示或者隐藏左边菜单
        MenuToggle: (state) => {
            state.vm.isMenuVisible = !state.vm.isMenuVisible;
        }
    },
    actions: {
        // 获取菜单
        getMenu: ({commit}) => {
            // 获取ajax数据测试
            http.get('static/data/menu.json').then(data => {
                console.log(data);
                let menus = data.result;
                commit('getMenu', menus);
            }, err => {
                console.log(err);
            });
        }
    }
};
