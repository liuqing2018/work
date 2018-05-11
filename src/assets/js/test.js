/**
 * Created by Administrator on 2018/5/11.
 */

function af (a, b, c) {
    return a + b + c ;
}
function bf(a,b,c){
    var a = {
        'adcs': 10
    };

    for(let key in c){
        console.log(key);
        if(c.hasOwnProperty(key)){
            a[key] = c[key];
        }
    }

    console.log(a);
}


bf('methods', 'sends', {header: {
    content: 'aaa'
}, name: 'abc'})