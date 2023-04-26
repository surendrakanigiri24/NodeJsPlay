const mongoose = require('mongoose');

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
        console.error("Error at userCreation Manager: \n" + error);
        return {};
    }
}

/**
 * This is for having user details based on user_id
 * @param {string} id
 * @return {object}
 */
const findUser = async (id) => {
    try{
        const user = await model.userModel.findOne({ _id : new mongoose.Types.ObjectId(id)})
        console.log(user)
        return user;
    }
    catch(error){
        console.error("Error at findUser Manager: \n" + error);
        return {};
    }
}

module.exports = {
    userCreation,
    findUser,
}