const express = require("express");
const router = express.Router();
const users = require("../controller/users");


router.post( "/userRegistration", users.userRegistration);

module.exports = router;




