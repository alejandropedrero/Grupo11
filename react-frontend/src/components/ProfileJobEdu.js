import React from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProfileJobEdu(props) {
  const [showModal, setShowModal] = useState(false);
  const [profesion, setProfesion] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [duracion, setDuracion] = useState("");
  const [isId, setId] = useState(false);
  const [userId, setUserId] = useState("");
  const { id } = useParams();
  const [edu, setEdu] = useState([]);
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (typeof id === "undefined") {
      //La variable id es undefined, no existe en esa URL
      setId(true);
    } else {
      setId(false);
    }

  }, []);

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
          <div className="card-body mt-3">
            {Array.isArray(props.jobs) && props.jobs.length > 0 && (
              <ul className="list-group">
                {props.jobs.map((job) => (
                  <li key={job.id}>
                    <div>
                      <h5 className="card-title">{job.job}</h5>
                      <h6 className="card-text">{job.job_company}</h6>
                      <p>
                        {job.job_start} - {job.job_end}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(props.edu) && props.edu.length > 0 && (
              <ul className="list-group">
                {props.edu.map((education) => (
                  <li key={education.id}>
                    <div>
                      <h5 className="card-title">{education.education}</h5>
                      <h6 className="card-text">
                        {education.education_institution}
                      </h6>
                      <p>{education.education_end}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
