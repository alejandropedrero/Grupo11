import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("POST /register", () => {
  it("Debería crear un nuevo usuario cuando se proporcionan todos los campos requeridos", async () => {
    // Datos de prueba
    const email = "test@example.com";
    const password = "password123";
    const name = "John Doe";

    // Realizar la solicitud de registro con los datos de prueba
    const response = await request(app)
      .post("/register")
      .send({ email, password, name })
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(200);

    expect(response.body).to.deep.equal({ message: "Usuario creado" });
  });
});

//

describe("POST /register", () => {
  it("Debería devolver un error cuando faltan campos requeridos en la solicitud de registro", async () => {
    // Datos de prueba con campo faltante
    const email = "abcdef@ghijkl.com";
    const password = "password123";

    // Realizar la solicitud de registro con datos incompletos
    const response = await request(app)
      .post("/register")
      .send({ email, password })
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(400);

    expect(response.body).to.deep.equal({
      error: "Debes completar todos los campos",
    });
  });
});
