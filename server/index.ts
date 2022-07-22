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
// Types
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
// Initialize the connection
io.on('connection', (socket: any) => {
  console.log(`user connected ${socket.id}`);
  // This will be sent by the user on the room.
  // Meaning on the current port
  socket.on('messages', (data: object) => {
    console.log(data);
    // This means that broadcast or share this mf to the users in the room.
    // Send them messages back to everyone in the room.
    socket.broadcast.emit('messages_received', data);
  });
});
server.listen(3001, () => {
  console.log('server started');
});
