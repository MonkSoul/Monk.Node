var io = require('socket.io')();

// socket.io 基础使用，监听连接请求
io.on('connection', function (socket) {
	console.log("客户端连接成功~~");

	// 监听来自客户端事件
	socket.on('send', function (data) {
		// 调用客户端receive事件，并传递data
		io.emit('receive', data);
	});

	// ...
});

exports.listen = function (server) {
	return io.listen(server);
};