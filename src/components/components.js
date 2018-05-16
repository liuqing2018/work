/**
 * Created by Administrator on 2018/5/16.
 */
// 将components目录下的组件，引入main.js，并全局注册

import Vue from 'vue';
import { capitalizeFirstLetter } from '../assets/js/common';

const components = require.context('.', false, /\.vue$/); // 找到components文件夹下以.vue命名的文件
components.keys().forEach(fileName => {
    const componentConfig = components(fileName);
    const componentName = capitalizeFirstLetter(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')); // 截取文件名称，并转成首字母大写
    Vue.component(componentName, componentConfig.default || componentConfig);
});
