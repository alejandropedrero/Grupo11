import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register.css";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  //Constantes para el botón de 'crear cuenta nueva'
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
}
  //Acaba aquí

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !name) {
      setError("Debes completar todos los campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        // Aquí iría la ventana modal de Sonia
        alert("Usuario creado correctamente!");
      } else {
        console.log(data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError("Error de conexión");
    }
  };

  return (
    <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            <img src="" alt="" />
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
              <form onSubmit={handleSubmit}>
                <header>
                  <h1>
                    <span className="underline">Crea tu cuenta</span>
                  </h1>
                </header>
                <div className="input-field">
                  <input
                    type="email"
                    className="input"
                    id="email-input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <span id="email-error" className="error"></span>
                <div className="input-field">
                  <input
                    type="password"
                    className="input"
                    id="password-input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>
                <span id="password-error" className="error"></span>
                <div className="input-field">
                  <input
                    type="text"
                    className="input"
                    id="name-input"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Nombre</label>
                </div>
                <span id="name-error" className="error"></span>
                <div className="input-field">
                  <button onClick={handleClick} className="submit" id="submitBtn">
                    Crear cuenta nueva
                  </button>
                </div>
                <div className="signin">
                <span>
                    ¿Ya tienes una cuenta?{" "}
                    <Link to="/">Inicia sesión</Link>
                  </span>
                </div>
              </form>
              <div className="signin z-3 text-center mt-3">
                <span id="error-container" className="text-danger fw-bold">
                  {error}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
