import { useForm } from "react-hook-form";
import React from "react";
// import { Link } from "react-router-dom";
import "../App.css";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="wrapper-lr">
          <div className="container main-lr">
            <div className="row row-lr">
              <div className="col-md-6 side-image-login">
                <img src="" alt="" />
              </div>
              <div className="col-md-6 right-lr">
                <div className="input-box-lr">
                  <header>
                    <h1 className="h1-lr">
                      <span className="underline span-lr">Inicia sesión</span>
                    </h1>
                  </header>
                  {/* Form */}
                  <div className="input-field-lr">
                    <input
                      type="email"
                      className="input-lr"
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
                  <div className="input-field-lr">
                    <input
                      type="password"
                      className="input-lr"
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
                  <div className="input-field-lr">
                    <button className="submit-lr" id="submitBtn">
                      Inicia sesión
                    </button>
                  </div>
                  <div className="signin-lr">
                    <span className="span-lr">
                      ¿No tienes una cuenta?{" "}
                      <a href="login.html">Inicia sesión</a>
                    </span>
                  </div>

                  <div className="signin-lr z-3 text-center mt-3">
                    <span
                      id="error-container"
                      className="text-danger fw-bold span-lr"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
