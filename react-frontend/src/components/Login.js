import { useForm } from "react-hook-form";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //Constantes para el botón de 'inicia sesión'
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search-users");
  };
  //Acaba aquí

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));

    try {
      const result = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const resultInJson = await result.json();
      console.log(resultInJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 side-image">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 right">
              <div className="input-box">
                <header>
                  <h1>
                    <span className="underline">Inicia sesión</span>
                  </h1>
                </header>
                {/* Form */}
                <div className="input-field">
                  <input
                    type="email"
                    className="input"
                    id="email"
                    name="email"
                    autoComplete="off"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.titulo?.type === "required" && (
                    <p style={{ color: "red" }}>Email requerido</p>
                  )}
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input"
                    id="password"
                    name="password"
                    {...register("password", {
                      required: true,
                    })}
                  />
                  {errors.titulo?.type === "required" && (
                    <p style={{ color: "red" }}>Contraseña requerida</p>
                  )}
                  <label htmlFor="password" id="password" name="password">
                    Contraseña
                  </label>
                </div>
                <div className="input-field">
                  <button
                    onClick={handleClick}
                    className="submit"
                    id="submitBtn"
                  >
                    Inicia sesión
                  </button>
                </div>
                <div className="signin">
                  <span>
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register">Regístrate</Link>
                  </span>
                </div>

                <div className="signin z-3 text-center mt-3">
                  <span id="error-container" className="text-danger fw-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
