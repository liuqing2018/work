/**
 * Created by Administrator on 2018/5/10.
 */

import drag from './drag';
import hljs from './hljs';

// 注册指令
const directives = {};
directives.install = (Vue, options) => {
    Vue.directive('drag2', drag);
    Vue.directive('highlight', hljs);
};

export default directives;
