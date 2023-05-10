require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON data in request body
app.use(express.json());

//Error Handler configure
const  errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// DB Configuration
const connectDB = require('./clients/db/db');
connectDB();

// Routes forwarding
const routes = require("./routes");
app.use("/api/users", routes.userRoutes);

// sample route
app.get("/", (req,res) => {
  res.status(200).send({message:" YA!, I am working"});
})


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


module.exports = app; // for testing