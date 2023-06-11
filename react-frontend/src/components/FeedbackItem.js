import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FeedbackItem = () => {

const [printerFeedback, setPrinterFeedback] = useState(false)
const [userId, setUserId] = useState("");
const [userProfilePicture, setUserProfilePicture] = useState("");

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const postDate = new Date(dateString);
  return postDate.toLocaleString("es-ES", options);
};

useEffect(() => {
  fetchFeedbackData();
  fetchFeedback();
}, []);

const fetchFeedbackData = async () => {
  try {
    const userId = localStorage.getItem("userId");
    const userResponse = await fetch(
      `http://localhost:3001/users/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
        },
      }
    );
    const userData = await userResponse.json();
    setUserId(userId);
    setUserProfilePicture(userData.profile_picture);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

  const fetchFeedback = async () => {
    try {
      const feedbackResponse = await fetch("http://localhost:3001/feedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
     const responseJSON = await feedbackResponse.body
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src
            alt="User profile"
            width="40px"
            height="40px"
            className="user-profile-picture rounded-circle"
          />
          <h6 className="mb-0">{}</h6>
        </div>
        <p className="text-end mb-0 small text-muted">{}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{}</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
