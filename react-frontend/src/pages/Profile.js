import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  useEffect(() => {
    const currentUserId = localStorage.getItem('userId');

    fetch(`http://localhost:3001/users/${currentUserId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Id': currentUserId,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const profilePictureUrl = `../img/${data.profile_picture}`; //¡IMÁGENES!
        const profileNameText = data.name;
        const profileEmailText = data.email;

        const profilePictureElements = document.getElementsByClassName('card-img-top');
        const profileNameElements = document.getElementById('profile-name');
        const profileEmailElements = document.getElementById('profile-email');

        Array.from(profilePictureElements).forEach((imgElement) => {
          imgElement.src = profilePictureUrl;
        });

        profileNameElements.innerText = profileNameText;
        profileEmailElements.innerText = profileEmailText;
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

return (
  <div className="container lg-12 d-flex flex-column flex-md-row justify-content-around">
    <div className="col-lg-5 rounded-3 text-bg-light">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src=""
              className="card-img-top rounded-circle w-50 mt-4"
              alt="foto perfil"
            />
          </div>
          <div className="card-body">
            <h5
              className="card-title d-flex justify-content-center"
              id="profile-name"
            />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id="profile-email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                className="bi bi-envelope-at-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#79C7C7"
                  d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"
                />
                <path
                  fill="#79C7C7"
                  d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"
                />
              </svg>
              Correo:{" "}
            </li>
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#79C7C7"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              Ciudad:{" "}
            </li>
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#79C7C7"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
                />
              </svg>
              País:{" "}
            </li>
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-calendar-event-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#79C7C7"
                  d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              Fecha de nacimiento:{" "}
            </li>
          </ul>
          <div className="card-body">
            <div className="mt-20">
              <Link to="/editable-profile">
                <button
                  className="btn-navbar btn rounded-5 btn-general mb-3"
                  style={{ backgroundColor: "#79c7c7" }}
                  type="submit"
                >
                  Editar cuenta
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <h5 className="card-header d-flex justify-content-center">
            {" "}
            EXPERIENCIA LABORAL
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .card-header {\n                                background-color: #79C7C7\n                                }\n                            "
              }}
            />
          </h5>
          <div className="card-body">
            <h5 className="card-title">Puesto 1</h5>
            <h6 className="card-text">Empresa 1</h6>
            <p>Duración</p>
            <h5 className="card-title">Puesto 2</h5>
            <h6 className="card-text">Empresa 2</h6>
            <p>Duración</p>
            <h5 className="card-title">Puesto 3</h5>
            <h6 className="card-text">Empresa 3</h6>
            <p>Duración</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-5 rounded-3 text-bg-light">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <h5 className="card-header d-flex justify-content-center">
            {" "}
            EDUCACIÓN
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n                                .card-header {\n                                background-color: #79C7C7\n                                }\n                            "
              }}
            />
          </h5>
          <div className="card-body">
            <h5 className="card-title">Título 1</h5>
            <h6 className="card-text">Universidad 1</h6>
            <p>Duración</p>
            <h5 className="card-title">Título 2</h5>
            <h6 className="card-text">Universidad 2</h6>
            <p>Duración</p>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <div className="card-header d-flex justify-content-center">
            CERTIFICACIONES
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Título 1</li>
            <li className="list-group-item">Título 2</li>
          </ul>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <div className="card-header d-flex justify-content-center">
            IDIOMAS
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Español</li>
            <li className="list-group-item">Inglés</li>
          </ul>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <div className="card-header d-flex justify-content-center">
            AFICIONES
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Afición 1</li>
            <li className="list-group-item">Afición 2</li>
            <li className="list-group-item">Afición 3</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

)}


export default Profile;