let io = null;

module.exports = (server) => {
  if (io != null) {
    return io;
  }
  io = require('socket.io')(server); // eslint-disable-line
  return io;
};