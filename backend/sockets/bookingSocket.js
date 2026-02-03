module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join_salon', (salonId) => {
      socket.join(salonId);
    });
  });
};