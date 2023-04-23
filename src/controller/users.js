const manager = require("../managers/index");
const validator = require("../validators/users/userRegValidator");


const Users = {

    // User registration to the application
    userRegistration : async (req,res) => {
        validator.validateAsync(req.body);
        const newUserCreated = await manager.userManager.userCreation(req.body);
        res.json(newUserCreated);
    }
}

module.exports = Users;