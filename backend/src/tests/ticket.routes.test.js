import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("POST /ticket", () => {
  it("Debería devolver un estado 401 cuando no se proporciona un token válido", async () => {
    const response = await request(app)
      .post("/ticket")
      .send({ titulo: "Titulo del ticket", consulta: "Consulta del ticket" });

    expect(response.status).to.equal(401);
  });
});
