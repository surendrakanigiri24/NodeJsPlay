const _ = require("./baseTestStuff.js");

describe("GET /", () => {
    let server;

  before(function () {
    server = require("../src/index.js");
  });

  after(function () {
    //  server.stopServer();
  });

  it("should respond ok (200) to with a simple message", (done) => {
    _.chai
      .request(server)
      .get("/")
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");
          res.body.should.have.property("message").that.match(/ YA!, I am working/);
          done();
      });
  })
})