var io = require('socket.io')();

io.on('connection', function (socket) {
	console.log("客户端连接成功~~");

	socket.on('send', function (data) {
		io.emit('receive', data);
	});

	// ...
});

exports.listen = function (server) {
	return io.listen(server);
};