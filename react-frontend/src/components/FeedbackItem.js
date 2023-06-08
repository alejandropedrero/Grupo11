import React from "react";

const FeedbackItem = ({ userName, userPhoto, text }) => {
  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={userPhoto}
            alt="User profile"
            width="40px"
            height="40px"
            className="user-profile-picture rounded-circle"
          />
          <h6 className="mb-0">{userName}</h6>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
