const _ = require("./baseTestStuff.js");

describe("DELETE /api/users/deleteUser", () => {
    let server;

    before(async function () {
        server = require("../src/index.js");
    });

    after(function (done) {
        done();
    });

    it("Should delete the user", async () => {
        const response = await _.chai
            .request(server)
            .delete("/api/users/deleteUser?id="+_.TEST_DATA.USERID)
        console.log(response.body)
        response.should.have.status(200);
        response.body.should.be.an("object");
    })
})