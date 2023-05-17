const _ = require("./baseTestStuff.js");


describe("POST /api/users/userRegistration", () => {
    let server;

    before(async function () {
        server = require("../src/index.js");
    });

    after(function (done) {
        done();
    });

    // Success scenario
    it("Should create a new user", async () => {
        const response = await _.chai
            .request(server)
            .post("/api/users/userRegistration")
            .send(_.TEST_DATA.USER)
        response.should.have.status(200);
        response.body.should.be.an("object");
    });

    // Failure case
    it("Should throw an error", async () => {
        const response = await _.chai
            .request(server)
            .post("/api/users/userRegistration")
            .send(_.TEST_DATA.USER)
        response.should.have.status(400);
        response.body.should.be.an("object");
    })
})