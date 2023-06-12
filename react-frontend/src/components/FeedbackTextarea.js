import { useState } from "react";
import { useParams } from "react-router-dom";

const FeedbackTextarea = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmit = async () => {
    try {
      const requestBody = {
        text: document.getElementById("feedbackTextarea").value,
        recipient_id: id,
      };
      const userId = localStorage.getItem("userId");
      const postFeedbackResponse = await fetch(
        "http://localhost:3001/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
          },
          body: JSON.stringify(requestBody),
        }
      );
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
    </div>
  );
};

export default FeedbackTextarea;
