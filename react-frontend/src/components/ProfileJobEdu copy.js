import React from "react";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";

export default function ProfileJobEdu(props) {
  console.log(props.jobs);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="App">
      <div class="container">
        <h1>Listado con Bootstrap</h1>
        <ul class="list-group">
          hola
          {Array.isArray(props.jobs) && props.jobs.length > 0 && (
            <ul className="list-group">
              {props.jobs.map((job) => (
                <li key={job.id} className="list-group-item">
                  {job.job_company}
                </li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
}
