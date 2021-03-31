const express = require('express');
const app = express()
const expressServer = app.listen(3000)

const io = require('socket.io')(expressServer,{
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
})

const redisAdapter = require('socket.io-redis')
const redis = require('redis')
const redisClient = redis.createClient({host:'localhost', port:6379})

io.on('connection', (socket) => {
    // console.log(socket)

    
    socket.on('joinNamespace', (namespace) => {
        // console.log(`/${namespace}`)
        io.of(`/${namespace}`).on('connection', function(socketNs) {
            console.log(socketNs)
        });
    })
})
