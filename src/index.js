require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;




// TO handle requests
const server = app.listen( PORT, () => {
    console.log('Server listening on port 3000');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`${PORT} is already in use`);
    } else {
      console.error(err);
    }
});