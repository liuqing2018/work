/**
 * Created by liuqing on 2018/4/30.
 */

import {http} from '../../assets/js/http';
export default {
    namespace: true,
    state: {
        menuList: [],
        // activeMenu: '/',
        activeMenu: '/main/done',
        tabList: [
            {
                title: '工作台',
                name: 'main',
                path: '/main',
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
            let menus = [
                {
                    id: '1',
                    name: '基础框架功能',
                    icon: 'el-icon-m-operation',
                    url: '/main/test0',
                    second: [
                        {
                            id: '11',
                            name: '个人桌面',
                            icon: 'el-icon-m-unchecked22',
                            url: '/main//yyy',
                            second: [
                                {
                                    id: '111',
                                    name: '我的流程',
                                    icon: 'el-icon-m-unchecked2',
                                    url: '/main/iii',
                                    second: [
                                        {
                                            id: '1111',
                                            name: '待办事项',
                                            icon: 'el-icon-m-unchecked2',
                                            url: '/main/todo'
                                        },
                                        {
                                            id: '1112',
                                            name: '已办事项',
                                            icon: 'el-icon-m-unchecked2',
                                            url: '/main/done'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: '12',
                            name: '系统管理',
                            icon: 'el-icon-m-unchecked2',
                            url: '/main/test1',
                            second: [
                                {
                                    id: '121',
                                    name: '组织管理',
                                    icon: 'el-icon-m-unchecked2',
                                    url: '/main/nn',
                                    second: [
                                        {
                                            id: '1211',
                                            name: '用户管理',
                                            icon: 'el-icon-m-unchecked2',
                                            url: '/main/user'
                                        }
                                        // ,
                                        // {
                                        //     id: '1212',
                                        //     name: '机构管理',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // },
                                        // {
                                        //     id: '1213',
                                        //     name: '公司管理',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // },
                                        // {
                                        //     id: '1214',
                                        //     name: '岗位管理',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // }
                                    ]
                                },
                                {

                                    id: '122',
                                    name: '权限管理',
                                    icon: 'el-icon-m-unchecked2',
                                    url: '/main/hh',
                                    second: [
                                        {
                                            id: '1221',
                                            name: '角色管理',
                                            icon: 'el-icon-m-unchecked2',
                                            url: '/main/auth'
                                        }
                                        // ,
                                        // {
                                        //     id: '1222',
                                        //     name: '二级管理员',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // },
                                        // {
                                        //     id: '1223',
                                        //     name: '系统管理员',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // },
                                        // {
                                        //     id: '1224',
                                        //     name: '岗位管理',
                                        //     icon: 'el-icon-m-unchecked2',
                                        //     url: '/main'
                                        // }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '2',
                    name: '开发工具功能',
                    icon: 'el-icon-m-toolkit',
                    url: '/main/test2',
                    second: [
                        // {
                        //     id: '21',
                        //     name: '开发工具1',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // },
                        // {
                        //     id: '22',
                        //     name: '开发工具2',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // },
                        // {
                        //     id: '23',
                        //     name: '开发工具3',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // }
                    ]
                },
                {
                    id: '3',
                    name: '通用业务功能',
                    icon: 'el-icon-m-cog',
                    url: '/main/test3',
                    second: [
                        // {
                        //     id: '31',
                        //     name: '通用业务1',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // },
                        // {
                        //     id: '32',
                        //     name: '通用业务2',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // },
                        // {
                        //     id: '33',
                        //     name: '通用业务3',
                        //     icon: 'el-icon-m-unchecked2',
                        //     url: '/main/'
                        // }
                    ]
                }
            ];
            commit('getMenu', menus);
        }
    }
};
