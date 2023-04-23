const manager = require("../managers/index")


const Users = {

    // User registration to the application
    userRegistration : async (req,res) => {
        const newUserCreated = await manager.userManager.userCreation(req.body);
        res.json(newUserCreated);
    }
}

module.exports = Users;