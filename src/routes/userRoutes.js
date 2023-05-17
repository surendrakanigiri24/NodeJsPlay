const express = require("express");
const router = express.Router();
const users = require("../controller/users");
const asyncHanlder = require('express-async-handler');



router.post( "/userRegistration", 
    asyncHanlder(users.userRegistration)
);

router.get( "/findUser?:id",
    asyncHanlder(users.findUser)
);

router.put( "/editUserData",
    asyncHanlder(users.editUserData)
)

router.delete( "/deleteUser?:id",
    asyncHanlder(users.deleteUser)
)


module.exports = router;




