const express = require("express");
const router = express.Router();
const users = require("../controller/users");
const asyncHanlder = require('express-async-handler');



router.post( "/userRegistration", 
    asyncHanlder(users.userRegistration)
);

module.exports = router;




