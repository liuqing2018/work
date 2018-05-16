import Vue from 'vue';
import { trim } from './trim';
import dateFmt1 from '../assets/js/date';
/***
 * - 模板中调用过滤器：{{value | filter}}
 * - 方法中调用过滤器：this.$options.filters[filter](...args);
 */
let filters = {
    trim,
    dateFmt1
};
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
