const _ = require("./baseTestStuff.js");


describe("PUT /api/users/editUserData", () => {
    let server;

    before(async function () {
        server = require("../src/index.js");
    });

    after(function (done) {
        done();
    });

    it("Should update the  user info", async () => {
        const response = await _.chai
            .request(server)
            .put("/api/users/editUserData")
            .send(_.TEST_DATA.EDITUSER)
        console.log(response.body)
        response.should.have.status(200);
        response.body.should.be.an("object");
    })

})