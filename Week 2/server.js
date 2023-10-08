const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const redisAdapter = require('socket.io-redis');
require('dotenv').config()

const port = process.argv[2] || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Use Redis as a message broker for Socket.io across multiple servers
io.adapter(redisAdapter(process.env.REDIS_URL));

// Handle incoming socket connections
io.on('connection', (socket) => {
    // Get the room name from the client
    const { room } = socket.handshake.query;

    // Join the specified chat room
    socket.join(room);

    // Listen for messages from clients
    socket.on('message', (message) => {
        // Broadcast the message to all clients in the chat room
        io.to(room).emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        socket.leave(room);
    });
});

// Start the server
server.listen(port, () => {
    console.log('Server is running on port ' + port);
});
