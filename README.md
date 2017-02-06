# Monk.Node — 极易入门的Node.JS MVC 框架

Monk.Node 是一个免费开源的，快速、简单的面向对象的轻量级Node.JS开发框架，是为了敏捷WEB应用开发和简化企业应用开发而诞生的。Monk.Node从诞生以来一直秉承简洁实用的设计原则，在保持出色的性能和至简的代码的同时，也注重易用性。遵循MIT开源许可协议发布，意味着你可以免费使用Monk.Node，甚至允许把你基于Monk.Node开发的应用开源或商业产品发布/销售。

> Monk.Node 2.x 版本是一个颠覆和重构版本，采用全新的架构思想，引入了更多的Node.JS新特性，优化了核心，减少了依赖，实现了真正的惰性加载，支持npm，并针对Web开发做了大量的优化，包括路由、日志、异常、模型、数据库、模板引擎和验证等模块都已经重构，但绝对是新项目的首选（无论是WEB还是API开发）。

## 主要特性

- 目录规范，代码清晰，极易入门
- 基于 Node.JS 平台构建，Javascript 作为主要开发语言
- 底层以 [Express.js](http://www.expressjs.com.cn/) 为基石，拓展性强，组件丰富
- 采用主流的 MVC 思想编写，前后端解耦
- 内置 Node.JS 平台下强大的 ORM 组件：[Sequelize.js](http://docs.sequelizejs.com/en/v3/)，支持目前主流的数据库操作
- 集成 Web 开发所需的基本组件，无需手工添加
- 支持 WebSocket 开发
- 支持 RESTful API 开发
- 支持 Redis 存储
- 支持 Cors 跨域
- 支持数据库模型自动构建
- 支持有效防止 CSURF 攻击
- 支持邮件发送
- 支持定时任务
- 支持验证码生成

Monk.Node 目前还在持续新增更多新特性，新功能，更多特性可持续关注项目更新。

> Monk.Node 基于 Express.js 开发，但更优于 Express.js 本身提供的脚手架！—— 伟大的项目都是站在巨人的肩膀上的 * _* !

## 作者信息

- 原创作者：百小僧
- 开源协议：MIT License
- 开发时间：2016年12月06日
- 当前版本：`2.2.9`，2017年02月06日
- 项目名称：Monk.Node
- 版权所有：[百签软件有限公司](http://www.baisoft.org)
- 联系方式：QQ群：18863883，作者QQ：8020292
- 开发理念：一切从简，只为了更懒
- 码云地址：http://git.oschina.net/baisoft_org/Monk.Node
- Github ：https://github.com/MonkSoul/Monk.Node

## 视频教程

1. [Monk.Node 简介&安装](http://url.cn/42W06hK)

2. [Monk.Node 控制器](http://url.cn/42W06hK)

3. [Monk.Node 视图引擎](http://url.cn/42W06hK)

4. [Monk.Node 区域](http://url.cn/42W06hK)

5. [Monk.Node 静态资源](http://url.cn/42W06hK) **（项目已调整，请按照最新文档）**

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

============ 2017.02.06 V2.2.9 ============

- [新增] log4js 日志访问组件
- [新增] config/log4js.json 日志配置文件
- [新增] utils/log4js.js 日志记录工具类
- [修复] 记录日志时，logs文件夹不存在问题
- [更新] README.md 文档
- [更新] package.json依赖模块


============ 2017.01.24 V2.2.8 ============

- [更新] README.md 文档
- [更新] package.json依赖模块

============ 2017.01.12 V2.2.7 ============

- [更新] package.json依赖模块

============ 2016.12.23 V2.2.6 ============

- [更新] app.js 入口文件，将ejs模板引擎文件名改为.html（重点更新）

============ 2016.12.22 V2.2.5 ============

- [新增] locals文件夹，定义全局数据注入，类似ASP.NET MVC的ViewData数据
- [新增] utils/locals.js 模块，全局注入核心模块
- [更新] app.js 核心代码，使其支持全局数据注入
- [更新] utils/route.js 模型，使其支持局部数据注入
- [更新] 使用文档
- [更新] sequelize模块
- [更新] debug模块
- [优化] utils/route.js代码
- [修复] 表单 enctype="multipart/form-data" 数据无法获取问题

============ 2016.12.20 V2.2.3 ============

- [新增] utils/route.js 默认路由区域设置，默认控制器，默认Action路由支持
         如：http://localhost:3000 == http://localhost:3000/frontend  == http://localhost:3000/frontend/home == http://localhost:3000/frontend/home/index
- [更新] app.js 核心代码
- [更新] multer 文件上传模块
- [更新] debug 调试模块
- [优化] utils/route.js 核心代码
- [删除] app.js 默认首页设置代码，调整为默认区域设置，默认首页由 默认区域，默认控制器，默认Action组成
- [修复] utils/route.js 路由解析 由于node.js版本低导致路由解析报404错误
- [修复] 文档错误问题 

============ 2016.12.16 V2.2.1 ============

- [新增] 验证码模块，并编写验证码类库：utils/captcha.js
- [新增] 验证码演示示例，http://localhost:3000/backend/
- [删除] 删除所有区域下的assets资源文件
- [删除] core文件夹，并将db.js,route.js转移到utils目录下
- [更新] 错误提示页面，显示更多错误信息
- [更新] 设置根目录下的public为资源文件，保持和express.js兼容 （重要调整）
- [更新] core/db.js 加载模块代码，新增可配置的加载项
- [更新] 基本示例
- [更新] 静态资源文档

============ 2016.12.15 V2.1.2 ============

- [新增] 数据库操作db全局对象，无需通过 require进来了（**重点更新**）
- [新增] utils/gmodels/js 模块
- [新增] 轻量级的images库，支持图片处理，包括水印，调整大小等等
- [新增] 定时任务node-schedule模块
- [新增] 邮件发送nodemailer模块
- [新增] lodash模块，提供非常方便的JavaScript工具操作库
- [新增] 视频教程
- [优化] 路由核心类库
- [更新] debug模块
- [更新] app.js 错误日志保存方法，以天为单位
- [更新] 默认示例
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
│  ├─frontend                     前台区域目录
│  │  ├─controllers               前台控制器目录
│  │  │  ├─homeController.js      前台默认控制器
│  │  ├─views                     前台视图目录
│  ├─tools                        工具区域目录
│  │  ├─controllers               前台控制器目录
│  │  │  ├─generateController.js  数据库模型生成 控制器
│  │  ├─views                     后台视图目录
├─config                          配置目录
│  ├─db.json                      数据库配置文件
├─filters                         过滤器，中间件目录
├─locals                          全局数据注入目录，支持.json文件和.js模块
├─logs                            日志保存目录
│  ├─access                       访问日志
│  ├─error                        错误日志
├─models                          数据库表对应模型目录
├─public                          静态资源目录
│  ├─favicon.ico                  网站收藏图标
├─uploads                         用户上传文件存放目录
├─utils                           工具类库目录
│  ├─socket.js                    Socket.io 服务器演示代码
│  ├─db.js                        数据库模型操作核心库
│  ├─route.js                     路由解析核心库
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
浏览器访问：http://git.oschina.net/baisoft_org/Monk.Node

$ cd Monk.Node

$ npm install

$ npm start

浏览器：http://localhost:3000/
```

### **全局数据注入（v2.2.5 支持）**

全局数据注入 表示可以在 `locals`目录下定义`.json`或者`.js`模块文件，这个文件中暴露的数据或者接口可以在 **整个请求，整个控制器，整个Action和整个视图模板（ejs）中使用**

例如：在locals文件夹下定义 `setting.js`模块文件

```
module.exports = {
    "name": "Monk.Node",
    "version": "2.2.5",
    "author": "百小僧",
    "company": "百签软件（中山）有限公司"
};
```

- 在控制器中的使用：res.locals.文件名

```
module.exports={
    get_index:function(req,res){
        var setting=res.locals.setting;     // setting就是文件名
        var name= setting.name; // => Monk.Node
        var version= setting.version; // => 2.2.5
    }
};
```

- 在视图页面ejs中使用 _locals.文件名

```
<%=_locals.setting.name %>
<%=_locals.setting.version %>
<%=_locals.setting.company %>
```

当然，我们也可以定义局部数据注入，局部数据注入通常在`action`中定义的

```
module.exports={
    get_index:function(req,res){
        res.locals.abc="我是局部的。。。。。";
    }
};
```

- 在视图页面ejs中使用

```
<%=_locals.abc %>
```

全局数据注入使用非常灵活，可以结合数据库操作，最终通过 `module.exports`返回`json对象`数据即可


### 入口配置


- 设置视图模板引擎

```
app.set('view engine', 'ejs');
```

- 设置静态资源目录

```
app.use(express.static(path.join(__dirname, 'public')));
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
resolve
    .setRouteDirectory({
        areaDirectory: __dirname + '/areas',
        controllerDirname: 'controllers',
        defautController: 'home',
        defautAction: 'index'
    })
    .bind(router);
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
    var error = (req.app.get('env') === 'development') ? err : {};
    //写错误日志
    var errorMes = '[' + Date() + ']' + req.url + '\n' + '[' + error.stack + ']' + '\n';
    errorLogStream.write(errorMes);
    var status = err.status || 500;
    res.status(status);
    res.send('<pre>' + status + ' ' + err.message + '\n' + errorMes + '</pre>');
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

> 静态资源默认目录为根目录下的`public`目录

- 基础使用

```
<img src="/imgs/logo.png" />

<link res="stylesheet" href="/css/style.css" />

<script type="text/javascript" src="/js/script.js"></script>
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

### 表单提交

- 视图布局：

```
<h3>表单（不带文件上传，不带： enctype="multipart/form-data"）：</h3>
    <form action="/backend/home/form1" method="post">
        <input type="text" name="name" />
        <input type="submit" value="提交">
    </form>
    <h3>表单（不带文件上传，带： enctype="multipart/form-data"）：</h3>
    <form action="/backend/home/form2" method="post" enctype="multipart/form-data">
        <input type="text" name="name" />
        <input type="submit" value="提交">
    </form>
    <h3>表单（带单个文件上传，带： enctype="multipart/form-data"）：</h3>
    <form action="/backend/home/form3" method="post" enctype="multipart/form-data">
        <input type="file" name="file1">
        <input type="text" name="name" />
        <input type="submit" value="提交">
    </form>
    <h3>表单（带多个文件上传，带： enctype="multipart/form-data"）：</h3>
    <form action="/backend/home/form4" method="post" enctype="multipart/form-data">
        <input type="file" name="file1">
        <input type="file" name="file1">
        <input type="text" name="name" />
        <input type="submit" value="提交">
    </form>
    <h3>表单（带多个文件上传，上传表单名称 不一样(file1,file2,...)，带： enctype="multipart/form-data"）：</h3>
    <form action="/backend/home/form5" method="post" enctype="multipart/form-data">
        <input type="file" name="file1">
        <input type="file" name="file2">
        <input type="text" name="name" />
        <input type="submit" value="提交">
    </form>
```

- 控制器Action处理：

```
var multer = require('multer');

module.exports = {
    // 表单（不带文件上传，不带： enctype="multipart/form-data"）
    post_form1: function (req, res) {
        res.json(req.body);
    },
    // 表单（不带文件上传，带： enctype="multipart/form-data"）：
    post_form2: [multer().array(), function (req, res) {
        res.json(req.body);
    }],
    // 表单（带单个文件上传，带： enctype="multipart/form-data"）：
    post_form3: [multer().single('file1'), function (req, res) {
        res.send("文件：" + JSON.stringify(req.file) + "<br />表单" + JSON.stringify(req.body))
    }],
    // 表单（带多个文件上传，带： enctype="multipart/form-data"）：
    post_form4: [multer().array('file1'), function (req, res) {
        res.send("文件：" + JSON.stringify(req.files) + "<br />表单" + JSON.stringify(req.body))
    }],
    // 表单（带多个文件上传，上传表单名称 不一样(file1,file2,...)，带： enctype="multipart/form-data"）：
    post_form5: [multer().fields([{ name: "file1" }, { name: "file2" }]), function (req, res) {
        res.send("文件：" + JSON.stringify(req.files) + "<br />表单" + JSON.stringify(req.body))
    }]
};
```

详细文档，请参考：[multer 文档](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)

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