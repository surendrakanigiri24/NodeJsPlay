const _ = require("./baseTestStuff.js");
const mongoose = require("mongoose");
const {app, server} = require('../src/index.js');


describe("POST /api/users/userRegistration", () => {

    beforeAll(async function () {
    });

    afterAll(async () => {
        await mongoose.disconnect()
        await server.close();
    });

    // Success scenario
    it("Should create a new user", async () => {
        const response = await _.chai
            .request(app)
            .post("/api/users/userRegistration")
            .send(_.TEST_DATA.USER)
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe("object");
        expect(response.body).toMatchSnapshot();
    });

    // Failure case
    // it("Should throw an error", async () => {
    //     const response = await _.chai
    //         .request(app)
    //         .post("/api/users/userRegistration")
    //         .send(_.TEST_DATA.USER)
    //     expect(response.status).toBe(400);
    //     expect(typeof response.body).toBe("object");
    //     expect(response.body).toMatchSnapshot();
    // })
})