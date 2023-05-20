const _ = require("./baseTestStuff.js");
const mongoose = require("mongoose");
const {app, server} = require('../src/index.js');

describe("DELETE /api/users/deleteUser", () => {
    
    beforeAll(async function () {
    });

    afterAll(async () => {
        await mongoose.disconnect()
        await server.close();
    });


    it("Should delete the user", async () => {
        const response = await _.chai
            .request(app)
            .delete("/api/users/deleteUser?id="+_.TEST_DATA.USERID)
            
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe("object");
        expect(response.body).toMatchSnapshot();
    })
})