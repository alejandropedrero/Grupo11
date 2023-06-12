import { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";

const FeedbackTextarea = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(false);
  };

  const handleSubmit = async () => {
    try {
      const requestBody = {
        text: document.getElementById("feedbackTextarea").value,
        recipient_id: id,
      };
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const postFeedbackResponse = await fetch(
        "http://localhost:3001/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
        setModal(true);
  
      console.log(postFeedbackResponse);
    } catch (error) {
      console.error("Error creating feedback:", error);
    }
  };

  return (
    <div
      className="container-fluid bg-light border rounded mb-4"
      style={{ width: "80%" }}
    >
      <div className="d-flex align-items-center mt-3 mb-1">
        <h6 className="mb-3">Opiniones:</h6>
      </div>
      <div className="row">
        <div id="post">
          <div className="mb-2">
            <textarea
              className="form-control text-align"
              rows={5}
              name="text"
              id="feedbackTextarea"
              placeholder="¿Qué piensas de este Tecler?"
            />
          </div>
          <button
            className="btn btn-block mb-2 btn-general"
            style={{ backgroundColor: "palevioletred" }}
            onClick={handleSubmit}
          >
            Publicar
          </button>
        </div>
      </div>
      <Modal show={modal} onHide={handleModal}>
        <Modal.Header>
          <Modal.Title>¡Enviado a base de datos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            className="rounded-pill"
            style={{ backgroundColor: "palevioletred", color: "white" }}
            onClick={handleModal}
          >
            Cerrar
          </button>
        </Modal.Body>
      </Modal>
    </div>

  );
};

export default FeedbackTextarea;
