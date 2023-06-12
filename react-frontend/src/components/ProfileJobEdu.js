import React from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProfileJobEdu(props) {
  const [showModal, setShowModal] = useState(false);
  const [showModalEdu, setShowModalEdu] = useState(false);
  const [profesion, setProfesion] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [final, setFinal] = useState("");
  const [comienzo, setComienzo] = useState("");
  const [estudio, setEstudio] = useState("");
  const [institucion, setInstitucion] = useState("");
  const [finalizacion, setFinalizacion] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  const handleClose = () => setShowModal(false);
  const handleShowJob = () => setShowModal(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    refreshPage();
  };

  const handleCloseEdu = () => setShowModalEdu(false);
  const handleShowEdu = () => setShowModalEdu(true);
  const handleSubmitEdu = (e) => {
    e.preventDefault();
    handleClose();
    refreshPage();
  };

  const addJob = async () => {
    try {
      const userId = localStorage.getItem("userId");
      setUserId(userId);
      const jsonbody = await JSON.stringify({
        job: document.getElementById("job").value,
        job_company: document.getElementById("job_company").value,
        job_end: document.getElementById("job_end").value,
        job_start: document.getElementById("job_start").value,
      });
      const response = await fetch(`http://localhost:3001/jobs/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
        },
        body: jsonbody,
      });

      if (response.ok) {
        console.log(response.ok);
      } else {
      }
    } catch (error) {
      console.error("Error al actualizar los datos de la vida laboral:", error);
    }
  };

  const addEducation = async () => {
    try {
      const userId = localStorage.getItem("userId");
      setUserId(userId);
      const jsonbody = await JSON.stringify({
        education: document.getElementById("education").value,
        education_institution: document.getElementById("education_institution")
          .value,
        education_end: document.getElementById("education_end").value,
      });
      const response = await fetch(
        `http://localhost:3001/education/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
          },
          body: jsonbody,
        }
      );

      if (response.ok) {
        console.log(response.ok);
      } else {
      }
    } catch (error) {
      console.error("Error al actualizar los datos de los estudios:", error);
    }
  };



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
            {props.tituloJob
              ? "EXPERIENCIA LABORAL"
              : props.tituloEdu
              ? "EDUCACIÓN"
              : ""}
          </h5>
          <div className="card-body mt-3">
            {Array.isArray(props.jobs) && props.jobs.length > 0 && (
              <ul className="list-group">
                {props.jobs.map((job) => (
                  <div key={job.id}  >
                    <h5 className="card-title">{job.job}</h5>
                    <h6 className="card-text">{job.job_company}</h6>
                    <p>
                      {job.job_start} - {job.job_end}
                    </p>
                  </div>
                ))}
                
              </ul>
            )}

            {Array.isArray(props.edu) && props.edu.length > 0 && (
              <ul className="list-group">
                {props.edu.map((education) => (
                  <div key={education.id}>
                    <h5 className="card-title">{education.education}</h5>
                    <h6 className="card-text">
                      {education.education_institution}
                    </h6>
                    <p>{education.education_end}</p>
                  </div>
                ))}
              </ul>
            )}
          </div>
          {props.botonJob ? (
            <button
              onClick={handleShowJob}
              className="btn-navbar btn btn-general mb-3 col-1 rounded-pill mx-auto me-3"
              style={{ backgroundColor: "#79c7c7" }}
              type="submit"
            >
              +
            </button>
          ) : props.botonEdu ? (
            <button
              onClick={handleShowEdu}
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
                id="job"
                type="text"
                placeholder="Profesión"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmpresa" className="mb-3">
              <Form.Control
                id="job_company"
                type="text"
                placeholder="Empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDuracion" className="mb-3">
              <Form.Control
                id="job_end"
                type="text"
                placeholder="Fecha fin"
                value={final}
                onChange={(e) => setFinal(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formDuracion" className="mb-3">
              <Form.Control
                id="job_start"
                type="text"
                placeholder="Fecha inicio"
                value={comienzo}
                onChange={(e) => setComienzo(e.target.value)}
              />
            </Form.Group>

            <button
              onClick={addJob}
              className="btn rounded-pill"
              style={{ backgroundColor: "#79c7c7" }}
              type="submit"
            >
              Enviar
            </button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showModalEdu} onHide={handleCloseEdu}>
        <Modal.Header closeButton>
          <Modal.Title>Agrega un estudio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-4">
          <Form onSubmit={handleSubmitEdu}>
            <Form.Group controlId="formProfesion" className="mb-3">
              <Form.Control
                id="education"
                type="text"
                placeholder="Estudio"
                value={estudio}
                onChange={(e) => setEstudio(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formInstitution" className="mb-3">
              <Form.Control
                id="education_institution"
                type="text"
                placeholder="Institución"
                value={institucion}
                onChange={(e) => setInstitucion(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFinalizacion" className="mb-3">
              <Form.Control
                id="education_end"
                type="text"
                placeholder="Fecha fin de estudio"
                value={finalizacion}
                onChange={(e) => setFinalizacion(e.target.value)}
              />
            </Form.Group>

            <button
              onClick={addEducation}
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
