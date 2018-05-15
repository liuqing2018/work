/**
 * Created by Administrator on 2018/5/15.
 */
export default (key, data) => {
    localStorage[key] = JSON.stringify(data);
};
