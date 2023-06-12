import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("GET /people", () => {
  it("Debería devolver un estado 401 cuando no se proporciona un token", async () => {
    const response = await request(app)
      .get("/people")
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(401);
  });
});
