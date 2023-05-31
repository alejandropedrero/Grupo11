import React from "react";

const PostItem = ({ text, postDate, userName }) => {
  return (
    <div className="post">
      <p className="post-text">{text}</p>
      <p className="post-date">
        Escrito por {userName} el {postDate}
      </p>
    </div>
  );
};

export default PostItem;
