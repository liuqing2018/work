/**
 * Created by Administrator on 2018/5/15.
 */
export default key => {
    if (localStorage[key] && localStorage[key] !== null) {
        return JSON.parse(localStorage[key]);
    }
    return '';
};
