let Mock = require('mockjs');

let Random = Mock.Random;

let result;

// 获取随机布尔值
result = Random.boolean();      //true false各一半
result = Random.boolean(1,2,false);    //1/3的可能性是false 2/3是true

// 获取随机数
result = Random.integer(10, 20);
result = Random.character('number');
result = Random.character('lower');
result = Random.character('upper');
result = Random.character('symbol', 10);

result = Random.string();
result = Random.string(4, 5);
result = Random.string('upper',10);

result = Random.range(5);
result = Random.range(5, 10);
result = Random.range(5, 10, 2);

// 返回一个随机日期的字符串
result = Random.date('yyyy-MM-dd');

// 放回一个随机时间
result = Random.time();
result = Random.datetime();
result = Random.now();

// Random.image(size?,background?,foreground?,format?text?)
// result = Random.img('160*160', '#ccc');
// result = Random.image();
// result = Random.image('128x90');
// result = Random.image('120x660','#ccc');    //前景色#ccc
// result = Random.image('226x280','#eee','第三个参数是文字不是前景色');
// result = Random.image('66x31','#ddd','#123456','四个参数的时候第三个参数是前景色');
// result = Random.image('240x400','#333','#1483dc','.gif','全部参数的情况下');

result = Random.paragraph(1,3);
// 随机生成一个句子，第一个单词的首字母大写
result = Random.sentence(3, 10);

// 随机生成一个单词
result = Random.word(3);

result = Random.title(3);
result = Random.cparagraph();   //生成n句中文
result = Random.cparagraph(1, 3);   // 1-3句中文
result = Random.csentence();    // 生成一句包含n个字的中文
result = Random.csentence(3);
result = Random.cword();    // 返回一个或者多个中文 Random.cword(3) = Random.csentence(3)
result = Random.ctitle(12); // 等同于 csentence 和cword


// 常见的英文名
result = Random.first();
result = Random.last();
result = Random.name();

result = Random.cfirst();
result = Random.clast();
result = Random.cname();


// web
result = Random.url();
result = Random.url('http');
result = Random.url('http', 'it.com');
result = Random.protocol();
result = Random.email();
result = Random.email('its.com');
result = Random.ip();


// address
result = Random.region();   // 随机生成一个中国的大区，如华北，西南
result = Random.province();  // 随机生成一个中国省直辖市自治区特别行政区
result = Random.city(); // 随机生成一个中国城市，prefix布尔值，表示是否标注所在省
result = Random.city(true);

result = Random.county();   // 随机生成一个中国县，prefix布尔值，表示是否显示所属的省市
result = Random.county(true);

result = Random.zip(); // 随机生成一个六位数邮政编码

// helper
var str = 'i am a front end Enginer';

result = Random.capitalize(str);    // 把第一个字母转成大写
result = Random.upper(str); // 转成大写
result = Random.lower(str);
var arr = ['a', 'c', 2, 3, 4];
result = Random.pick(arr);

result = Random.shuffle(arr);

// guid
result = Random.guid(); // 6de83F76-b442-b2b9-dFaE-f8583bbCb3f9
result = Random.id();  // 370000199901137456




var em1 = Random.email();
var em2 = Mock.mock('@email');
var em3 = Mock.mock({
    email:'@email'
})

var t = Mock.mock({
    "user|5-10": [{
        'name': '@cname',   //中文名称
        'age|1-100': 100,   //100以内随机整数
        'birthday': '@date("yyyy-MM-dd")',  //日期
        'city': '@city(true)'   //中国城市
    }]
});

// //id 账号 用户名 职位 邮箱 描述 身份证 手机号 qq号 性别 邮编 地址 头像 注册日期 最后登录时间  最后登录ip

let data = {
    status: 0,
    message: '查询成功!',
    'result|3-10': [
        {
            'id': '@guid',
            'username': '@name',
            'cname': '@cname',
            'title': '@cword(3)',
            'mail': '@email("its.com")',
            'description': '@cparagraph(3)',
            'uid': Mock.Random.id(),
            'phone': /^1[38579][1-9]\d{8}/,
            'qq': /\d{6,12}/,
            'sex|0-1': 1,
            'zip': '@zip',
            'address': '@county(true)',
            'avatar': Mock.Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
            'date': '@date',
            'ip': '@ip'
        }
    ]
}

result = Mock.mock(data);
console.log(result);