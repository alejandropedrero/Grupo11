import React, { useEffect, useState } from "react";
import NavbarAlt from "../components/NavbarAlt";
import ProfileData from "../components/ProfileData";
import ProfileJobEdu from "../components/ProfileJobEdu";
import ProfileLangCertHobb from "../components/ProfileLangCertHobb";
import { useParams } from "react-router-dom";

function Profile() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const [isId, setId] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (typeof id === "undefined") {
      //La variable id es undefined, no existe en esa URL
      setId(true);
    } else {
      setId(false);
    }

    const fetchData = async () => {
      try {
        setUserId(userId);
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
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
    <>
      <NavbarAlt />
      <div className="container lg-12 d-flex flex-column flex-md-row justify-content-around">
        <div className="col-lg-5 rounded-3 text-bg-light">
          <ProfileData user={user} boton={isId} />
          <ProfileJobEdu user={user} job={true} boton={isId} />
        </div>
        <div className="col-lg-5 rounded-3 text-bg-light">
          <ProfileJobEdu user={user} education={true} boton={isId} />

          <ProfileLangCertHobb user={user} cert={true} />

          <ProfileLangCertHobb user={user} lang={true} />

          <ProfileLangCertHobb user={user} hobb={true} />
        </div>
      </div>
    </>
  );
}

export default Profile;
