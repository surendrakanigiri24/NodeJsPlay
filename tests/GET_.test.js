const _ = require("./baseTestStuff.js");
const mongoose = require("mongoose");
const {app, server} = require('../src/index.js');

describe("GET /", () => {

  beforeAll(function () {
    // server = require("../src/index.js")
  });

  afterAll( async() => {
    await mongoose.disconnect()
    await server.close();
  });

  it("should respond ok (200) to with a simple message", (done) => {
    _.chai
      .request(app)
      .get("/")
      .end((err, res) => {
            expect(200);
            done();
      });
  })
})

// const request = require('supertest');
// const {app, server} = require('../src/index.js');
// const mongoose = require("mongoose");

// describe('GET /', () => {

//   beforeAll(async () => {
//   });

//   afterAll(async () => {
//     await mongoose.disconnect()
//     await server.close();
//   });

//   it('should respond with status 200 to a GET request', async () => {
//     await request(app)
//       .get('/')
//       .expect(200);
//   });
// });

