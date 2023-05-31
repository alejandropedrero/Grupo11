import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function NavbarAlt() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-User-Id": userId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(userId);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg rounded-3 m-3 p-1 fw-bolder sticky-top ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/posts">
            <img
              src="logo-teclers-final.svg"
              alt="Logo Teclers"
              width="100rem"
              className="navbar-logo"
            />
          </a>

          <button
            className="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/posts">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/search-users"
                >
                  Personas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search-friends">
                  Mis amigos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://tecla.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cursos
                </a>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center justify-content-center"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img-users/${userId}.jpg`}
                    alt="Foto perfil"
                    className="user-profile-picture rounded-circle"
                    width="40rem"
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Tu Perfil
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
