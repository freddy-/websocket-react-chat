io = require("socket.io-client"),
ioClient = io.connect("http://localhost:8000/chat");

ioClient.on("message", (msg) => console.log(msg));

ioClient.emit('message', 'mensagem do client!');