# Monk.Node

基于 Express.js(4.x) + Sequelize.js(3.x) 的Nodejs MVC 框架。

## 作者信息 

- 原创作者：`百小僧` 
- 开源协议：`MIT License`
- 开发时间：`2016年12月06日`
- 当前版本：`2.1.2`，2016年12月15日
- 项目名称：`Monk.Node`
- 版权所有：[百签软件（中山）有限公司](http://www.baisoft.org)
- 联系方式：QQ群：`18863883`，作者QQ：`8020292`
- 开发理念：`一切从简，只为了更懒`
- 码云地址：[http://git.oschina.net/baisoft_org/Monk.Node](http://git.oschina.net/baisoft_org/Monk.Node)
- Github ：[https://github.com/MonkSoul/Monk.Node](https://github.com/MonkSoul/Monk.Node)

## 框架特点

- 基于Node.js平台开发，Javascript作为主要编写语言
- 极易入门，前后端开发者都能快速上手
- 目录清晰，代码规范
- 采用目前主流的MVC思想编写，并支持多区域，多站点开发（**这是Express 4.x 所没有的**）
- 底层采用主流的Express.js 4.x Web框架进行开发，拓展性极强，第三方模块丰富，并完全兼容Express.js 4.x功能
- 集成强大的Nodejs数据库ORM组件：Sequelize.js，支持目前所有主流数据库
- 集成强大的ejs模板引擎
- 支持日志记录，日志输出
- 支持多视图设置（**这是Express 4.x 所没有的**）
- 支持跨域
- 支持typescript编写
- 支持Session，Cookies会话操作
- 支持RESTful API开发
- 支持过滤器，中间件，支持权限控制再也不是什么难题
- 支持redis存储
- 支持实时通信WebSocket开发，已集成主流的Socket.io模块
- 支持文件上传
- 支持数据库表模型生成工具
- 支持开发、测试、生成环境数据库切换
- 安全性高，防止CSURF攻击
- 拓展性强，完美支持Node.js原生模块
- 更多强大功能后续陆续集成

## 视频教程

1. [Monk.Node 简介&安装](http://url.cn/42W06hK)

2. [Monk.Node 控制器](http://url.cn/42W06hK)

3. [Monk.Node 视图引擎](http://url.cn/42W06hK)

4. [Monk.Node 区域](http://url.cn/42W06hK)

5. [Monk.Node 静态资源](http://url.cn/42W06hK)

6. [Monk.Node 模型](http://url.cn/42W06hK)

7. [Monk.Node ORM](http://url.cn/42W06hK)

8. [Monk.Node 会话](http://url.cn/42W06hK)

9. [Monk.Node 过滤器](http://url.cn/42W06hK)

10. [Monk.Node 文件上传](http://url.cn/42W06hK)

11. Monk.Node Redis（未更新）

12. Monk.Node WebSocket（未更新）

13. Monk.Node 入口文件（未更新）

14. Monk.Node RESTful（未更新）

## 更新记录

```

============ 2016.12.15 V2.1.2 ============

- [新增] 数据库操作db全局对象，无需通过 require进来了（**重点更新**）
- [新增] 轻量级的images库，支持图片处理，包括水印，调整大小等等
- [新增] 定时任务node-schedule模块
- [新增] 邮件发送nodemailer模块
- [新增] lodash模块，提供非常方便的JavaScript工具操作库
- [新增] 视频教程
- [优化] 路由核心类库
- [更新] debug模块
- [更新] app.js 错误日志保存方法，以天为单位
- [更新] ORM文档

============ 2016.12.14 V2.1.1 ============

- [优化] 全面优化app.js 代码
- [新增] 全局路由过滤器
- [重构] 重构express.js单视图引擎，实现多视图引擎
- [更新] 目录结构，移除根目录下的assets,views文件夹，新增share文件夹
- [更新] postgres 版本
- [更新] socket.io 版本
- [更新] 使用文档
- [修复] Session和Cookie无作用bug
- [修复] core/db.js 加载模型错误

============ 2016.12.13 V2.0.1 ============

- [新增] cors跨域支持
- [新增] 防止csurf攻击支持，提供更安全的开发环境
- [新增] typescript 支持，可以用typescript开发nodejs模块
- [新增] logs/access和logs/error 用于保存日志记录
- [新增] 写入访问日志功能
- [新增] 写入错误日志功能
- [新增] 日志切割功能
- [新增] 支持日志写入文件和写入数据库功能
- [新增] package.json模块依赖 file-stream-rotator
- [优化] app.js 入口文件，提高访问性能
- [更新] 控制台日志输出为combined，之前版本为dev
- [更新] 开发文档，新增防止CSURF攻击示例

============ 2016.12.10 V2.0.0 ============

- [新增] app.js 入口文件默认应用首页设置
- [新增] 支持设置默认控制器，默认Action
- [新增] 区域目录，支持多站点项目开发，默认包含backend(后台)，frontend（前台）两个区域
- [新增] core文件夹，将models/index.js模块移动到core/db.js模块
- [调整] public名称为assets，，默认包含backend(后台)，frontend（前台），vendor（第三方插件）三个资源目录
- [调整] views视图子目录，默认包含backend(后台)，frontend（前台）两个区域视图
- [调整] utils/socketServer.js名称为utils/socket.js
- [优化] app.js 代码，提高加载性能，只支持设置默认区域，默认控制器，默认Action
- [去除] express-controller模块，通过自定义实现更强大的功能

============ 2016.12.08 V1.0.2 ============

- [新增] 即时通讯、聊天示例（推荐）
- [新增] socket.io 支持
- [新增] redis 支持
- [新增] multer 文件上传
- [新增] uploads 文件夹
- [优化] app.js 入口文件 端口和静态文件，用户上传文件代码
- [优化] 代码注释，代码架构
- [修复] package.json 中 mysql依赖包错误

============ 2016.12.07 V1.0.1 ============

- [新增] 演示站点
- [新增] 默认控制器，默认控制器为Home，默认行为为Index
- [新增] model代码生成器
- [新增] package.json 依赖 sequelize-auto
- [优化] 目录解构
- [修复] app.js 入口文件bug

============ 2016.12.06 V1.0.0 ============

- [发布] v1.0.0 版本

```

## 目录结构

初始化目录结构

```
www WEB部署目录
├─area                            区域目录
│  ├─backend                      后台区域目录
│  │  ├─controllers               后台控制器目录
│  │  │  ├─homeController.js      后台默认控制器
│  │  ├─views                     后台视图目录
│  │  ├─assets                    后台资源目录
│  ├─frontend                     前台区域目录
│  │  ├─controllers               前台控制器目录
│  │  │  ├─homeController.js      前台默认控制器
│  │  ├─views                     后台视图目录
│  │  ├─assets                    后台资源目录
│  ├─tools                        工具区域目录
│  │  ├─controllers               前台控制器目录
│  │  │  ├─generateController.js  数据库模型生成 控制器
│  │  ├─views                     后台视图目录
│  │  ├─assets                    后台资源目录
├─config                          配置目录
│  ├─db.json                      数据库配置文件
├─core                            核心目录
│  ├─db.js                        数据库模型操作核心库
│  ├─route.js                     路由解析核心库
├─filters                         过滤器，中间件目录
├─logs                            日志保存目录
│  ├─access                       访问日志
│  ├─error                        错误日志
├─models                          数据库表对应模型目录
├─share                           共享目录
│  ├─error.ejs                    错误提示模板
│  ├─favicon.ico                  网站收藏图标
├─uploads                         用户上传文件存放目录
├─utils                           工具类库目录
│  ├─socket.js                    Socket.io 服务器演示代码
├─app.js                          入口文件
├─package.json                    包配置文件
```

## 使用教程

### 安装

- `git` 方式

```
$ git clone https://git.oschina.net/baisoft_org/Monk.Node.git

$ cd Monk.Node

$ npm install

$ npm start

浏览器：http://localhost:3000/
```

- `zip` 下载

```
浏览器：http://git.oschina.net/baisoft_org/Monk.Node

$ cd Monk.Node

$ npm install

$ npm start

浏览器：http://localhost:3000/
```

### 入口配置


- 设置视图模板引擎

```
app.set('view engine', 'ejs');
```

- 设置静态资源目录

```
app.use(express.static(path.join(__dirname, 'areas', 'frontend', 'assets')));
app.use(express.static(path.join(__dirname, 'areas', 'backend', 'assets')));
app.use(express.static(path.join(__dirname, 'areas', 'tools', 'assets')));
```

- 设置Cookie，Session配置信息

```
// cookie处理
app.use(cookieParser());
// session处理
app.use(session({
    secret: 'monknode',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
```

- 设置默认区域，控制器，Action目录及路由

```
// 设置控制器文件夹并绑定到路由
coreRoute
    .setRouteDirectory({
        areaDirectory: __dirname + '/areas',
        controllerDirname: 'controllers',
        defautController: 'home',
        defautAction: 'index'
    })
    .bind(router);
```

- 设置网站默认首页

```
// 设置默认首页，默认指向的是：http://localhost:3000/frontend/
var defautAction = require(path.join(__dirname, 'areas', 'frontend', 'controllers', 'homeController'));
app.get("/", defautAction.get_index);
```

- 设置404，500错误处理

```
// 错误处理
// 404处理
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 错误或者服务器500异常处理
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render(__dirname + '/share/error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});
```

- 设置网站监听端口，默认是`3000`

```
app.set('port', process.env.PORT || 3000);
```

- 设置WebSocket启动，并设置服务端处理逻辑

```
require(path.join(__dirname, 'utils', 'socket')).listen(server);
```

### 区域

> 区域是对网站和代码进行高度组装，如前台，后台。目前区域只支持控制器逻辑的编写。

- 新增区域

只需要在 `areas`目录下创建一个文件夹即可，并在此文件夹下创建`controllers`目录。如：`areas/api/controllers`

默认已经包含`backend`（后台），`frontend`（前台）两个区域

- 访问区域，默认访问的是 `homeController`控制器中的`get_index` Action。

```
http://localhost:3000/backend/

http://localhost:3000/frontend/

http://localhost:3000/api/
```

### 控制器

> 控制器是整个框架能够在浏览器上正确访问的基础单元，可以说是灵魂。注：控制器中命名为`homeController`的控制器为默认控制器，该控制器中的`get_index`为默认Action，此控制器有且只能包含一个Action，也就是`get_index`

- 创建控制器，控制器文件命名必须以`Controller`结尾，如在`frontend`区域中添加`controllers/aboutController.js`

```
module.exports={

};
```

- 在控制器中创建Action，也就是路由，路由遵循 `method_action`格式。在`aboutController.js`中定义

```
module.exports={
    // 访问地址：http://localhost:3000/frontend/about/
    get_index:function(req,res){
        res.send("ok");
    },

    // 提交地址：http://localhost:3000/frontend/about/create
    post_create:function(req,res){
        res.send("ok");
    },

    // 访问地址：http://localhost:3000/frontend/about/company/baisoft
    get_company_baisoft:function(req,res){
        res.send("ok");
    },

    // 访问地址：http://localhost:3000/frontend/about/company/10
    get_company_id:function(req,res,id){
        res.send("ok")
    },

    // 访问地址：http://localhost:3000/frontend/about/company/10/百小僧
    get_company_id_name:function(req,res,id,name){
        res.send("ok");
    },

    // 访问地址：http://localhost:3000/frontend/about/百小僧/company
    get_name_company:function(req,res,name){
        res.send("ok");
    },

    // 过滤器
    get_admin:[function(req,res,next){
        if(未登录){
            res.redirect("登录页面");
        }
        else{
            next();
        }
    },function(req,res){
        res.send("ok");
    }],

    // 多个过滤器
    get_admin:[function(req,res,next){
        console.log("日志记录");
        next();
    },function(req,res,next){
        if(未登录){
            res.redirect("登录页面");
        }
        else{
            next();
        }
    },function(req,res){
        res.send("ok");
    }],
};
```

### 视图模板引擎

> 视图模板引擎采用的是`ejs`模板引擎，默认视图目录为：区域下的`views`文件夹。[ejs详细文档](https://www.npmjs.com/package/ejs)

- 基础语法

```
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

- 在控制器中使用

```
module.exports={
    get_index:function(req,res){
        res.render("frontend/about/index");
    },
    get_about:function(req,res){
        res.render("frontend/about/index",{
            user:{
                name:"百小僧"
            }
        });
    }
};
```

- 引入公共布局

```
<%- include("header") %>

<%- include("footer") %>

// 传递参数

<%- include("header",{
    name:"百小僧"
}) %>

<%- include("footer",{
    name:"百小僧"
}) %>
```

### 静态资源

> 静态资源默认目录为`assets`目录

- 基础使用

```
<img src="/frontend/imgs/logo.png" />

<link res="stylesheet" href="/frontend/css/style.css" />

<script type="text/javascript" src="/frontend/js/script.js"></script>
```

### 模型

> 模型主要放在`models`文件夹

- 定义一个和数据库表对应的模型：`member.js`

```
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('member', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'member',
		timestamps: false,
		freezeTableName: true
	});
};
```

由于构建模型是非常耗时而且重复代码多，所以本框架提供了数据表模型生成工具，通过下面地址可以快速构建模型，无需手工操作

生成前需配置 `config/db.json`配置文件，通常只需配置数据库类型，数据库连接信息即可

```
http://localhost:3000/tools/generate/models
```

### 数据库CURD

数据库操作集成强大的ORM框架：Sequelize.js，支持目前所有主流数据库，[详细文档](http://docs.sequelizejs.com/en/v3/)

- 数据库配置信息，配置文件在`config/db.json`下面

```
{
    // 开发环境
    "development": {
        "username": "sa",   // 数据库用户名
        "password": "000000",   // 数据库密码
        "database": "monk_node",    // 数据库名称
        "host": "MONKSOUL", // 服务器主机地址
        "dialect": "mssql", // 数据库类型（'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'）
        "output": "../models",  // 生成实体模型(models)存放的目录
        "additional": { // 其他参数
            "timestamps": false,
            "freezeTableName": true
        }
    },
    // 测试环境
    "test": {
        "username": "sa",
        "password": "000000",
        "database": "monk_node",
        "host": "MONKSOUL",
        "dialect": "mssql",
        "output": "../models",
        "additional": {
            "timestamps": false,
            "freezeTableName": true
        }
    },
    // 生产环境
    "production": {
        "username": "sa",
        "password": "000000",
        "database": "monk_node",
        "host": "MONKSOUL",
        "dialect": "mssql",
        "output": "../models",
        "additional": {
            "timestamps": false,
            "freezeTableName": true
        }
    }
}
```

- CURD

```
module.exports={
    // 新增
    post_create:function(req,res){
        db.member.create({name:"百小僧"}).then(function(msg){
            // 新增成功
            console.log(msg);
        });
    },
    // 删除操作
    post_delete:function(req,res){
        db.member.destroy().then(function(msg){
            // 删除成功
            console.log(msg);
        });
    },
    // 根据条件删除
    post_delete:function(req,res){
        db.member.destroy({
            where:{
                id:10
            }
        }).then(function(msg){
            // 删除成功
            console.log(msg);
        });
    },
    // 更新操作
    post_delete:function(req,res){
        db.member.update({name:'新生帝'},{
            where:{
                id:10
            }
        }).then(function(msg){
            // 更新成功
            console.log(msg);
        });
    },
    // 根据主键查询一条
    get_id:function(req,res){
        db.member.findById(10).then(function(data){
            // 查询成功
            console.log(data);
        });
    },
    // 根据条件查询一条
    get_one:function(req,res){
        db.member.findOne({
            where:{
                name:"百小僧"
            }
        }}).then(function(data){
            // 查询成功
            console.log(data);
        });
    },
    // 查询所有
    get_all:function(req,res){
        db.member.findAll().then(function(data){
            // 查询成功
            console.log(data);
        });
    },
    // 根据条件查询
    get_all:function(req,res){
        db.member.findAll({
            where:{
                id:{
                    $gt:2
                }
            }
        }).then(function(data){
            // 查询成功
            console.log(data);
        });
    },
    // 分页查询
    get_all:function(req,res){
        db.member.findAll({
            offset: 10, 
            limit: 2,
            where:{
                isDel:false
            }
        }).then(function(data){
            // 查询成功
            console.log(data);
        });
    }
};
```

### Session，Cookies

> Session、Cookies主要用户存储客户端会话信息，通常用于登录判断

- Session 使用

```
module.exports={
    get_index:function(req,res){
        // 检查 session 中的 isVisit 字段
        // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
        if(req.session.isVisit) {
            req.session.isVisit++;
            res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
        } else {
            req.session.isVisit = 1;
            res.send("欢迎第一次来这里");
            console.log(req.session);
        }
    }
}
```

- Cookies 使用

```
module.exports={
    get_index:function(req,res){
        // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
        // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
        if (req.cookies.isVisit) {
            console.log(req.cookies);
            res.send("再次欢迎访问");
        } else {
            res.cookie('isVisit', 1, {maxAge: 60 * 1000});
            res.send("欢迎第一次访问");
        }
    }
}
```


### 过滤器、中间件

> 过滤器，中间件主要对请求进行过滤的

- 在控制器中直接使用

```
module.exports={
    get_admin:[function(req,res,next){
        if(未登录){
            res.redirect("登录页面");
        }
        else{
            next();
        }
    },function(req,res){
        res.send("ok");
    }]
};
```

- 全局过滤器，将过滤器定义到`filters`文件夹下，如创建一个`loginFilter.js`

```
module.exports = function (req, res, next) {
    if(未登录){
        res.redirect("登录页面");
    }
    else{
        next();
    }
};
```

在控制器中使用

```
var loginFilter = require("../../../filters/loginFilter");
module.exports={
    get_admin:[loginFilter,function(req,res){
        res.send("ok");
    }]
}
```

- 多个过滤器

```
module.exports={
    get_admin:[function(req,res,next){
        console.log("日志记录");
        next();
    },function(req,res,next){
        if(未登录){
            res.redirect("登录页面");
        }
        else{
            next();
        }
    },function(req,res){
        res.send("ok");
    }]
};
```


### 文件上传

> 文件上传集成强大的`multer`组件，[详细文档](https://www.npmjs.com/package/multer)

- 客户端

```
<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="logo">
    <input type="submit" value="提交">
</form>
```

- 服务端

```
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

module.exports = {
    post_upload: [upload.single('logo'), function(req, res, next) {
        var file = req.file;
        var ext = path.extname(file.originalname);
        fs.rename(file.path, file.path + ext, function(err) {
            if (err) {
                res.send(JSON.stringify(err));
            }
            next();
        });
    }, function(req, res) {
        res.send("上传成功");
    }]
}
```

### Redis存储

> 集成了 `redis` 模块，[文档地址](https://www.npmjs.com/package/redis)

- 基础使用

```
var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
```

### WebSocket

> 框架已经集成了socket.io ，可以开发实时通信，聊天等应用，[详细文档](http://socket.io/)

- 服务端代码，`utils/socket.js`

```
var io = require('socket.io')();

// socket.io 基础使用，监听连接请求
io.on('connection', function (socket) {
    console.log("客户端连接成功~~");

    // 监听来自客户端事件
    socket.on('send', function (data) {
        // 调用客户端receive事件，并传递data
        io.emit('receive', data);
    });


    // 这里就写各种监听事件就可以了，
    // 通过 socket.on("") 监听客户端事件，通过 io.emit("") 触发所有客户端事件，socket.emit("") 触发指定客户端

});


exports.listen = function (server) {
    return io.listen(server);
};
```

- 客户端代码

```
<!-- 引入客户端脚本 -->
  <script src="/vendors/socket.io/socket.io.js"></script>
  <script>
    // 连接服务器
    var socket = io.connect('http://localhost:3000/');

    window.onload=function(){
        var send=document.getElementById("send");
        send.onclick=function(){
          var name=document.getElementById("name").value;
          var msg=document.getElementById("msg").value;

          // 发送消息
          socket.emit('send', { data:name+":"+msg  });
        };


        // 监听服务器消息
        socket.on('receive', function (data) {
          console.log(data);
          var list = document.getElementById("list");
          // 写入聊天列表
          list.innerHTML=list.innerHTML+"<br />"+data.data;
          // 清空msg
          document.getElementById("msg").value="";
        });
    };
</script>
```

### 防止csurf攻击

- 服务端

```
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
module.exports={
    post_login:[csrfProtection,function(req,res){
        res.send("ok",{ csrfToken: req.csrfToken() });
    }]
};
```

- 客户端

```
<form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}">
  
  Favorite color: <input type="text" name="favoriteColor">
  <button type="submit">Submit</button>
</form>
```

### 生成环境部署

- 安装pm2

```
$ npm install pm2 -g |

$ pm2 start app.js
```

- 设置随机启动

```
$ npm install pm2-windows-startup -g

$ pm2-startup install

$ pm2 save
```

## 友情捐赠

如果你觉得 Monk.Node 对你有价值，并且愿意让她继续成长下去，你可以资助这个项目的开发，为作者加油打气。

![微信捐赠](http://images.cnblogs.com/cnblogs_com/baisoft/865458/o_%e6%8d%90%e8%b5%a0.png)

如果你喜欢Monk.Node，可以点击右上角的 `star`，想实时关注进度，可以点击右上角的 `watch`。

最后，感谢每一个提建议和使用或者捐赠的朋友！因为你们，我们才能坚持！也是因为你们，未来才会更美好！