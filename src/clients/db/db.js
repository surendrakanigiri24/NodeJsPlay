const mongoose = require('mongoose');
const CONFIG = require("../../config");

const connectDB = async () => {
    try {
        const DB_URI = `mongodb+srv://${CONFIG.DB_USERNAME}:${encodeURIComponent(CONFIG.DB_PASSWORD)}@${CONFIG.DB_HOST}/${CONFIG.DB_NAME}`;

        const conn = await mongoose.connect(DB_URI);
        console.log(`Mongo db connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error occured at Mongo DB Connection, error stack as below: \n ${error}`);
        // process.exit(1);
    }
};

module.exports = connectDB;