function test (a, b) {
    if(a) {
        b = a.sex;
        a = a.name;

        console.log(a);
        console.log(b);
    }
}

test({name:'leo', sex:'222'}, 122)