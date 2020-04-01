var io = require('socket.io')(8000);

clients = [];

var chat = io 
  .of('/chat')
  .on('connection', socket => {
    console.log(`New Client: ${socket.id}`);

    clients.push(socket);
    socket.emit('message', { msg: 'Bem vindo' })
    socket.broadcast.emit('message', { msg: `${socket.id} acabou de entrar.` })

    console.log(`Connected clients: ${clients.length}`);

    socket.on('message', msg => {
      console.log(`Client ${socket.id} message: ${msg}`)
      socket.broadcast.emit('message', msg)
    })

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
      socket.broadcast.emit('message', { msg: `${socket.id} acabou de sair.` })
      clients = clients.filter(client => client.id !== socket.id);
      console.log(`Connected clients: ${clients.length}`);
    });
  });
