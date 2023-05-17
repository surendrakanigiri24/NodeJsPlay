const JWT = require('jsonwebtoken');
const CONFIG = require("../config");



const createAccessToken = async (email,id) => {
    return JWT.sign({
        email : email,
        id : id
    },
        CONFIG.ACCESS_TOKEN_SECRET, 
    {
        expiresIn: '10m'    
    });
}


// Creating refresh token not that expiry of refresh. Token is greater than the access token
const createRefreshToken = async (email) => {
    return JWT.sign({
        id : id
    },
        CONFIG.REFRESH_TOKEN_SECRET, 
    {
        expiresIn: '1d'    
    });
}

// Verifying token
const verifyToken = async (token) => {
    JWT.verify(token, CONFIG.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.error(err)
            throw {msg : "Not a valid token!"}
        }
        console.log(decoded)
        // req.userId = decoded.id;
        next();
    });
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    verifyToken
}