/**
 * Created by liuqing on 2018/4/30.
 */

// import {http} from '../../assets/js/http';
export default {
    namespace: true,
    state: {
        menuList: [],
        activeMenu: '/',
        tabList: [
            {
                title: '工作台',
                name: 'main',
                content: 'main-index'
            }
        ]
    },
    getters: {},
    mutations: {
        getMenu: (state, menu) => {
            state.menuList = menu;
        },

        // 添加选项卡
        addTabMenu: (state, tab) => {
            state.tabList.push(tab);
        },

        // 设置选项卡
        setActiveTab (state, tab) {
            state.activeMenu = tab;
        },
        // 删除选项卡
        removeTabMenu: (state, tabName) => {
            state.tabList = state.tabList.filter(item => {
                return item.name === tabName;
            });
        }
    },
    actions: {
        getMenu: ({commit}) => {
            let menus = [
                {
                    id: '1',
                    name: '个人桌面',
                    icon: 'el-icon-m-shangbaoxinxi',
                    url: '/main',
                    second: [
                        {
                            id: '11',
                            name: '代办事项',
                            icon: 'el-icon-m-yuan',
                            url: '/main'
                        },
                        {
                            id: '12',
                            name: '已办事项',
                            icon: 'el-icon-m-yuan',
                            url: '/main'
                        }
                    ]
                },
                {
                    id: '2',
                    name: '系统管理',
                    icon: 'el-icon-m-ziyuan',
                    url: '/main/auth',
                    second: [
                        {
                            id: '21',
                            name: '用户管理',
                            icon: 'el-icon-m-yuan',
                            url: '/main/user'
                        },
                        {
                            id: '22',
                            name: '权限管理',
                            icon: 'el-icon-m-yuan',
                            url: '/main/auth'
                        },
                        {
                            id: '23',
                            name: '代办事项',
                            icon: 'el-icon-m-yuan',
                            url: '/main/my'
                        }
                    ]
                }
            ];
            commit('getMenu', menus);
        }
    }
};
