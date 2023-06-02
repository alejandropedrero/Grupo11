import React from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";

export default function ProfileJobEdu(props) {
  const [showModal, setShowModal] = useState(false);
  const [profesion, setProfesion] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [duracion, setDuracion] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  // const createProfileJob = async () => {
  //   try {
  //     const jsonbody = await JSON.stringify();
  //     console.log(jsonbody);
  //     const response = await fetch(`http://localhost:3001/users/${userId}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "X-User-Id": userId,
  //       },
  //       body: jsonbody,
  //     });

  //     if (response.ok) {
  //       console.log(response.ok);
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error("Error al actualizar los datos del perfil:", error);
  //   }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ margin: "5% 5%" }}
      >
        <div className="card" style={{ width: "90%" }}>
          <h5
            className="card-header d-flex justify-content-center"
            style={{ backgroundColor: "#79C7C7" }}
          >
            {props.job
              ? "EXPERIENCIA LABORAL"
              : props.education
              ? "EDUCACIÓN"
              : ""}
          </h5>
          <div className="card-body">
            {props.job && (
              <div>
                <h5 className="card-title">{props.user.job_1}</h5>
                <h6 className="card-text">{props.user.job_1_company}</h6>
                <p>
                  {props.user.job_1_start} - {props.user.job_1_end}
                </p>
              </div>
            )}

            {props.job && (
              <div>
                <h5 className="card-title">{props.user.job_2}</h5>
                <h6 className="card-text">{props.user.job_2_company}</h6>
                <p>
                  {props.user.job_2_start} - {props.user.job_2_end}
                </p>
              </div>
            )}

            {props.job && (
              <div>
                <h5 className="card-title">{props.user.job_3}</h5>
                <h6 className="card-text">{props.user.job_3_company}</h6>
                <p>
                  {props.user.job_3_start} - {props.user.job_3_end}
                </p>
              </div>
            )}

            {props.education && (
              <div>
                <h5 className="card-title">{props.user.education_1}</h5>
                <h6 className="card-text">
                  {props.user.education_1_institution}
                </h6>
                <p>{props.user.education_1_end}</p>
              </div>
            )}

            {props.education && (
              <div>
                <h5 className="card-title">{props.user.education_2}</h5>
                <h6 className="card-text">
                  {props.user.education_2_institution}
                </h6>
                <p>{props.user.education_2_end}</p>
              </div>
            )}
          </div>
          {props.job && props.boton ? (
            <button
              onClick={handleShow}
              className="btn-navbar btn btn-general mb-3 col-1 rounded-pill mx-auto me-3"
              style={{ backgroundColor: "#79c7c7" }}
              type="submit"
            >
              +
            </button>
          ) : props.education && props.boton ? (
            <button
              className="btn-navbar btn btn-general mb-3 col-1 rounded-pill mx-auto me-3"
              style={{ backgroundColor: "palevioletred" }}
              type="submit"
            >
              +
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega un puesto de trabajo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProfesion" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Profesión"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmpresa" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDuracion" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Fecha fin - Fecha inicio"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
              />
            </Form.Group>

            <button
              className="btn rounded-pill"
              style={{ backgroundColor: "#79c7c7" }}
              type="submit"
            >
              Enviar
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
