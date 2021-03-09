// implement your server here
// require your posts router and connect it here


const express = require('express');

// connecting routers will go here

const server = express();
server.use(express.json());

// breakpoint routers will go here


server.get('/', (req, res)=>{
    res.send(`<h2>This API is ALIVEEEEE!`);
});

module.exports = server;
