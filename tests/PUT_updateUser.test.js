const _ = require("./baseTestStuff.js");
const mongoose = require("mongoose");
const {app, server} = require('../src/index.js');

describe("PUT /api/users/editUserData", () => {

    beforeAll(async function () {
    });

    afterAll(async () => {
        await mongoose.disconnect()
        await server.close();
    });


    it("Should update the  user info", async () => {
        const response = await _.chai
            .request(app)
            .put("/api/users/editUserData")
            .send(_.TEST_DATA.EDITUSER)

        expect(response.status).toBe(200);
        expect(typeof response.body).toBe("object");
        expect(response.body).toMatchSnapshot();
    })

})