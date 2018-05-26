let io = null;

function creatServer() {
  if (io != null) {
    return io;
  }
  io = require('socket.io')(server); // eslint-disable-line
  return io;
}

function closeServer() {
  if (io != null) {
    return io;
  }
  io = require('socket.io')(server); // eslint-disable-line
  return io;
}

module.exports = (server) => {
  this.server = server;
  return {
    creatServer,
    closeServer,
  };
};