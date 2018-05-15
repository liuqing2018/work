/**
 * Created by Administrator on 2018/4/23.
 */

import http from '../../plugin/http';
export default {
    namespace: true,

    // 初始化属性信息，state等同于组件里的data
    state: {
        vm: {
            name: '',
            pwd: ''
        },
        formModel: {},
        userList: []
    },

    //  对state中的数据进行一些操作，等同于组件里的computed（），如果
    getters: {
        // 获取可用用户
        getActiveUser: state => {
            return state.userList.filter(user => user.flag);
        },

        // 获取可用用的总数
        getActiveUserTotal: (state, getters) => {
            return getters.getActiveUser.length;
        },

        // 通过用户名获取用户信息
        getUserByName: state => (name) => {
            return state.user.find(user => user.name === name);
        }

    },

    // 更改store中的唯一方法 类似事件的发布订阅；方法的第一个参数是state，第二个参数是负载payload
    /*
     * 提交mutation的两种方式
     * - store.commit('addUser', payload)
     * - store.commit({
     *       type: 'addUser',
     *       amount: payload
     *   })
     * */
    mutations: {
        // 获取全部用户
        getAllUses: (state, users) => {
            console.log('======= get all users ===========');
            state.userList = users;
        },

        // 添加用户
        addUser: (state, user) => {
            state.userList.unshift(user);
        }
    },

    /*
     * action需要提交到mutation，不能直接改变状态
     * action里可以执行异步操作
     * */
    actions: {
        getUsers: ({commit}) => {
            console.log('============ getUsers =============');
            let users = [
                {
                    name: 'Link',
                    sex: 1,
                    age: 11
                },
                {
                    name: 'Leo',
                    sex: 1,
                    age: 22
                },
                {
                    name: 'jobs',
                    sex: 1,
                    age: 33
                },
                {
                    name: 'lucy',
                    sex: 1,
                    age: 444
                },
                {
                    name: 'Heo',
                    sex: 1,
                    age: 55
                },
                {
                    name: 'Jike',
                    sex: 1,
                    age: 66
                }
            ];
            commit('getAllUses', users);
            // http.post({
            //     url: 'user/get',
            //     params: {
            //         data: {}
            //     },
            //     success: data => {
            //         console.log(data);
            //     }
            // });
        },
        addUser: ({commit, state}) => commit('addUser'),

        updateUser: ({commit}) => {
            http.post({
                url: 'user/update',
                params: {
                    data: {}
                }
            }).success(data => {
                console.log(data);
                commit('updateUser');
            });
        }
    }

};
