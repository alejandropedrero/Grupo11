import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("POST /friends", () => {
  it("Debería no dejar agregar un amigo cuando no se proporciona un token válido", async () => {
    const invalidToken = 123;
    const friendName = "randomAlberto";

    // Solicitud POST a /friends sin proporcionar un token válido
    const response = await request(app)
      .post("/friends")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${invalidToken}`)
      .send({ name: friendName });

    expect(response.status).to.equal(401);

    expect(response.text).to.equal('{"error":"Invalid token"}');
  });
});

//

describe("DELETE /friends/:id", () => {
  it("Debería devolver un error de token inválido al intentar eliminar un amigo sin un token válido", async () => {
    const friendId = 1;

    const response = await request(app)
      .delete(`/friends/${friendId}`)
      .set("Content-Type", "application/json")
      .set("Authorization", "Bearer invalidToken");

    expect(response.status).to.equal(401);

    expect(response.text).to.equal('{"error":"Invalid token"}');
  });
});
