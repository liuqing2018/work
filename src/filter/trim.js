import {getType} from '../assets/js/common';
/**
 * 去除空格
 * @param str
 * @returns {string}
 */
export const trim = (str) => {
    if (getType(str) !== 'string') {
        throw Error('must be a string');
    } else {
        return str.replace(/^\s+|\s+$/g, '');
    }
};
