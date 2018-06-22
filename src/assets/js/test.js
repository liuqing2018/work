let obj = {
    user: {
        name: 'leo',
        sex: 1
    },
    work: {
        title: '工程师',
        name2: '小米'
    },
    age:11,
    max: 12
};

let temp = obj.work;


obj.work = obj.user;
obj.user = temp;


console.log(obj);