let io = null;

function createServer() {
  if (io != null) {
    return io;
  }
  io = require('socket.io')(this.server); // eslint-disable-line
  return io;
}

function closeServer() {
  if (io === null) {
    return 'Socket already closed';
  }
  io = null; // eslint-disable-line
  return true;
}

module.exports = (server) => {
  this.server = server;
  return {
    createServer,
    closeServer,
  };
};