
export default {
    namespace: true,
    state: {
        loopList: []
    },
    mutations: {
        // 获取轮播图的路径
        getLoopList: (state, loopList) => {
            state.loopList = loopList;
        },

        // 添加一个轮播图
        addLoopList: (state, src) => {
            state.loopList.push(src);
        }
    },

    // 异步的操作放在action里
    actions: {
        // 获取轮播图的路径
        getLoopList: ({commit}) => {
            // 通过ajax获取数据
            $http.get('/xxx/xxx').then(function (data) {
                commit('getLoopList', data);
            }, function (err) {
                console.log(err);
            });
        }
    }
};
