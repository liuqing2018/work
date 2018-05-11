const bodyParser = require('body-parser');
const express = require('express');


const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// 测试接口

app.get('/', (req, res) => {
	res.write('welcome Index');
	res.end();
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
    // console.log(res);
    let data = {
        status: 0,
        message: '查询成功!',
        result: [
            {
                username: 'Leo1',
                title: '研发工程师'
            },
            {
                username: 'Leo2',
                title: '研发工程师'
            },
            {
                username: 'Leo3',
                title: '研发工程师'
            }
        ]
    };
    setTimeout(function () {
        res.send(data);
    }, 5000)
});


var server = app.listen(8088, function () {

	var host = server.address().address;
	var port = server.address().port;

    console.log(`服务启动成功！ http://${host}:${port}`);
})

