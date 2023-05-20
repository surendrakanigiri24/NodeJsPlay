//During the test the env variable is set to test
process.env.NODE_ENV = "test";

// Test dev dependency setup:
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const generateRandomNumber = () => {
    const min = 100; // Minimum value (inclusive)
    const max = 999; // Maximum value (inclusive)
  
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomValue = generateRandomNumber();
console.log(randomValue);

const TEST_DATA = {
    USER : {
        "email": `siriv${randomValue}@gmail.net`,
        "password": "surendraKanigiri",
        "firstName": "Surendra",
        "lastName": "Kanigiri",
        "role": "user",
        "isVerified": false
    },
    USERID: "6461b875e864f439e3f67390",
    EDITUSER : {
        "id":"6461b875e864f439e3f67390",
        "email": `siriv${randomValue}@gmail.net`,
        "password": "surendraKani",
        "firstName": "Surendra",
        "lastName": "Kanigiri",
        "role": "user",
        "isVerified": false
    },
}

module.exports = {
    chai,
    TEST_DATA
}