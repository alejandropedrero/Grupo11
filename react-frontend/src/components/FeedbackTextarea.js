import { useState } from "react";

const FeedbackTextarea = () => {
  const [feedback, setFeedback] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
const [userName, setUserName] = useState("");


  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log(feedback);
    setFeedback("");
  };

  return (
    <div className="container-fluid bg-light border rounded mb-4" style={{ width: "80%" }}>
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
              placeholder="¿Qué piensas de este Tecler?"
              value={feedback}
              onChange={handleFeedbackChange}
            />
          </div>
          <button
            className="btn btn-block mb-2 btn-general"
            style={{ backgroundColor: "palevioletred"}}
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
