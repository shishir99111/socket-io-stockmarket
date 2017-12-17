module.exports = (server) => {
  const io = require('socket.io')(server);
  const prices = [10, 12, 11.5, 13, 10.2, 10.7, 11.25, 12.8];
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      logger.info(`message:  ${msg}`);
    });
    setInterval(() => {
      socket.emit('price', prices[Math.floor(Math.random() * prices.length)]);
    }, 500);
  });

};