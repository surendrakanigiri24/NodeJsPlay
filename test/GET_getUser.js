const _ = require("./baseTestStuff.js");

describe("PUT /api/users/findUser", () => {
    let server;
    console.log(_.TEST_DATA.USERID)
    before(async function () {
        server = require("../src/index.js");
    });

    after(function (done) {
        done();
    });

    it("Should get the user info", async () => {
        const response = await _.chai
            .request(server)
            .get("/api/users/findUser?id="+_.TEST_DATA.USERID)
        response.should.have.status(200);
        response.body.should.be.an("object");
    })
})