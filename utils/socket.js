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