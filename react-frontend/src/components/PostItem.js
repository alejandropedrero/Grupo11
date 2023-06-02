import React from "react";

const PostItem = ({
  text,
  postDate,
  userName,
  imageUrl,
  numLikes,
  handleLike,
}) => {
  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={imageUrl}
            alt="User profile"
            width="40px"
            height="40px"
            className="user-profile-picture rounded-circle"
          />
          <h6 className="mb-0">{userName}</h6>
        </div>
        <p className="text-end mb-0 small text-muted">{postDate}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <div className="d-flex justify-content-end align-items-center">
          <span className="me-1">{numLikes}</span>
          <i
            onClick={handleLike}
            className="bi bi-heart-fill text-danger"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
