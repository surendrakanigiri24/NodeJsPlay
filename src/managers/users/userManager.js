


// Models invoking
const model = require("../../models/index");

/**
 * This is for user creation
 * @param {object} body
 * @return {object} user
 */

const userCreation = async (body) => {
    try{
        const newUser = await model.userModel.create(body);
        console.log(newUser);
        return newUser;
    }
    catch(error){
        console.error("Error at userCreation Manager: "+error);
        return {};
    }
}

module.exports = {
    userCreation,
}