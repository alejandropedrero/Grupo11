import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarAlt from "../components/NavbarAlt";
import ProfileData from "../components/ProfileData";
import ProfileJobEdu from "../components/ProfileJobEdu";
import ProfileLangCertHobb from "../components/ProfileLangCertHobb";
import FeedbackTextarea from "../components/FeedbackTextarea";
import FeedbackItem from "../components/FeedbackItem";

function ProfileUser() {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({ feedback: [] });
  const [userPhoto, setUserPhoto] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
          },
        });
        const responseJson = await response.json();
        setUser(responseJson);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handlePostSubmit = async (feedback) => {
    try {
      const response = await fetch("http://localhost:3001/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
        },
        body: JSON.stringify({ feedback }),
      });
      const responseJson = await response.json();
      setUser((prevState) => ({
        ...prevState,
        feedback: [...prevState.feedback, responseJson],
      }));


      // setUserPhoto();
      // setUserName();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavbarAlt />
      <div className="container lg-12 d-flex flex-column flex-md-row justify-content-around">
        <div className="col-lg-5 rounded-3 text-bg-light">
          <ProfileData user={user} />
          <ProfileJobEdu user={user} job={true} />
        </div>
        <div className="col-lg-5 rounded-3 text-bg-light">
          <ProfileJobEdu user={user} education={true} />
          <ProfileLangCertHobb user={user} cert={true} />
          <ProfileLangCertHobb user={user} lang={true} />
          <ProfileLangCertHobb user={user} hobb={true} />
          <div className="col-lg-10 bg-light p-3">
            <FeedbackTextarea onSubmit={handlePostSubmit} />
            {user.feedback && user.feedback.map((feedbackItem) => (
  <FeedbackItem
    key={feedbackItem.id}
    userName={userName}
    userPhoto={userPhoto}
    text={feedbackItem.text}
  />
))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
