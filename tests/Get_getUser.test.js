const _ = require("./baseTestStuff.js");
const mongoose = require("mongoose");
const {app, server} = require('../src/index.js');

describe("PUT /api/users/findUser", () => {
    console.log(_.TEST_DATA.USERID)
    
    beforeAll(async function () {
    });

    afterAll(async () => {
        await mongoose.disconnect()
        await server.close();
    });

    it("Should get the user info", async () => {
        const response = await _.chai
            .request(app)
            .get("/api/users/findUser?id="+_.TEST_DATA.USERID);

        expect(response.status).toBe(200);
        expect(typeof response.body).toBe("object");
        expect(response.body).toMatchSnapshot();
    })
})