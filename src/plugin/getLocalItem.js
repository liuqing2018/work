/**
 * Created by Administrator on 2018/5/15.
 */
export default key => {
    console.log(key);
    console.log(localStorage[key]);
    if (localStorage[key] && localStorage[key] !== null) {
        return JSON.parse(localStorage[key]);
    }
    return '';
};
