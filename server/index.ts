const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

// initialize app
const app = express();
// initialize cors
app.use(cors());

// create server and http
const server = http.createServer(app);
// create io and connect the app
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
server.listen(3000, () => {
  console.log('server started');
});
