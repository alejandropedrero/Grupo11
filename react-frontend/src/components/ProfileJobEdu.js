import React from "react";
import { useState } from "react";
import ModalJobEdu from "./ModalJobEdu";

export default function ProfileJobEdu(props) {
  const [modalOpen, setModalOpen] = useState(false);
  function openModalFormJob() {
    setModalOpen(true);
    console.log("Hola")
  }
  function modalFormEdu() {
    setModalOpen(true);

  }

  return (
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
        {props.job ? (
          <button
            onClick={openModalFormJob}
            className="btn-navbar btn btn-general mb-3 col-1 rounded-pill mx-auto me-3"
            style={{ backgroundColor: "#79c7c7" }}
            type="submit"
          >
            +
          </button>
        ) : props.education ? (
          <button
          onClick={modalFormEdu}
            className="btn-navbar btn btn-general mb-3 col-1 rounded-pill mx-auto me-3"
            style={{ backgroundColor: "palevioletred" }}
            type="submit"
          >
            +
          </button>
        ) : (
          ""
        ) &&
        <ModalJobEdu isOpen={modalOpen} />
        
        }
      </div>
    </div>
  );
}
