import React from "react";

const PostItem = ({ text, postDate, userName, imageUrl }) => {
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
      <div className="row card-body">
        <div id="post" className="">
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
