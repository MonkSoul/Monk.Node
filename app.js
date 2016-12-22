// 载入常用nodejs模块
var path = require('path');
var fs = require('fs');

// favicon.ico 支持
var favicon = require('serve-favicon');
// 日志输出
var fileStreamRotator = require('file-stream-rotator')
var logger = require('morgan');
// post参数解析
var bodyParser = require('body-parser');
// flash支持
var flash = require('connect-flash');

// express 框架
var express = require('express');
var app = express();
// 载入核心路由解析组件
var resolve = require(path.join(__dirname, 'utils', 'route'));
// cookie
var cookieParser = require('cookie-parser');
// session
var session = require('express-session');
// cors
var cors = require('cors');
// 将db对象载入全局对象中
global.db = require(path.join(__dirname, 'utils', 'db'));

// 跨域支持
app.use(cors());

// 会话处理
// cookie处理
app.use(cookieParser());
// session处理
app.use(session({
    secret: 'monknode',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));

// 设置视图引擎
app.set('view engine', 'ejs');

// 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')));
// 上传文件
app.use(express.static(path.join(__dirname, 'uploads')));
// 设置icon图标（如果没有favicon.icon）可以注释这一行代码
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//flash支持
app.use(flash());

// 处理非get提交数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置默认区域
var defaultArea = "frontend";

// 创建express Router 实例
var router = express.Router();
// 路由中间件,实现多视图切换
router.use(function (req, res, next) {
    var url = req.url;
    var pathArr = url.split(/\/|\?/);
    var viewPath = path.join(__dirname, 'areas', defaultArea, 'views');
    if (pathArr[1] != "" && pathArr[1] != "favicon.ico") {
        viewPath = path.join(__dirname, 'areas', pathArr[1], 'views');
    }
    else {
        viewPath = path.join(__dirname, 'areas', defaultArea, 'views');
    }
    app.set('views', viewPath);
    next();
});

// 实现ViewData全局功能，
// ejs页面通过 <%=_locals.（locals文件夹下的文件名） %>访问，如：<%=_locals.setting.name %>
// action通过 res.locals.setting  访问
var locals = require(path.join(__dirname, "utils", "locals"));
router.use(function (req, res, next) {
    res.locals = locals;
    next();
});

// 载入路由中间件
app.use(router);

// 日志输出到文件系统，每日一个日志文件
var accessLogDirectory = __dirname + '/logs/access';
fs.existsSync(accessLogDirectory) || fs.mkdirSync(accessLogDirectory);
var errorLogDirectory = __dirname + '/logs/error';
fs.existsSync(errorLogDirectory) || fs.mkdirSync(errorLogDirectory);
// 保存访问日志
var accessLogStream = fileStreamRotator.getStream({
    filename: accessLogDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false,
    date_format: "YYYY-MM-DD"
})
app.use(logger('combined', { stream: accessLogStream }));
// 设置错误日志文件地址
var errorLogStream = fs.createWriteStream(errorLogDirectory + '/error.log', { 'flags': 'a' });

// 设置控制器文件夹并绑定到路由
resolve
    .setRouteDirectory({
        areaDirectory: __dirname + '/areas',
        controllerDirname: 'controllers',
        defaultArea: defaultArea,
        defautController: 'home',
        defautAction: 'index'
    })
    .bind(router);

// 错误处理
// 404处理
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 错误或者服务器500异常处理
app.use(function (err, req, res, next) {
    var error = (req.app.get('env') === 'development') ? err : {};
    //写错误日志
    var errorMes = '[' + Date() + ']' + req.url + '\n' + '[' + error.stack + ']' + '\n';
    errorLogStream.write(errorMes);
    var status = err.status || 500;
    res.status(status);
    res.send('<pre>' + status + ' ' + err.message + '\n' + errorMes + '</pre>');
});

// 设置端口
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用启动成功！访问地址： http://%s:%s', host, port);
});

// 引入socket 服务端模块。如无需即时通讯，注释即可
require(path.join(__dirname, 'utils', 'socket')).listen(server);