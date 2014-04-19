  var socket = io.connect('http://localhost');
  socket.on('connect', function () {
      socket.on('message', function (msg) {
            console.log(msg);
      });
  });
