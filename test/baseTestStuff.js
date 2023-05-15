//During the test the env variable is set to test
process.env.NODE_ENV = "test";

// Test dev dependency setup:
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();


const TEST_DATA = {
    USER : {
        "email": "siriv19745@gmail.net",
        "password": "surendraKanigiri",
        "firstName": "Surendra",
        "lastName": "Kanigiri",
        "role": "user",
        "isVerified": false
    },
    USERID: "6461beab6362c4dd22baaa69",
    EDITUSER : {
        "id":"6461b875e864f439e3f67390",
        "email": "siriv19975@gmail.net",
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