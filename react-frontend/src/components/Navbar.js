import React, { useEffect } from "react";

export default function Navbar() {
  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");

  //   fetch(`http://localhost:3001/users/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-User-Id": userId,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const profilePictureUrl = `../img/${data.profile_picture}`;
  //       const profilePictureElements = document.querySelectorAll(
  //         ".user-profile-picture"
  //       );
  //       for (const imgElement of profilePictureElements) {
  //         imgElement.src = profilePictureUrl;
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching profile:", error);
  //     });
  // }, []);

  return (
    <div className="d-flex justify-content-center">
      <nav
        className="navbar navbar-expand-lg rounded-3 m-3 p-3 sticky-top navbar-dark"
        style={{ backgroundColor: "#79c7c7", width: "85%" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="">
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
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Barra de búsqueda */}
          <div className="container col-lg-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                placeholder="Buscar"
                className="form-control"
              />
            </div>
          </div>

          {/* Elementos del menú colapsable */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ color: "white" }}
                  aria-current="page"
                  href=""
                >
                  Personas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="">
                  Amigos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="https://tecla.academy/"
                  target="_blank"
                >
                  Cursos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src=""
                    alt="Foto perfil"
                    className="user-profile-picture rounded-circle"
                    width="40rem"
                  />
                </a>
                {/* Dropdown para acceder al perfil y cerrar sesión */}
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="">
                      Tu Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="">
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
