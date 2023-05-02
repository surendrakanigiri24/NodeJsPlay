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
        throw error;
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
        throw error;
    }
}

/**
 * This is for updating user data
 * @param {object} payload
 * @return {*}
 */
const updateUserData = async(payload) => {
    try{
        const findUser = await model.userModel.findOne({ _id : new mongoose.Types.ObjectId(payload.id)});
        if(!findUser){
            return { msg: "Not a valid user"}
        }

        const updateUser = await model.userModel.updateOne({ _id : new mongoose.Types.ObjectId(payload.id)}, payload)
        return updateUser;
    }
    catch(error){
        console.error("Error at updateUserData Manager: \n" + error);
        throw error;
    }
}

/**
 * This is for delete user
 * @param {string} id
 * @return {*}
 */
const deleteUser = async (id) => {
    try{
        const deletedUserCount = await model.userModel.deleteOne({ _id : new mongoose.Types.ObjectId(id)});
        return deletedUserCount;
    }   
    catch(error){
        console.error("Error at deleteUser Manager: \n" + error);
        throw error;
    }
    
}
module.exports = {
    userCreation,
    findUser,
    updateUserData,
    deleteUser,
}