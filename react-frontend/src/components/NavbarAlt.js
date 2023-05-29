import React, { useEffect, useState } from "react";

export default function NavbarAlt() {
  const [userId, setUserId] = useState("");

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

  return (
    <div className="d-flex justify-content-center">
      <nav
        className="navbar navbar-expand-lg rounded-3 m-3 p-3 sticky-top navbar-dark"
        style={{ backgroundColor: "#79c7c7", width: "85%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo-teclers-final.svg"
              alt="Logo Teclers"
              width="120rem"
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href="#"
                >
                  Personas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="/search-friends"
                >
                  Amigos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="https://tecla.academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cursos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
                    <a className="dropdown-item" href="/">
                      Tu Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
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
