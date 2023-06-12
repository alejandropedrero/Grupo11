import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe("POST /login", () => {
  it("Debería autenticar correctamente al usuario cuando se proporciona un correo electrónico y una contraseña válidos", async () => {
    // Datos de prueba
    const email = "apedrerovega@gmail.com";
    const password = "password123";

    // Correo electrónico y contraseña válidos
    const response = await request(app)
      .post("/login")
      .send({ email, password })
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(200);

    expect(response.body).to.have.property("token");
    expect(response.body).to.have.property("userId");
  });
});

//

describe("POST /login", () => {
  it("Debería devolver un error de autenticación cuando se proporciona un correo electrónico o una contraseña incorrectos", async () => {
    // Datos de prueba
    const email = "apvegapedrero@gmail.com";
    const password = "estepasswordnoestabien";

    // Correo electrónico o contraseña incorrectos
    const response = await request(app)
      .post("/login")
      .send({ email, password })
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(401);

    expect(response.text).to.equal("<h1>Email o password incorrectos</h1>");
  });
});

//

describe("POST /login", () => {
  it("Debería devolver un error de inicio de sesión cuando se proporciona un correo electrónico que no existe en la base de datos", async () => {
    // Datos de prueba
    const email = "noexiste@ejemplo.com";
    const password = "password123456";

    // Correo electrónico no existente
    const response = await request(app)
      .post("/login")
      .send({ email, password })
      .set("Content-Type", "application/json");

    expect(response.status).to.equal(401);

    expect(response.text).to.equal("<h1>Email o password incorrectos</h1>");
  });
});
