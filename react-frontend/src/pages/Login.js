import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token, userId } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        navigate("/posts");
      } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("Error connecting to the server");
    }
  };

  return (
    <div className="login-form">
      <div className="wrapper-lr">
        <div className="container main-lr">
          <div className="row row-lr">
            <div className="col-md-6 side-image-login">
            </div>
            <div className="col-md-6 right-lr">
              <div className="input-box-lr">
                <form onSubmit={handleSubmit}>
                  <header>
                    <h1 className="h1-lr">
                      <span className="underline span-lr">Inicia sesión</span>
                    </h1>
                  </header>
                  <div className="input-field-lr">
                    <input
                      type="email"
                      className="input-lr"
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="input-field-lr">
                    <input
                      type="password"
                      className="input-lr"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" id="password" name="password">
                      Contraseña
                    </label>
                  </div>
                  <div className="input-field-lr">
                    <button className="submit-lr" id="submitBtn" type="submit">
                      Inicia sesión
                    </button>
                  </div>
                  <div className="signin-lr">
                    <span className="span-lr">
                      ¿No tienes una cuenta?{" "}
                      <Link to="/register">Regístrate</Link>
                    </span>
                  </div>
                  <div className="signin-lr z-3 text-center mt-3">
                    <span
                      id="error-container"
                      className="text-danger fw-bold span-lr"
                    >
                      {error}
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
