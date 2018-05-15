/**
 * Created by Administrator on 2018/5/15.
 */
import {getType} from '../assets/js/common';
/**
 * 数组去重
 * @param array：待去重的数组，不是数组的话会报错
 * @param flag： true表示比较类型，即严格比较，false表示不比较类型，默认false
 * @returns {Array}: 去重复后的数组
 */
export default (array, flag) => {
    if (getType(array) !== 'array') {
        throw new Error('the argument must be an array.');
    }

    let newArr = []; // 返回的新数组
    let obj = {}; // 临时对象

    array.forEach((item, index) => {
        let key = flag ? (typeof item + item) : item; // 判断是否是需要严格判断
        if (!obj[key]) {
            newArr.push(item);
            obj[key] = true;
        }
    });

    return newArr;
};
