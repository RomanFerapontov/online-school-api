const { app } = require("../../source/server.js");
const request = require("supertest");

describe("Enpoints testing:", () => {
  const token = process.env.TOKEN;

  beforeAll(() => {});

  test("Return 200 for GET /users", (done) => {
    request(app).get("/api/users").set({ "x-token": token }).expect(200, done);
  });

  test("Return 200 for GET /users/hash", (done) => {
    request(app)
      .get("/api/users/:userHash")
      .set({ "x-token": token })
      .expect(200, done);
  });

  test("Return 200 for PUT /users/hash", (done) => {
    request(app)
      .get("/api/users/:userHash")
      .set({ "x-token": token })
      .expect(200, done);
  });
});
