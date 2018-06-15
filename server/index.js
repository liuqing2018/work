const bodyParser = require('body-parser');
const express = require('express');
const Mock = require('mockjs');
const multer  = require('multer');
const fs = require('fs');
const app = express();
const path = require('path');
//设置保存路径
var upload = multer({ dest: 'uploads/' });


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/uploads' ,express.static(path.join(__dirname, 'uploads')));

// 测试接口
app.get('/', (req, res) => {
	res.write('welcome Index');
	res.end();
});

// 单个文件上传
app.post('/upload', upload.single("files"), (req, res) => {
    var image=req.file.path;
    var obj = {
        status: 0,
        message: '上传成功!',
        result: image
    };
    res.send(obj);
});

// 批量上传
app.post('/uploads', upload.array("files"), (req, res) => {
    console.log(req.files);

    var obj = {
        status: 0,
        message: '上传成功!',
        result: req.files
    };

    res.send(obj);
});

app.get('/user/info', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    let data = {
        status: 0,
        message: '查询成功!',
        result: [
            {
                username: 'Leo1112',
                title: '22222'
            },
            {
                username: 'Leo2',
                title: '3333333'
            },
            {
                username: 'Leo3',
                title: '34444444444'
            }
        ]
    };
	res.send(data);
});

app.post('/user/info', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
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
    };

    setTimeout(function () {
        res.send(Mock.mock(data));
    }, 5000)
});


var server = app.listen(8088, '192.168.64.55', function () {

	var host = server.address().address;
	var port = server.address().port;

    console.log(`服务启动成功！ http://${host}:${port}`);
})

