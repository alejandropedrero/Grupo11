import React from "react";
import { useState } from "react";

export default function ProfileLangCertHobb(props) {
  const userId = localStorage.getItem("userId");
  const [isEditable, setIsEditable] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  function editButton(event) {
    event.preventDefault();
    setIsEditable(true);
    setIsButtonVisible(true);
  }

  const updateCert = async () => {
    try {
      const token = localStorage.getItem("token");
      const jsonbody = await JSON.stringify({
        cert_1: document.getElementById("cert_1").value,
        cert_2: document.getElementById("cert_2").value,
      });
      const response = await fetch(
        `http://localhost:3001/certifications/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
            Authorization: `Bearer ${token}`,
          },
          body: jsonbody,
        }
      );

      if (response.ok) {
        console.log(response.ok);
      } else {
      }
    } catch (error) {
      console.error("Error al actualizar los datos del perfil:", error);
    }
    setIsEditable(false);
    setIsButtonVisible(false);
  };

  const updateLang = async () => {
    try {
      const token = localStorage.getItem("token");
      const jsonbody = await JSON.stringify({
        lang_1: document.getElementById("lang_1").value,
        lang_2: document.getElementById("lang_2").value,
      });
      const response = await fetch(
        `http://localhost:3001/languages/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
            Authorization: `Bearer ${token}`,
          },
          body: jsonbody,
        }
      );

      if (response.ok) {
        console.log(response.ok);
      } else {
      }
    } catch (error) {
      console.error("Error al actualizar los datos del perfil:", error);
    }
    setIsEditable(false);
    setIsButtonVisible(false);
  };

  const updateHobb = async () => {
    try {
      const token = localStorage.getItem("token");
      const jsonbody = await JSON.stringify({
        hobby_1: document.getElementById("hobby_1").value,
        hobby_2: document.getElementById("hobby_2").value,
      });
      const response = await fetch(`http://localhost:3001/hobbies/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
          Authorization: `Bearer ${token}`,
        },
        body: jsonbody,
      });

      if (response.ok) {
        console.log(response.ok);
      } else {
      }
    } catch (error) {
      console.error("Error al actualizar los datos del perfil:", error);
    }
    setIsEditable(false);
    setIsButtonVisible(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ margin: "5% 5%" }}
    >
      <div className="card" style={{ width: "90%" }}>
        <div
          className="card-header d-flex justify-content-center"
          style={{ backgroundColor: "#79C7C7" }}
        >
          {props.cert
            ? "CERTIFICACIONES"
            : props.lang
            ? "IDIOMAS"
            : props.hobb
            ? "HOBBIES"
            : ""}
        </div>
        <ul className="list-group list-group-flush">
          {props.cert && (
            <div>
              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="cert_1"
                  name="text"
                  aria-describedby="certificacion"
                  placeholder="Certificación"
                  key={props.user.cert_1}
                  defaultValue={props.user.cert_1}
                />
              </li>

              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="cert_2"
                  name="text"
                  aria-describedby="certificacion"
                  placeholder="Certificación"
                  key={props.user.cert_2}
                  defaultValue={props.user.cert_2}
                />
              </li>
            </div>
          )}

          {props.lang && (
            <div>
              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="lang_1"
                  name="text"
                  aria-describedby="idioma"
                  placeholder="Idioma"
                  key={props.user.lang_1}
                  defaultValue={props.user.lang_1}
                />
              </li>

              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="lang_2"
                  name="text"
                  aria-describedby="idioma"
                  placeholder="Idioma"
                  key={props.user.lang_2}
                  defaultValue={props.user.lang_2}
                />
              </li>
            </div>
          )}

          {props.hobb && (
            <div>
              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="hobby_1"
                  name="text"
                  aria-describedby="aficion"
                  placeholder="Afición"
                  key={props.user.hobby_1}
                  defaultValue={props.user.hobby_1}
                />
              </li>
              <li className="list-group-item">
                <input
                  disabled={!isEditable}
                  type="text"
                  className="form-control"
                  id="hobby_2"
                  name="text"
                  aria-describedby="aficion"
                  placeholder="Afición"
                  key={props.user.hobby_2}
                  defaultValue={props.user.hobby_2}
                />
              </li>
            </div>
          )}
        </ul>
        <div className="card-body">
          <div className="mt-20 d-flex justify-content-between">
            {props.boton && (
              <button
                className="btn-navbar btn rounded-5 btn-general mb-3"
                style={{ backgroundColor: "#79c7c7" }}
                type="submit"
                onClick={editButton}
              >
                Añadir
              </button>
            )}
            {isButtonVisible && props.cert && (
              <button
                onClick={updateCert}
                className="btn-navbar btn rounded-5 btn-general mb-3"
                style={{
                  backgroundColor: "palevioletred",
                }}
                type="submit"
              >
                Guardar cambios
              </button>
            )}
            {isButtonVisible && props.lang && (
              <button
                onClick={updateLang}
                className="btn-navbar btn rounded-5 btn-general mb-3"
                style={{
                  backgroundColor: "palevioletred",
                }}
                type="submit"
              >
                Guardar cambios
              </button>
            )}
            {isButtonVisible && props.hobb && (
              <button
                onClick={updateHobb}
                className="btn-navbar btn rounded-5 btn-general mb-3"
                style={{
                  backgroundColor: "palevioletred",
                }}
                type="submit"
              >
                Guardar cambios
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
