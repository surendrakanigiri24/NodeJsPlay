const managers = require("../managers/index");
const validator = require("../validators/users/userRegValidator");


const Users = {

    // User registration to the application
    userRegistration : async (req,res) => {
        validator.validateAsync(req.body);
        const newUserCreated = await managers.userManager.userCreation(req.body);
        res.json(newUserCreated);
    },

    // Find user by user id
    findUser : async (req,res) => {
        const id = req.query.id;
        if(id == ''){
            return res.status(400).json({ message : "_id is not valid"})
        }
        const user = await managers.userManager.findUser(id);
        res.json(user);
    },

    // update user data
    editUserData : async (req,res) => {
        const { error, value } = await validator.validateAsync(req.body); // Joi validation
        if (error) {
            throw error; // Throw an error if validation fails
        }

        const updateUser = await managers.userManager.updateUserData(req.body);
        res.json(updateUser);
    }
}

module.exports = Users;