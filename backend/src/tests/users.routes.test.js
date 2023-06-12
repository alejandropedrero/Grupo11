import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("GET /users/:id", () => {
  it("No debería devolver la información de un usuario cuando no se proporciona un token", async () => {
    const response = await request(app)
      .get("/users/1")
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(401);
  });
});

//

describe("PATCH /users/:id", () => {
  it("Debería retornar un estado 401 si se intenta actualizar un usuario sin proporcionar un token", (done) => {
    const userId = 1; // ID del usuario a actualizar
    const updatedData = {
      name: "Nuevo Nombre",
      email: "nuevoemail@example.com",
      city: "Nueva Ciudad",
      country: "Nuevo País",
      birthdate: "1990-01-01",
      time_availability: "Tarde",
      linkedin: "https://www.linkedin.com/nuevo_perfil",
    };

    request(app)
      .patch(`/users/${userId}`)
      .send(updatedData)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal("Unauthorized");
        done();
      });
  });
});
