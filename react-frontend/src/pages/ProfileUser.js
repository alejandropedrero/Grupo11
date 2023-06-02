import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarAlt from "../components/NavbarAlt";
import ProfileData from "../components/ProfileData";
import ProfileJobEdu from "../components/ProfileJobEdu";
import ProfileLangCertHobb from "../components/ProfileLangCertHobb";

function ProfileUser() {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);

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
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;